import moment from "moment";
import jMoment from "moment-jalaali";
import React, { useState } from "react";
import JalaliUtils from "@date-io/jalaali";
import DateFnsUtils from '@date-io/date-fns';
import {
  TimePicker,
  DateTimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "material-ui-pickers";
import PropTypes from 'prop-types';
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export function IrisaDatePicker(props){
    const {okLabel,cancelLabel,clearLabel,value} = props
    const [selectedDate, handleDateChange] = useState(moment());

    const CustomJalaaliDatePicker = () => (
    <DatePicker
        clearable
        okLabel={okLabel}
        cancelLabel={cancelLabel}
        clearLabel={clearLabel}
        labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
        value={selectedDate}
        onChange={handleDateChange}
      />)

      const CustomDatePicker = () =>(
        <DatePicker
          margin="normal"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      )

      const CustomJalaaliTimePicker = () => (
        <TimePicker
        clearable
        okLabel={okLabel}
        cancelLabel={cancelLabel}
        clearLabel={clearLabel}
        labelFunc={date => (date ? date.format("hh:mm A") : "")}
        value={selectedDate}
        onChange={handleDateChange}
      />          
      )

      const CustomTimePicker = () =>(
        <TimePicker
          margin="normal"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
        />        
      )

      const CustomJalaaliDateTimePicker = () =>(        
      <DateTimePicker
       okLabel={okLabel}
       cancelLabel={cancelLabel}
       clearLabel={clearLabel}
       labelFunc={date => (date ? date.format("jYYYY/jMM/jDD hh:mm A") : "")}
        value={selectedDate}
        onChange={handleDateChange}
        />
      )
  
    return (
      <>
      {props.isJalaali && <MuiPickersUtilsProvider utils={JalaliUtils} local="fa" >
        <div>
        {props.type==="date" && <CustomJalaaliDatePicker/>}
        {props.type==="date_time" && <CustomJalaaliDateTimePicker/>}
        {props.type==="time" && <CustomJalaaliTimePicker/>}
        </div>
      </MuiPickersUtilsProvider>}

      {!props.isJalaali && 
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <div>
        {props.type==="date" && <CustomDatePicker />}
        {props.type==="time" && <CustomTimePicker />}
        </div>
    </MuiPickersUtilsProvider>      
      }
      </>
    );
}

//const PersianDateRef = React.forwardRef((props,ref)=>(<PersianDate {...props} />))

IrisaDatePicker.propTypes = {
    type: PropTypes.oneOf(['date', 'date_time', 'time']),}

export default IrisaDatePicker
