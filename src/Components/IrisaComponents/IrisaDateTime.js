import React,{useState} from 'react';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";

import Moment from 'moment-jalaali';

const persianLocale = {
    // months list by order
    months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    ],
  
    // week days by order
    weekDays: [
      'یکشنبه',
      'دوشنبه',
      'سه شنبه',
      'چهارشنبه',
      'پنجشنبه',
      'جمعه',
      'شنبه',
    ],
  
    // just play around with this number between 0 and 6
    weekStartingIndex: 0,
  
    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },
  
    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },
  
    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },
  
    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit;
    },
  
    // texts in the date picker
    nextMonth: 'ماه بعدی',
    previousMonth: 'ماه قبلی',
    openMonthSelector: 'بازکردن انتخاب ماه',
    openYearSelector: 'بازکردن انتخاب سال',
    closeMonthSelector: 'بستن انتخاب ماه',
    closeYearSelector: 'بستن انتخاب سال',
    defaultPlaceholder: 'انتخاب ...',
  
    // for input range value
    from: 'از',
    to: 'تا',
  
  
    // used for input value when multi dates are selected
    digitSeparator: ',',
  
    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,
  
    // is your language rtl or ltr?
    isRtl: false,
  }

  
export default function IrisaDateTime(){
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        // <DatePicker 
        // value={selectedDay}
        // onChange={setSelectedDay}
        // inputPlaceholder="Select a day"
        // shouldHighlightWeekends
        // />
<div>
        {/* <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        locale={"fa"} // custom locale object
        shouldHighlightWeekends
      /> */}

<hr/>
      {
        [Array.from(Array(1300).keys())].map(item=>(<div><p>{item}*</p><br/></div>))
      }

      
      <p>{
              Moment().jYear()+"/"+Moment().jMonth()+"/"+Moment().jDayOfYear()
        }
      </p>
      
</div>
    )
}
