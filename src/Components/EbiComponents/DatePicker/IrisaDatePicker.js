import React, { useState } from "react";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Grid, IconButton, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { AlarmOn, Today } from "@material-ui/icons";
import PropTypes from "prop-types";
import IrisaDialog from "../Dialog";
import Button from "@material-ui/core/Button";
import {styles} from "../../../assets/jss/style";
import NativeSelect from "@material-ui/core/NativeSelect";
import Moment from "moment-jalaali";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TimePicker from './IrisaTimePicker';

function convertPersianDigitsToDigit(valueToConvert) {
  return String(valueToConvert)
    .replace(/۰/g, "0")
    .replace(/۱/g, "1")
    .replace(/۲/g, "2")
    .replace(/۳/g, "3")
    .replace(/۴/g, "4")
    .replace(/۵/g, "5")
    .replace(/۶/g, "6")
    .replace(/۷/g, "7")
    .replace(/۸/g, "8")
    .replace(/۹/g, "9");
}

function IrisaDatePicker(props) {
  const {
    //classes,
    //style,
    name,
    //lang,
    //dateType,
    handleDateChange,
    value,
    disabled,
    //fullWidth,
    label,
    //disableFuture,
    //disablePast,
    required,
    //helperText,
    fieldName,
    validationType,
    title,
    locale,
    showButtonOnTextField,
    showAdvancedButtons,
    dateSelectionType,
    componentType,
    //handleTimeChange,
  } = props;

  let currentDate0 = null;
  const defaultValue = (mlocale, mvalue) => {
    let enteredValue = Moment();

    switch (typeof mvalue) {
      case "number":
        enteredValue = Moment(new Date(mvalue));
        break;
      case "string":
        enteredValue = Moment(new Date(Number(mvalue)));
        break;
      case "object":
        if (mvalue instanceof Date) enteredValue = Moment(mvalue);
        else
          enteredValue = Moment(
            `${mvalue.year}/(${(Number(mvalue.month) < 10 ? "0" : "") +
              mvalue.month}/${(Number(mvalue.day) < 10 ? "0" : "") +
              mvalue.day}`,
            "YYYY/MM/DD"
          );
        break;
      default:
    }

    const year = convertPersianDigitsToDigit(
      `${enteredValue
        .local(mlocale)
        .format((mlocale === "fa" ? "j" : "") + "YYYY")}`
    );
    const month = convertPersianDigitsToDigit(
      `${enteredValue
        .local(mlocale)
        .format((mlocale === "fa" ? "j" : "") + "MM")}`
    );
    const day = convertPersianDigitsToDigit(
      `${enteredValue
        .local(mlocale)
        .format((mlocale === "fa" ? "j" : "") + "DD")}`
    );
    // if(mlocale === "en" )
    //     currentDate = new Date(Number(day),Number(month),Number(year));
    // else
    //     currentDate = new Date(enteredValue.local("en").format('YYYY'),enteredValue.local("en").format('MM'),enteredValue.local("en").format('DD'));

    currentDate0 = {
      day: Number(day),
      month: Number(month),
      year: Number(year)
    };
    return { day: Number(day), month: Number(month), year: Number(year) };
  };

  const [open, setOpen] = useState(false);
  const [localeType, setLocaleType] = useState(
    locale === undefined ? "fa" : locale
  );

  const [selectedDay, setSelectedDay] = useState(
    defaultValue(localeType, value)
  );
  const [tabIndexSelected, setTabIndexSelected] = useState(
    componentType === "date" || componentType === "datetime" ? 0 : 1
  );
  const [timeValue, setTimeValue] = useState(value ? new Date(value):new Date()); 
    
  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleOk() {
    setOpen(false);
  }


  function handleCalendarDateChange(e) {
    setSelectedDay(e);
    let currentDate = null;
    if (localeType === "en")
      currentDate = new Date(
        Number(e.year),
        Number(e.month) - 1,
        Number(e.day),
        timeValue.getHours(),
        timeValue.getMinutes()
      );
    else {
      const enteredValue = Moment(
        `${e.year}/${(Number(e.month) < 10 ? "0" : "") + e.month}/${(Number(
          e.day
        ) < 10
          ? "0"
          : "") + e.day}`,
        "jYYYY/jMM/jDD"
      );
      currentDate = new Date(
        Number(
          convertPersianDigitsToDigit(enteredValue.local("en").format("YYYY"))
        ),
        Number(
          convertPersianDigitsToDigit(enteredValue.local("en").format("MM"))
        ) - 1,
        Number(
          convertPersianDigitsToDigit(enteredValue.local("en").format("DD"))
        ),
        timeValue.getHours(),
        timeValue.getMinutes()
      );
    }
    if (handleDateChange !== undefined)
      handleDateChange(currentDate.getTime(), name);

    if (dateSelectionType === undefined || dateSelectionType === "one")
      handleClose();  
  }

  function handleTabChange(event, value) {
    setTabIndexSelected(value);
  }

  function handleLocaleChange(event) {
    setLocaleType(event.target.value);
    defaultValue(event.target.value, value);
    setSelectedDay(currentDate0);
  }

  function handleTimePickerChange(date) {

    //setTime({ hour: date.getHours(), minute: date.getMinutes() });
    setTimeValue(date);
    //console.log("handleTimePickerChange",date);
    
    let currentDate = null;
    if (localeType === "en")
      currentDate = new Date(
        Number(selectedDay.year),
        Number(selectedDay.month) - 1,
        Number(selectedDay.day),
        timeValue.getHours(),
        timeValue.getMinutes(),
        0,
        0
      );
    else {
      const enteredValue = Moment(
        `${selectedDay.year}/${(Number(selectedDay.month) < 10 ? "0" : "") + selectedDay.month}/${(Number(
          selectedDay.day
        ) < 10
          ? "0"
          : "") + selectedDay.day}`,
        "jYYYY/jMM/jDD"
      );
      currentDate = new Date(
        Number(
          convertPersianDigitsToDigit(enteredValue.local("en").format("YYYY"))
        ),
        Number(
          convertPersianDigitsToDigit(enteredValue.local("en").format("MM"))
        ) - 1,
        Number(
          convertPersianDigitsToDigit(enteredValue.local("en").format("DD"))
        ),
        timeValue.getHours(),
        timeValue.getMinutes(),
        0,
        0
      );
    }

    if (handleDateChange !== undefined)
      handleDateChange(currentDate.getTime(), name);

//    if (handleTimeChange !== undefined)
//      handleTimeChange({ hour: date.getHours(), minute: date.getMinutes() });
  }


  function getText() {
    let res = "";
    switch (componentType) {
      case "date":
        if (selectedDay !== undefined)
          res =
            selectedDay.year +
            "/" +
            (selectedDay.month < 10 ? "0" : "") +
            selectedDay.month +
            "/" +
            (selectedDay.day < 10 ? "0" : "") +
            selectedDay.day;
        break;
      case "time":

        if (timeValue !== undefined)
          res =
            (timeValue.getHours() < 10 ? "0" : "") +
            timeValue.getHours() +
            ":" +
            (timeValue.getMinutes() < 10 ? "0" : "") +
            timeValue.getMinutes();
        break;
      case "datetime":
        res =
          selectedDay.year +
          "/" +
          (selectedDay.month < 10 ? "0" : "") +
          selectedDay.month +
          "/" +
          (selectedDay.day < 10 ? "0" : "") +
          selectedDay.day +
          " " +
          (timeValue.getHours() < 10 ? "0" : "") +
          timeValue.getHours() +
          ":" +
          (timeValue.getMinutes() < 10 ? "0" : "") +
          timeValue.getMinutes();
        break;
      default:
        res = "Error in componentType props";
    }

    return res;
  }

  //console.log("render-timeValue",timeValue,value);

  return (
    <div>
      {/* {selectedDay.year+"/"+selectedDay.month+"/"+selectedDay.day+"-"+timeValue.getHours()+":"+timeValue.getMinutes()+"* "+value} */}
        {showButtonOnTextField !== undefined && showButtonOnTextField && (
          <TextField
            name={name === undefined ? fieldName : name}
            label={label}
            //adornment
            required={required}
            validationType={validationType}
            value={getText()}
            onClick={handleOpen}
            variant="outlined"
            icon={
              <IconButton disabled={disabled} onClick={handleOpen}>
                <Today />
              </IconButton>
            }
          />
        )}
        {(showButtonOnTextField === undefined || !showButtonOnTextField) && (
          <TextField
            name={name === undefined ? fieldName : name}
            label={label}
            required={required}
            validationType={validationType}
            value={getText()}
            onClick={handleOpen}
          />
        )}

      {open && (
        <IrisaDialog
          title={
            title === undefined || title === null ? "انتخاب تاریخ برای" : title
          }
          maxWidth="lg"
          TransitionComponent
          //      scroll={"paper"}
          openModal={open}
          eventClose={handleClose}
        >

          {componentType !== undefined && componentType === "datetime" && (
            <AppBar position="static">
              <Tabs value={tabIndexSelected} onChange={handleTabChange}>
                <Tab icon={<Today />} />
                <Tab icon={<AlarmOn />} />
              </Tabs>
            </AppBar>
          )}

          {tabIndexSelected === 0 &&
            showAdvancedButtons !== undefined &&
            showAdvancedButtons && (
                <label>{"test test"}</label>
            )}
          {tabIndexSelected === 0 && (
            <NativeSelect value={localeType} onChange={handleLocaleChange}>
              <option value={"fa"}>شمسی</option>
              <option value={"en"}>میلادی</option>
            </NativeSelect>
          )}
          {tabIndexSelected === 0 && localeType === "fa" && (
            <Calendar
              style={{ ".Calendar__day.-selected": "blue" }}
              value={selectedDay}
              onChange={handleCalendarDateChange}
              locale={"fa"}
              shouldHighlightWeekends
            />
          )}
          {tabIndexSelected === 0 && localeType === "en" && (
            <Calendar
              style={{
                ".Calendar__day.-selected, .Calendar__day.-selectedStart, .Calendar__day.-selectedEnd":
                  "blue"
              }}
              value={selectedDay}
              onChange={handleCalendarDateChange}
              shouldHighlightWeekends
            />
          )}
          {tabIndexSelected === 1 && (
            <TimePicker
              //style={"width:100%;"}
              mode={"24h"}
              onChange={handleTimePickerChange}
              value={
                new Date(
                  selectedDay.year,
                  selectedDay.month,
                  selectedDay.day,
                  timeValue.getHours(),
                  timeValue.getMinutes(),
                  0,
                  0
                )
              }
              //onMinutesSelected={e=>{console.log("onMinutesSelected",e)}}
              //ClockProps={this.handleClockChangeDone}
            />
          )}

          {showAdvancedButtons !== undefined && showAdvancedButtons && (
            <Grid>
              <Button onClick={handleOk}>تائید</Button>
              <Button onClick={() => {}}>حذف مقدار</Button>
              <Button onClick={handleClose}>بستن</Button>
            </Grid>
          )}

        </IrisaDialog>
      )}
    </div>
  );
}

IrisaDatePicker.propTypes = {
  classes: PropTypes.object,
  handleDateChange: PropTypes.func,
  value: PropTypes.number, 
  label: PropTypes.string,
  dateType: PropTypes.string,
  lang: PropTypes.string,
  adornment: PropTypes.bool,
  icon: PropTypes.object,
  required: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disablePast: PropTypes.bool,
  validationType: PropTypes.arrayOf(
    PropTypes.oneOf([
      "afterDate",
      "alpha",
      "alphaFa",
      "alphanumeric",
      "alphanumericFa",
      "email",
      "equals",
      "lowercase",
      "matches",
      "mobilePhone",
      "number",
      "numberFloat",
      "numberInt",
      "required",
      "uppercase"
    ])
  ),
  validationTypeParam: PropTypes.array,
  dateSelectionType: PropTypes.oneOf(["one", "multi", "range"]),
  componentType: PropTypes.oneOf(['date','time','datetime']),
  locale: PropTypes.oneOf(['en','fa'])  

};

export default withStyles(styles)(IrisaDatePicker);
