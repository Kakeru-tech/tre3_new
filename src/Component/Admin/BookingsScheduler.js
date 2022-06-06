import { Center } from "native-base";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const BookingsScheduler = ({value,onChange}) => {
  // {activeStartDate, date, view }
  const currentDate = new Date()
  return (
    <Center p="3" m='1'>
      <Calendar onChange={onChange} value={value} 
      tileDisabled={(data) => {
        console.log("TILEEEEEE-----", data.date, value)
        if(data.date.getDate() === currentDate.getDate() && data.date.getMonth() === currentDate.getMonth()) {
          return false;
        }
        return data.date.getTime() < currentDate.getTime() || data.date.getDay() === 0 ;
      }}
      />
    </Center>
  );
};

export default BookingsScheduler;
