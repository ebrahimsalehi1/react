import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import dayjs from 'dayjs';
import moment from 'moment';
import { DateTime } from 'luxon';

import {
  DatePicker,
  MuiPickersUtilsProvider,
  BasePicker,
  Calendar
} from "material-ui-pickers";
import JalaliUtils from "@date-io/jalaali";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Label from '@material-ui/core/InputLabel' 
import jMoment from "moment-jalaali";

import {Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'

import { Badge } from "@material-ui/core";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

function App(props) {


  //const [selectedDate, handleDateChange] = useState(new Date());
  const [startDate,setStartDate] = useState('')
  const [endDate,setEndDate] = useState('')
  const [nchange,setNchange] = useState(0)
  const [showMessage,setShowMessage] = useState("")
  //const [currentYear,setCurrentYear] = useState(0)
  //const [currentMonth,setCurrentMonth] = useState(null)
  //const [lastDay,setLastDay] = useState(0)
  const [firstDate,setFirstDate] = useState()

  const [selectedDays, setSelectedDays] = useState([1, 2, 15]);
  const [selectedDate, handleDateChange] = useState(new Date());


  function makeJSDateObject(date) {
    if (date instanceof dayjs) {
        return date.clone().toDate();
    }
    if (moment.isMoment(date)) {
        return date.clone().toDate();
    }
    if (date instanceof DateTime) {
        return date.toJSDate();
    }
    if (date instanceof Date) {
        return new Date(date.getTime());
    }
    throw new Error('Cannot properly parse argument passed to cloneCrossUtils');
}


  function getFormatedDate(dat){
    return dat.getFullYear()+'/'+
           dat.toLocaleString('default',{month:'short'})+'/'+
           dat.getDate();
  }

  
function convertPersianNumberToEnglish(s){
  const symbolMap = {
      "۱":"1",
      "۲":"2",
      "۳":"3",
      "۴":"4",
      "۵":"5",
      "۶":"6",
      "۷":"7",
      "۸":"8",
      "۹":"9",
      "۰":"0"
  };


    var j=0
    let s2=''
    while(j<s.length){
      s2+=symbolMap[s.slice(j,j+1)]
      j++
    }
    return Number(s2)
}

  function checkRangeDay(fromDat,toDat,val){    
    //console.log('checkRangeDay',fromDat,toDat,val);
    // ,curDat='1398/5/25'
      
    if(fromDat===null || fromDat==='' || toDat===null || toDat==='' || val===undefined || val===null || val.length===0)
      return false
  /*
    const symbolMap = {
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
        0: "۰"
    };

    const arr=[
      1,2,3,4,5,6,7,8,9,10,
      11,12,13,14,15,16,17,18,19,20,
      21,22,23,24,25,26,27,28,29,30,31]
    const arrPersian = [
      '۱','۲','۳','۴','۵','۶','۷','۸','۹','۱۰','۱۱','۱۲',
      '۱۳','۱۴','۱۵','۱۶','۱۷','۱۸','۱۹','۲۰','۲۱','۲۲','۲۳','۲۴',
      '۲۵','۲۶','۲۷','۲۸','۲۹','۳۰','۳۱'
    ]
*/
    const fromMonth = fromDat.substring(fromDat.indexOf('/')+1,fromDat.lastIndexOf('/'))
    const toMonth = toDat.substring(toDat.indexOf('/')+1,toDat.lastIndexOf('/'))  

    const fromDay = fromDat.substring(fromDat.lastIndexOf('/')+1,fromDat.length)
    const toDay = toDat.substring(toDat.lastIndexOf('/')+1,toDat.length)

    const fromRealMonth = convertPersianNumberToEnglish(fromMonth)//arr[arrPersian.indexOf(fromMonth,0)]
    const toRealMonth = convertPersianNumberToEnglish(toMonth)//arr[arrPersian.indexOf(toMonth,0)]
    //console.log('ebrahim_span1 >> ',document.getElementById('ebrahim_span1'))
    
    //let s=''
    let curDat = document.getElementById('ebrahim_span1').innerHTML
    //s = curDat
    //s='sfdsf[ jkhdkfidsf ] d sfdsf '

    let currentMonth = ''
    let currentYear = ''

    if(curDat.length===0){
       currentMonth = jMoment().format('jM')
       currentYear = jMoment().format('jYYYY')
    }
    else{
      curDat = curDat.substring(curDat.indexOf('[')+1,curDat.lastIndexOf(']'))
      currentMonth = curDat.substring(curDat.indexOf('/')+1,curDat.length)
      currentYear = curDat.substring(0,4)
    }

    //curDat = curDat.substring(curDat.indexOf('['),curDat.indexOf(']'))

    //let currentMonth = '7'//curDat.substring(curDat.indexOf('/')+1,curDat.lastIndexOf('/'))
    //const currentYear = '1398'//curDat.substring(0,4)

    //---------------------- Calculate Real Values

    let fromRealDay = convertPersianNumberToEnglish(fromDay)//arr[arrPersian.indexOf(fromDay,0)]
    let toRealDay = convertPersianNumberToEnglish(toDay)//arr[arrPersian.indexOf(toDay,0)]
    currentMonth = convertPersianNumberToEnglish(currentMonth)
    currentYear = convertPersianNumberToEnglish(currentYear)
    const realVal = convertPersianNumberToEnglish(val)//arr[arrPersian.indexOf(val,0)]

    //arr[arrPersian.indexOf(currentMonth,0)]

    //console.log('months',currentYear+'/'+currentMonth+'/1',fromRealMonth,toRealMonth)

    if(!(fromRealMonth<=Number(currentMonth) && Number(currentMonth)<=toRealMonth))
      return false
    

    if(fromRealMonth===toRealMonth && toRealMonth===Number(currentMonth)){
      console.log('*************fromRealMonth===toRealMonth && toRealMonth===currentMonth,from to',fromRealDay,toRealDay,currentMonth)  
      
      // if(fromRealDay<=realVal && realVal<=toRealDay) 
      //     return true
      // else
      //     return false
    }    
    else if(fromRealMonth === Number(currentMonth)){
      toRealDay = 31;//Number(jMoment(currentYear+'/'+currentMonth+'/1','jYYYY/jM/jD').endOf('jMonth').format('jD'))

      console.log('fromRealMonth === currentMonth ,from to',fromRealDay,toRealDay,currentMonth)  
    }
    else if(toRealMonth === Number(currentMonth)){
      fromRealDay = 1

      console.log('toRealMonth === currentMonth,from to',fromRealDay,toRealDay,currentMonth)  
    }
    else if (fromRealMonth !== Number(currentMonth) || toRealMonth !== Number(currentMonth)){
      fromRealDay = 1
      toRealDay = 31;//Number(jMoment(currentYear+'/'+currentMonth+'/1','jYYYY/jM/jD').endOf('jMonth').format('jD'))

      console.log(  'fromRealMonth !== currentMonth || toRealMonth !== currentMonth,from to',fromRealDay,toRealDay,currentMonth)  
    }    

    console.log('days',fromRealDay,realVal,toRealDay)

    //console.log('month finally,from to',fromRealMonth,currentMonth,toRealMonth,curDat)  
    //console.log('days from,to,realVal',fromRealDay,toRealDay,realVal)    
  
    if(fromRealDay<=realVal && realVal<=toRealDay) 
       return true
    else
       return false
  }

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const handleMonthChange = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
        resolve();
      }, 10000);
    });
  };

  const MyCalendar = () =>(    
    <MuiPickersUtilsProvider utils={JalaliUtils} local={"fa"}>

    <BasePicker 
    //value={selectedDate}   
    onChange={(e)=>{console.log("outside",e)}}     
    >
      {({
        date,
        handleAccept,
        handleChange,
        handleClear,
        handleDismiss,
        handleSetTodayDate,
        handleTextFieldChange,
        pick12hOr24hFormat
      }) => (
        
        <div>
          <div className="picker">
            
           <Paper>                           
                {startDate} - 
                {endDate} 
                {/* - lastDay={lastDay} - cur_month={currentMonth} -year={currentYear}              */}
              <Calendar date={date}  
              cancelLabel={"Cancel"}
              okLabel={"Ok"}                        
              format={"YYYY/MM/DD"}
              //renderDay={(date, selectedDate, dayInCurrentMonth,dayComponent)=>{
                renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {

                const date = makeJSDateObject(day); // skip this step, it is required to support date libs
                const isSelected = isInCurrentMonth && selectedDays.includes(date.getDate());
      
                // You can also use our internal <Day /> component
                return <Badge badgeContent={isSelected ? "🌚" : undefined}>{dayComponent}</Badge>;
                /*
                    return (
                      <div >
                          {
                              (checkRangeDay(startDate,endDate,dayComponent.props.hidden ? '':dayComponent.props.children))  ?
                              <span style={{background:'#ff0099'}} >{dayComponent}</span>  :
                              <span>{dayComponent}</span>                                                               
                          }
                      </div>);
                      */
              }}
              onChange={e=>{
                // console.log("inside",e);
                try{
                  //console.log('onChagne(e)',e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate(),e)

                    //console.log('new event 1',getFormatedDate(e._d))
                    //console.log('new event 2',jMoment(getFormatedDate(e._d)).format('jYYYY/jM/jD'))
                    
                    if(nchange%2===0){
                      setStartDate(jMoment(getFormatedDate(e._d)).format('jYYYY/jM/jD'))
                      setEndDate(jMoment(getFormatedDate(e._d)).format('jYYYY/jM/jD'))
                      setShowMessage("تاریخ خاتمه را انتخاب نمایید")
                      //setStartDate(e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate())
                    }
                    else{
                      setShowMessage("")
                      //setEndDate(e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate())
                      setEndDate(jMoment(getFormatedDate(e._d)).format('jYYYY/jM/jD'))
                    }
                    setNchange(nchange+1)
                }
                catch(err){
                  alert(err+'\n'+e._d.getFullYear()+'/'+e._d.getMonth()+'/'+e._d.getDate()+'\n'+
                        getFormatedDate(e._d))
                }  
              //   console.log(
              //     e._d.getFullYear(),
              //     e._d.getMonth(),
              //     e._d.getDate());
               }}
               handleChange={(e)=>{console.log("inside",e)}}     

               onMonthChange={handleMonthChange
                 //(e) =>{

                //console.log(e)
                  // console.log("onMonthChange ",e._d,getFormatedDate(e._d),
                  //console.log(jMoment(getFormatedDate(e._d)).format('jM')) 
                  //convertPersianNumberToEnglish(jMoment(getFormatedDate(e._d)).format('jM')),
                  // convertPersianNumberToEnglish(jMoment(getFormatedDate(e._d)).format('jYYYY'))
                  // )
                  //const dat={}
                  //console.log('input date',date)
                   //date=e._d
                  // console.log(getFormatedDate(e._d))
                  //setFirstDate(false)
                //   date.add(1,'')
                  //setCurrentMonth(e._d)
                  //getFormatedDate(new Date(2019,1,1))
                  //test(e._d).then(console.log('it is run'))

                  // document.getElementById('ebrahim_span1').innerText=`
                  // [${jMoment(getFormatedDate(e._d)).format('jYYYY')}/${jMoment(getFormatedDate( e._d)).format('jM')}]
                  // `;

                  //my_text.current.value = {t:100}//jMoment(getFormatedDate(e._d)).format('jYYYY')

                //}
              }
              
              />
             </Paper> 
          </div>

        </div>
      )}
    </BasePicker>
  </MuiPickersUtilsProvider>            

  )


  return (
    <div>
      <TextField value={startDate+'-'+endDate} onChange={handleDateChange}/>

      <Dialog open={true} onClose={null}>
        <DialogContent>
      {<MyCalendar />}
      </DialogContent>
      <DialogContentText >
      {showMessage}
      <span id={"ebrahim_span1"}  />
      </DialogContentText>
      </Dialog>
    </div>
  );
}

export default App;

//ReactDOM.render(<App />, document.getElementById("root"));
