import React, { Fragment, useState } from "react";
import { Badge } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
//import { makeJSDateObject } from "../../../utils/helpers";
import dayjs from 'dayjs';
import moment from 'moment';
import { DateTime } from 'luxon';

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


function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function IrisaNewDateDialog() {
  const [selectedDays, setSelectedDays] = useState([1, 2, 15]);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleMonthChange = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
        resolve();
      }, 1000);
    });
  };

  return (
    <Fragment>
      <DatePicker
        label="With server data"
        value={selectedDate}
        onChange={handleDateChange}
        onMonthChange={handleMonthChange}
        renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
          const date = makeJSDateObject(day); // skip this step, it is required to support date libs
          const isSelected = isInCurrentMonth && selectedDays.includes(date.getDate());

          // You can also use our internal <Day /> component
          return <Badge badgeContent={isSelected ? "🌚" : undefined}>{dayComponent}</Badge>;
        }}
      />
    </Fragment>
  );
}

export default IrisaNewDateDialog;
