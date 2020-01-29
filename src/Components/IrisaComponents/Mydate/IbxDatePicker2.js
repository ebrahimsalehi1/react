import React,{useState,useEffect,useRef} from 'react';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";
import {Card, Grid, IconButton, withStyles} from "@material-ui/core";
import IbxTextField from "./IbxTextField";
import {Today} from "@material-ui/icons";
import PropTypes from "prop-types";
import IbxDialog from "./IbxDialog";
import Button from '@material-ui/core/Button';
import {styles} from "../../assets/jss/style";
import NativeSelect from "@material-ui/core/NativeSelect";
import Moment from 'moment-jalaali';

function IbxDatePicker2(props){
    const {
        classes, style, name, lang, dateType, handleDateChange, value, disabled,
        fullWidth, label, disableFuture, disablePast, required, helperText,
        fieldName,validationType,title,locale,showButtonOnTextField, showAdvancedButtons, ...other
    } = props;

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
    const [selectedMonth, setSelectedMonth] = useState(currentDate0.month);
    const [selectedYear, setSelectedYear] = useState(currentDate0.year);

    function currentDateTitle(){
        let res ="";
        switch(localeType){
            case "fa":
                res = "امروز ${} هجري خورشيدي";
                break;
            case "en":
                res = "Today is ${}"; // Friday 24 January 2020
                break;
        }
        return res;
    }

    useEffect(()=>{
        setSelectedDay(currentDate0)
        setSelectedYear(currentDate0.year)
        //console.log(selectedYear,selectedMonth,currentDate0)
        setSelectedMonth(currentDate0.month)
    },[localeType]);

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

    function handlerCalendarChange(e) {
        setSelectedDay(e);
        let currentDate = null;
        if (localeType === "en")
            currentDate = new Date(Number(e.year),Number(e.month)-1,Number(e.day));
        else {
            const enteredValue = Moment(`${e.year}/${(Number(e.month)<10 ? '0':'')+e.month}/${(Number(e.day)<10 ? '0':'')+e.day}`,'jYYYY/jMM/jDD')
            currentDate = new Date(Number(convertPersianDigitsToDigit(enteredValue.local("en").format('YYYY'))), Number(convertPersianDigitsToDigit(enteredValue.local("en").format('MM')))-1, Number(convertPersianDigitsToDigit(enteredValue.local("en").format('DD'))));
        }
       handleDateChange(currentDate.getTime(),name);
    }

    console.log("component is rendering",localeType,value,selectedDay,selectedYear,selectedMonth)

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
            <IbxDialog title={title === undefined || title === null ? "انتخاب تاریخ برای" : title} maxWidth="lg"
                       TransitionComponent
                       openModal={open} eventClose={handleClose}>
                <Card className={classes.card}>
                    <Grid>
                        <label>{"test test"}</label>
                    </Grid>
                    <Grid>
                        <NativeSelect value={localeType} onChange={(e) => {
                            setLocaleType(e.target.value);
                        }}>
                            <option value={"fa"}>شمسی</option>
                            <option value={"en"}>میلادی</option>
                        </NativeSelect>
                        {showAdvancedButtons!==undefined && showAdvancedButtons &&
                        <NativeSelect value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                            {localeType==="fa" && persianMonths.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                            {localeType==="en" && months.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                        </NativeSelect>
                        }
                        {showAdvancedButtons !== undefined && showAdvancedButtons &&
                        <NativeSelect value={selectedYear} onChange={(e) => {
                            setSelectedYear(e.target.value);
                        }}>
                            {localeType === "fa" && years.map(year => <option key={year + fromPersianYear}
                                                                              value={year + fromPersianYear}>{year + fromPersianYear}</option>)}
                            {localeType === "en" && years.map(year => <option key={year + fromYear}
                                                                              value={year + fromYear}>{year + fromYear}</option>)}
                        </NativeSelect>
                        }
                    </Grid>

                    {localeType === 'fa' ?
                        <Calendar
                            value={ selectedDay }
                            onChange={handlerCalendarChange}
                            locale={"fa"}
                            shouldHighlightWeekends
                        />
                        :
                        <Calendar
                            value={ selectedDay }
                            onChange={handlerCalendarChange}
                            shouldHighlightWeekends
                        />
                    }

                    <Grid>
                        <Button onClick={handleOk
                        }>تائید</Button>
                        <Button onClick={() => {
                        }}>حذف مقدار</Button>
                        <Button onClick={handleClose}>بستن</Button>
                    </Grid>
                </Card>
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
    validationTypeParam: PropTypes.array
};

export default withStyles(styles)(IbxDatePicker2);
