import React,{useState,useEffect,useRef} from 'react';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import {Card, Grid, IconButton, withStyles} from "@material-ui/core";
import IbxTextField from "./IbxTextField";
import {AlarmOn,Today} from "@material-ui/icons";
import PropTypes from "prop-types";
import IbxDialog from "./IbxDialog";
import Button from '@material-ui/core/Button';
import {styles} from "../../assets/jss/style";
import NativeSelect from "@material-ui/core/NativeSelect";
import Moment from 'moment-jalaali';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import { BasePicker, MuiPickersUtilsProvider, TimePickerView } from "material-ui-pickers";
import DateFnsUtils from '@date-io/date-fns';
//import {MuiPickersUtilsProvider, TimePickerView, BasePicker, TimePicker, InlineTimePicker} from 'material-ui-pickers';
import {TimePicker} from 'material-ui-time-picker';

import JalaliUtils from "material-ui-pickers-jalali-utils";
import enLocale from "date-fns/locale/en-US";
import DialogContent from "@material-ui/core/DialogContent";

const MyDialogContent = withStyles(theme =>({
    root: {
        borderBottom: `0px solid ${theme.palette.divider}`,
        //textAlign:'center',
        margin: 0,
        padding: 0,
        backgroundColor:'#009ce6',
        "overflow-y":'none'

    }
}))(props=> {
    const {classes,children} = props;
    return (
        <DialogContent className={classes.root}>
            {children}
        </DialogContent>
    );
});

const timePickerStyles ={
            width:'100%'
        }

const MyTimePicker = withStyles(them=>({
    root: {
        width: '100%'
    }
}))(props=>{
    const {classes,...others} = props;
    console.log('MyTimePicker',classes);
    return <TimePicker className={classes.root} {...others}/>
})

//     styled(TimePicker)({
//     width:'100%'
// })


function convertPersianDigitsToDigit(valueToConvert){
    return String(valueToConvert)
        .replace(/۰/g,"0")
        .replace(/۱/g,"1")
        .replace(/۲/g,"2")
        .replace(/۳/g,"3")
        .replace(/۴/g,"4")
        .replace(/۵/g,"5")
        .replace(/۶/g,"6")
        .replace(/۷/g,"7")
        .replace(/۸/g,"8")
        .replace(/۹/g,"9")
}

