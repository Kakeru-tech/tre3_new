import { Center } from "native-base";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const BookingsScheduler = ({value,onChange}) => {

  return (
    <Center p="3" m='1'>
      <Calendar onChange={onChange} value={value} 
      tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}/>
    </Center>
  );
};

export default BookingsScheduler;
