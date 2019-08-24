import React, { useState } from 'react'
import { Paper } from "@material-ui/core/";

import DateFnsUtils from "@date-io/date-fns";
import JalaliUtils from "@date-io/jalaali";
import IconButton from '@material-ui/core/IconButton';
import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar } from "material-ui-pickers";
import jMoment from "moment-jalaali";

import {isValid,format,isSameDay,startOfWeek,endOfWeek,isWithinInterval} from "date-fns";
import MomentUtils from '@date-io/moment';
import TextField from '@material-ui/core/TextField'

//jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const styles = theme => ({
  dayWrapper: {
    position: "relative",
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 2px",
    color: "inherit",
  },
  customDayHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "2px",
    right: "2px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: "#676767",
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: "highlight",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
  endHighlight: {
    extend: "highlight",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  },
});


function IrisaDialogDatePicker(props){

    const [selectedDate, handleDateChange] = useState(new Date());
    const [startDate,setStartDate] = useState(null)
    const [endDate,setEndDate] = useState(null)
    const [nchange,setNchange] = useState(0)

    function handleTextFieldChange1(event){
      const {name,value} = event.target
      console.log(name,value)
      //handleDateChange(value)
    }

    function checkRangeDay(fromDat,toDat,val){    
      //console.log('checkRangeDay',fromDat,toDat,val);
        
      if(fromDat===null || toDat===null || val===undefined || val===null || val.length===0)
        return false
    
      const arr=[
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31]
      const arrPersian = [
        '۱','۲','۳','۴','۵','۶','۷','۸','۹','۱۰','۱۱','۱۲',
        '۱۳','۱۴','۱۵','۱۶','۱۷','۱۸','۱۹','۲۰','۲۱','۲۲','۲۳','۲۴',
        '۲۵','۲۶','۲۷','۲۸','۲۹','۳۰','۳۱'
      ]
    
      const fromDay = fromDat.substring(fromDat.lastIndexOf('/')+1,fromDat.length)
      const toDay = toDat.substring(toDat.lastIndexOf('/')+1,toDat.length)
      const fromRealDay = arr[arrPersian.indexOf(fromDay,0)]
      const toRealDay = arr[arrPersian.indexOf(toDay,0)]
      const realVal = arr[arrPersian.indexOf(val,0)]
    
      //console.log(fromRealDay,realVal,toRealDay)
    
      if(fromRealDay<=realVal && realVal<=toRealDay) 
         return true
      else
         return false
    }
    
    return (
<MuiPickersUtilsProvider utils={JalaliUtils} local={"fa"}>
      <BasePicker value={selectedDate}   onChange={e=>{console.log("outside",e.target)}}      
      cancelLabel={"Cancel"}
      okLabel={"Ok"}
      showTodayButton={true}      
      >
        <div>
          <TextField value={selectedDate} onChange={handleDateChange}/>
        </div>
        {({
          date,
          handleAccept,
          handleChange,
          handleClear,
          handleDismiss,
          handleSetTodayDate,
          handleTextFieldChange,
          pick12hOr24hFormat,
        }) => (
          <div>
            <div className="picker">
              <Paper style={{ overflow: "hidden"}}>
              
                <p>
                  Number of changes : {nchange}  - 
                  {startDate}
                  - to: {endDate}
                </p>
                <Calendar date={date}  
                allowKeyboardControl={true}                
                format={"YYYY/MM/DD"}
                renderDay={(date, selectedDate, dayInCurrentMonth,dayComponent)=>{

              return (
                <div >
                    {
                        // format(startDate,'d')   ,   format(endDate,'d')
                        // '۱'<=dayComponent.props.children && dayComponent.props.children<='۲')
                        (checkRangeDay(startDate,endDate,dayComponent.props.children))  ?
                        <span style={{background:'#ff0099'}} >{dayComponent}</span>  :
                        <span>{dayComponent}</span>                       
                        
            //            mdays.reduce((s,itm)=>{return dayComponent.props.children===format(itm,'d') && (s || itm)},false) ?
            //                <span>{dayComponent}</span> : <span style={{background:'#ff0099'}} >{dayComponent}</span>
            
                    }
                </div>);
                }}
                labelFunc={(date, invalidLabel) => {
                  console.log(date)
                  let dateClone = date;//cloneCrossUtils(date);
              
                  return dateClone && isValid(dateClone)
                    ? `Week of ${format(startOfWeek(dateClone), "MMM do")}`
                    : invalidLabel;
                }}                
                onChange={e=>{
                  //console.log("inside",e);
                  try{
                      if(nchange%2===0){
                        setStartDate(jMoment(e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate(),'YYYY/M/D').format('jYYYY/jM/jD'))
                        setEndDate(jMoment(e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate(),'YYYY/M/D').format('jYYYY/jM/jD'))
                        //setStartDate(e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate())
                      }
                      else{
                        //setEndDate(e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate())
                        setEndDate(jMoment(e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate(),'YYYY/M/D').format('jYYYY/jM/jD'))
                      }
                      setNchange(nchange+1)
                  }
                  catch(err){
                    //alert(err+'\n'+e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate())
                  }  
                //   console.log(
                //     e._d.getFullYear(),
                //     e._d.getMonth(),
                //     e._d.getDate());
                 }}
                onInputChange={e=>{console.log("onInputChange",e.target)}}
                // labelFunc={(date,invalidLabel)=>{
                //   return (new Date(moment())).format('YYYY/MM/DD') 
                // }}
                />
              </Paper>
            </div>

          </div>
        )}
      </BasePicker>
    </MuiPickersUtilsProvider>
    )
}

export default IrisaDialogDatePicker