function IbxDatePicker2(props){
    const {
        classes, style, name, lang, dateType, handleDateChange, value, disabled,
        fullWidth, label, disableFuture, disablePast, required, helperText,
        fieldName,validationType,title,locale,showButtonOnTextField, showAdvancedButtons,dateSelectionType,
        componentType,handleTimeChange, ...other
    } = props;

    //const classesTimePicker = timePickerStyles();

    const fromPersianYear = 1300
    const fromYear = 1918
    const years = Array.from(Array(100).keys());
    const persianMonths = [
        {title:"فروردین",id:1},
        {title:"اردیبهشت",id:2},
        {title:"خرداد",id:3},
        {title:"تیر",id:4},
        {title:"مرداد",id:5},
        {title:"شهریور",id:6},
        {title:"مهر",id:7},
        {title:"آبان",id:8},
        {title:"آذر",id:9},
        {title:"دی",id:10},
        {title:"بهمن",id:11},
        {title:"اسفند",id:12}
    ]

    // months list by order
    const months = [
        {title:"January",id:1},
        {title:"February",id:2},
        {title:"March",id:3},
        {title:"April",id:4},
        {title:"May",id:5},
        {title:"June",id:6},
        {title:"July",id:7},
        {title:"August",id:8},
        {title:"September",id:9},
        {title:"October",id:10},
        {title:"November",id:11},
        {title:"December",id:12}
        ]

    let currentDate0 = null
    const defaultValue=(mlocale,mvalue)=>{
        let enteredValue = Moment()

        switch(typeof(mvalue)){
            case 'number':
                enteredValue = Moment(new Date(mvalue))
                break;
            case 'string':
                enteredValue = Moment(new Date(Number(mvalue)))
                break;
            case 'object':
                if(mvalue instanceof Date)
                    enteredValue = Moment(mvalue)
                else
                    enteredValue = Moment(`${mvalue.year}/(${(Number(mvalue.month)<10 ? '0':'')+mvalue.month}/${(Number(mvalue.day)<10 ? '0':'')+mvalue.day}`,'YYYY/MM/DD')
                break;
        }

        const    year = convertPersianDigitsToDigit(`${enteredValue.local(mlocale).format((mlocale === "fa" ? "j" : "") + 'YYYY')}`)
        const    month = convertPersianDigitsToDigit(`${enteredValue.local(mlocale).format((mlocale === "fa" ? "j" : "") + 'MM')}`)
        const    day = convertPersianDigitsToDigit(`${enteredValue.local(mlocale).format((mlocale === "fa" ? "j" : "") + 'DD')}`)
        // if(mlocale === "en" )
        //     currentDate = new Date(Number(day),Number(month),Number(year));
        // else
        //     currentDate = new Date(enteredValue.local("en").format('YYYY'),enteredValue.local("en").format('MM'),enteredValue.local("en").format('DD'));

        currentDate0 = {day:Number(day),month:Number(month),year:Number(year)};
        return {day:Number(day),month:Number(month),year:Number(year)};
    }

    const [open,setOpen] = useState(false);
    const [localeType,setLocaleType] = useState(locale===undefined ? "fa":locale);

    const [selectedDay, setSelectedDay] = useState(defaultValue(localeType,value));
    //const [selectedMonth, setSelectedMonth] = useState(currentDate0.month);
    //const [selectedYear, setSelectedYear] = useState(currentDate0.year);
    const [tabIndexSelected,setTabIndexSelected] = useState(componentType==='date' || componentType==='datetime' ? 0:1);
    const [time,setTime] = useState(new Date());//{hour:0,minute:0});

    // useEffect(()=>{

        // setSelectedDay(currentDate0)
        //setSelectedYear(currentDate0.year)
        //setSelectedMonth(currentDate0.month)
    //     console.log("component is rendering","step 4",currentDate0,selectedDay)
    //
    // },[localeType]);

    function handleClose () {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }

    function handleOk(){
        setOpen(false);
    }

    function handleClearValue(){
        //setSelectedDay(null);
    }

    function handleCalendarDateChange(e) {
        setSelectedDay(e);
        let currentDate = null;
        if (localeType === "en")
            currentDate = new Date(Number(e.year),Number(e.month)-1,Number(e.day));
        else {
            const enteredValue = Moment(`${e.year}/${(Number(e.month)<10 ? '0':'')+e.month}/${(Number(e.day)<10 ? '0':'')+e.day}`,'jYYYY/jMM/jDD')
            currentDate = new Date(Number(convertPersianDigitsToDigit(enteredValue.local("en").format('YYYY'))), Number(convertPersianDigitsToDigit(enteredValue.local("en").format('MM')))-1, Number(convertPersianDigitsToDigit(enteredValue.local("en").format('DD'))));
        }
        if(handleDateChange!==undefined)
            handleDateChange(currentDate.getTime(),name);

        if(dateSelectionType===undefined || dateSelectionType==='one')
            handleClose();
    }



    function handleTabChange(event,value){
        setTabIndexSelected(value);
    }

    function handleLocaleChange(event){
        setLocaleType(event.target.value);
        defaultValue(event.target.value,value);
        setSelectedDay(currentDate0);

    }

    function handleTimePickerChange(date) {
        console.log("handleTimePickerChange",date)
        setTime(date);
        if(handleTimeChange!==undefined)
            handleTimeChange({hour:date.getHours(),minute:date.getMinutes()});
    };

    console.log("component is rendering",localeType,value,selectedDay)

    return (

        <div>

            <Grid sm item>
                {showButtonOnTextField !== undefined && showButtonOnTextField &&
                    <IbxTextField name={name === undefined ? fieldName : name} label={label} adornment required={required}
                                  validationType={validationType}
                                  value={selectedDay.year+"/"+(selectedDay.month<10 ? "0":"")+selectedDay.month+"/"+(selectedDay.day<10 ? "0":"")+selectedDay.day}
                                  onClick={handleOpen}
                                  icon={<IconButton disabled={disabled} onClick={handleOpen}>
                                      <Today/>
                    </IconButton>}/>
                }
                {(showButtonOnTextField === undefined || !showButtonOnTextField) &&
                    <IbxTextField name={name===undefined ? fieldName:name} label={label} adornment required={required} validationType={validationType}
                        value={selectedDay.year+"/"+(selectedDay.month<10 ? "0":"")+selectedDay.month+"/"+(selectedDay.day<10 ? "0":"")+selectedDay.day}
                        onClick={handleOpen}
                    />
                }

            </Grid>

            {open &&
            <IbxDialog
                title={title === undefined || title === null ? "انتخاب تاریخ برای" : title}
                maxWidth="lg"
                TransitionComponent
                 //      scroll={"paper"}
                openModal={open}
                eventClose={handleClose}>

                {/*<Card className={classes.card}>*/}

                    {componentType!==undefined && componentType==='datetime' &&
                    <AppBar position="static">
                        <Tabs value={tabIndexSelected} onChange={handleTabChange}>
                            <Tab icon={<Today />}></Tab>
                            <Tab icon={<AlarmOn />}></Tab>
                        </Tabs>
                    </AppBar>
                    }

                    {tabIndexSelected === 0 && showAdvancedButtons !== undefined && showAdvancedButtons &&
                        <Grid>
                        <label>{"test test"}</label>
                        </Grid>
                    }
                        {tabIndexSelected === 0 &&
                        <NativeSelect value={localeType} onChange={handleLocaleChange}>
                            <option value={"fa"}>شمسی</option>
                            <option value={"en"}>میلادی</option>
                        </NativeSelect>
                        }
                    {tabIndexSelected === 0 && localeType === 'fa' &&
                    <Calendar
                        style={{".Calendar__day.-selected":'blue'}}
                        value={selectedDay}
                        onChange={handleCalendarDateChange}
                        locale={"fa"}
                        shouldHighlightWeekends
                    />
                    }
                    {tabIndexSelected === 0 && localeType === 'en' &&
                        <Calendar
                        style={{".Calendar__day.-selected, .Calendar__day.-selectedStart, .Calendar__day.-selectedEnd":'blue'}}
                        value={selectedDay}
                        onChange={handleCalendarDateChange}
                        shouldHighlightWeekends
                        />
                    }
                    {tabIndexSelected === 1 &&

                    <MyTimePicker
                        style={"width:100%;"}
                        mode={"24h"}
                        onChange={handleTimePickerChange}
                        value={time}
                        //onMinutesSelected={e=>{console.log("onMinutesSelected",e)}}
                        //ClockProps={this.handleClockChangeDone}
                    />
                    }

                    {showAdvancedButtons !== undefined && showAdvancedButtons &&
                        <Grid>
                        <Button onClick={handleOk
                    }>تائید</Button>
                        <Button onClick={() => {
                    }}>حذف مقدار</Button>
                        <Button onClick={handleClose}>بستن</Button>
                        </Grid>
                    }

                {/*</Card>*/}
            </IbxDialog>
            }

        </div>
    )
}

IbxDatePicker2.propTypes = {
    classes: PropTypes.object,
    handleDateChange: PropTypes.func.isRequired,
    //value: PropTypes.oneOf([PropTypes.number,PropTypes.object,PropTypes.string]),
    label: PropTypes.string,
    dateType: PropTypes.string,
    lang: PropTypes.string,
    adornment: PropTypes.bool,
    icon: PropTypes.object,
    required: PropTypes.bool,
    disableFuture: PropTypes.bool,
    disablePast: PropTypes.bool,
    validationType: PropTypes.arrayOf(PropTypes.oneOf(['afterDate', 'alpha', 'alphaFa',
        'alphanumeric', 'alphanumericFa', 'email', 'equals', 'lowercase',
        'matches', 'mobilePhone', 'number', 'numberFloat', 'numberInt', 'required', 'uppercase'])),
    validationTypeParam: PropTypes.array,
    dateSelectionType: PropTypes.arrayOf(['one','multi','range']),
    componentType: PropTypes.string//.arrayOf(PropTypes.oneOf(['date','time','datetime'])),
};

export default withStyles(styles)(IbxDatePicker2);
