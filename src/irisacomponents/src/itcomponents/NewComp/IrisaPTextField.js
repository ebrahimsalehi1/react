import React, {useState} from 'react';
import {TextField, withStyles} from '@material-ui/core';
//import {styles} from '../../assets/jss/style'
import moment from "jalali-moment";
import PropTypes from 'prop-types';
import validator from "validator";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import validation from './Validation'

function IrisaPTextField(props) {


    const [state,setState] =  {
            errors: {},
            helperText: "",
            value: "",
            valid: (!(props.validationType && props.validationType.includes("required") && !props.disabled))
    };   

    // const [errors,setErrors] = useState({})
    // const [helperText,setHelperText] = useState("")
    // const [mvalue,setMvalue] = useState("")
    // const [valid,setValid] = useState((!(props.validationType && props.validationType.includes("required") && !props.disabled)))
/*
    async function setErrorMsg(validationType, value, isValid, msg) {
        await this.setState({
            errors: {
                ...this.state.errors,
                [validationType]: {
                    msg: (value && !isValid) || (validationType == "required" && !isValid) ? msg : ""
                }
            }
        });
    }

    async function printErrorsMsgs (errors, validationType){
        let str = '';
        validationType.filter(validation => {
            if (errors[validation].msg && errors[validation].msg.length > 0) {
                str += errors[validation].msg + `\n`;
            }
        });

        await this.setState({helperText: str});
    };
*/
        const {
            classes, useLov, label, name, disabled, required,
            validationType, validationTypeParam, adornment, icon, select, InputProps, SelectProps,
            fullWidth, rows, value, multiline,onChange, ...other
        } = props;
        const {helperText, valid} = state;

        return (
            <TextField

                //select mode; begin
                SelectProps={SelectProps}
                inputProps={InputProps}
                select={select}
                //select mode; end

                disabled={useLov ? true : disabled}
                error={!valid}
                helperText={!valid ?
                    <span id={`${name}-helper-text`}>{helperText}</span> : undefined}
                onBlur={(e) => {
                    if (validationType) {
                        validation(e.target.value,
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
                } : null}
                required={validationType && validationType.includes("required")}
                {...other}
                name={name}
                className={fullWidth ? classes.marginFullwidth : classes.margin2}
                fullWidth={fullWidth}
                rows={rows}
                label={label !== undefined ? label : ' '} //set required text , if field is require
                value={value == null ? '' : value}
                onChange={onChange}
                multiline={multiline ? true : false}
                variant="outlined"
            />
        )
    
}

IrisaPTextField.defaultProps = {
    validationType: []
};

IrisaPTextField.propTypes = {
    classes: PropTypes.object.isRequired,
    validationType: PropTypes.oneOf(['afterDate', 'alpha', 'alphaFa',
        'alphanumeric', 'alphanumericFa', 'email', 'equals', 'lowercase',
        'matches', 'mobilePhone', 'number', 'numberFloat', 'numberInt', 'required', 'uppercase']),
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
    useLov: PropTypes.bool
};

export default (IrisaPTextField);
//export default withStyles(styles)(IbxTextField);
