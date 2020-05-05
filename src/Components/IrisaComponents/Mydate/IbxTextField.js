import React, {Component} from 'react';
import {TextField, withStyles} from '@material-ui/core';
import {styles} from '../../../assets/jss/style'
import moment from "jalali-moment";
import * as PropTypes from 'prop-types';
import validator from "validator";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";

class IbxTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            helperText: "",
            value: "",
            valid: (!(props.validationType && props.validationType.includes("required") && !props.disabled))
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.useLov === true && typeof (nextProps.value) !== 'undefined'
            && nextProps.value !== '' && nextProps.value !== null && prevState.value !== nextProps.value)
            return {
                valid: true

            };

        return null;
    }

    componentDidMount() {
        this.setState({
            value: this.props.value,
            // hiding helper text in loading data
            valid: (!(this.props.validationType && this.props.validationType.includes("required")
                && !this.props.value && !this.props.disabled))
        });
    }

    validity = async (value, validationType, validationTypeParam) => {
        const {errorCallback} = this.props;

        await this.setState({valid: true});
        for (let i = 0; i < validationType.length; i++) {
            let isValid = true;
            let msg = "";

            switch (validationType[i]) {
                case "afterDate": {
                    let targetDate = validationTypeParam ? parseInt(validationTypeParam[i]) : new Date().getTime();
                    let displayDate = moment(new Date(targetDate)).locale('fa').format('YYYY/MM/DD HH:mm:ss');

                    isValid = (!isNaN(value) ? parseInt(value) : value) >= targetDate;
                    msg = "زمان حداقل: " + displayDate;
                    break;
                }

                case "alpha": {
                    isValid = await validator.isAlpha(value, 'en-US');
                    msg = "کاراکترهای مجاز: حروف لاتین";
                    break;
                }

                case "alphaFa": {
                    let regEx = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي]+[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي ]*$/;
                    isValid = await validator.matches(validator.rtrim(value), regEx);
                    msg = "کاراکترهای مجاز: حروف فارسی و فاصله";
                    break;
                }

                case "alphanumeric": {
                    isValid = await validator.isAlphanumeric(value, 'en-US');
                    msg = "کاراکترهای مجاز: حروف لاتین و عدد";
                    break;
                }

                case "alphanumericFa": {
                    let regEx = /^[٠١٢٣٤٥٦٧٨٩0-9آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي]+[٠١٢٣٤٥٦٧٨٩0-9آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي ]*$/;
                    isValid = await validator.matches(validator.rtrim(value), regEx);
                    msg = "کاراکترهای مجاز: حروف فارسی، فاصله و عدد";
                    break;
                }

                case "equals": {
                    if (validationTypeParam && validationTypeParam[i]) {
                        isValid = await validator.equals(value, validationTypeParam[i]);
                        msg = "مقادیر مساوی نمی باشند";
                    }
                    break;
                }

                case "email": {
                    isValid = await validator.isEmail(value);
                    msg = "ایمیل معتبر نمی باشد";
                    break;
                }

                case "lowercase": {
                    isValid = await validator.isLowercase(value);
                    msg = "کاراکترهای مجاز: حروف لاتین کوچک";
                    break;
                }

                case "matches": {
                    if (validationTypeParam && validationTypeParam[i]) {
                        isValid = await validator.matches(value, validationTypeParam[i]);
                        msg = "ورودی با عبارت منطقی مطابقت ندارد";
                    }

                    break;
                }

                case "mobilePhone": {
                    isValid = await validator.isMobilePhone(value, 'fa-IR');
                    msg = "لطفا شماره موبایل وارد نمایید";
                    break;
                }

                case "number": {
                    isValid = await validator.isNumeric(value);
                    msg = "لطفا عدد وارد نمایید";
                    break;
                }

                case "numberFloat": {
                    if (validationTypeParam && validationTypeParam[i]) {
                        isValid = await validator.isFloat(value, validationTypeParam[i]);

                        msg = `لطفا عدد اعشاری وارد نمایید` + `\n`;
                        msg += validationTypeParam[i].min
                            ? `بزرگ تر یا مساوی: ` + `${validationTypeParam[i].min}` + `\n` : ``;
                        msg += validationTypeParam[i].max
                            ? `کوچک تر یا مساوی: ` + `${validationTypeParam[i].max}` + `\n` : ``;
                        msg += validationTypeParam[i].gt
                            ? `بزرگ تر از: ` + `${validationTypeParam[i].gt}` + `\n` : ``;
                        msg += validationTypeParam[i].lt
                            ? `کوچک تر از: ` + `${validationTypeParam[i].lt}` + `\n` : ``;
                    } else {
                        isValid = await validator.isFloat(value);
                        msg = `لطفا عدد اعشاری وارد نمایید` + `\n`;
                    }

                    break;
                }

                case "numberInt": {
                    if (validationTypeParam && validationTypeParam[i]) {
                        isValid = await validator.isInt(value, validationTypeParam[i]);

                        msg = `لطفا عدد صحیح وارد نمایید` + `\n`;
                        msg += validationTypeParam[i].min
                            ? `بزرگ تر یا مساوی: ` + `${validationTypeParam[i].min}` + `\n` : ``;
                        msg += validationTypeParam[i].max
                            ? `کوچک تر یا مساوی: ` + `${validationTypeParam[i].max}` + `\n` : ``;
                        msg += validationTypeParam[i].gt
                            ? `بزرگ تر از: ` + `${validationTypeParam[i].gt}` + `\n` : ``;
                        msg += validationTypeParam[i].lt
                            ? `کوچک تر از: ` + `${validationTypeParam[i].lt}` + `\n` : ``;
                    } else {
                        isValid = await validator.isInt(value);
                        msg = `لطفا عدد صحیح وارد نمایید` + `\n`;
                    }

                    break;
                }

                case "required": {
                    isValid = await !validator.isEmpty(value);
                    msg = "مقدار فیلد اجباری می باشد";
                    break;
                }

                case "uppercase": {
                    isValid = await validator.isUppercase(value);
                    msg = "کاراکترهای مجاز: حروف لاتین بزرگ";
                    break;
                }
            }//switch end
            await this.setErrorMsg(validationType[i], value, isValid, msg);

            let valid = [];
            valid[this.props.name] = this.state.valid;

            if (validationType[i] != "required" && value != "" && !isValid) {
                await this.setState({valid: false}, () => {
                    valid[this.props.name] = this.state.valid;
                    if (errorCallback)
                        errorCallback(valid)
                });

            } else if (validationType[i] == "required" && value == "") {
                await this.setState({valid: false}, () => {
                    valid[this.props.name] = this.state.valid;
                    if (errorCallback)
                        errorCallback(valid)
                });
            } else {
                if (errorCallback)
                    errorCallback(valid)
            }
        }//for end

        await this.printErrorsMsgs(this.state.errors, validationType).toString();
    };

    async setErrorMsg(validationType, value, isValid, msg) {
        await this.setState({
            errors: {
                ...this.state.errors,
                [validationType]: {
                    msg: (value && !isValid) || (validationType == "required" && !isValid) ? msg : ""
                }
            }
        });
    }

    printErrorsMsgs = async (errors, validationType) => {
        let str = '';
        validationType.filter(validation => {
            if (errors[validation].msg && errors[validation].msg.length > 0) {
                str += errors[validation].msg + `\n`;
            }
        });

        await this.setState({helperText: str});
    };

    render() {
        const {
            classes, useLov, label, name, disabled,
            validationType, validationTypeParam, adornment, icon, select, InputProps, SelectProps,
            fullWidth, rows, value, multiline,manualError, ...other
        } = this.props;
        const {helperText, valid} = this.state;

        return (
            <TextField

                //select mode; begin
                select={select}
                SelectProps={SelectProps}
                //select mode; end

                disabled={useLov ? true : disabled}
                error={manualError || !valid}
                helperText={!valid ?
                    <span id={`${name}-helper-text`}>{helperText}</span> : undefined}
                onBlur={(e) => {
                    if (validationType) {
                        this.validity(e.target ? e.target.value : e,
                            validationType ? validationType : false,
                            validationTypeParam ? validationTypeParam : false);
                    }
                }}
                InputProps={adornment ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            {icon}
                        </InputAdornment>
                    )
                } : (select && InputProps ? {
                    endAdornment: (InputProps)
                } : null)}
                required={validationType && validationType.includes("required")}
                {...other}
                name={name}
                className={fullWidth ? classes.marginFullwidth : classes.margin2}
                fullWidth={fullWidth}
                rows={rows}
                label={label !== undefined ? label : ' '} //set required text , if field is require
                value={value == null ? '' : value}
                onChange={this.props.onChange}
                multiline={multiline ? true : false}
                variant="outlined"
            />
        )
    }
}

IbxTextField.defaultProps = {
    validationType: []
};

IbxTextField.propTypes = {
    classes: PropTypes.object,
    validationType: PropTypes.arrayOf(PropTypes.oneOf(['afterDate', 'alpha', 'alphaFa',
        'alphanumeric', 'alphanumericFa', 'email', 'equals', 'lowercase',
        'matches', 'mobilePhone', 'number', 'numberFloat', 'numberInt', 'required', 'uppercase'])),
    validationTypeParam: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string,
    adornment: PropTypes.bool,
    icon: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
    fullWidth: PropTypes.bool,
    rows: PropTypes.string,
    multiline: PropTypes.bool,
    useLov: PropTypes.bool,
    manualError: PropTypes.bool
};

export default withStyles(styles)(IbxTextField);    