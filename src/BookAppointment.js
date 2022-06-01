import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./BookAppointment.css";
import { db } from "./firebase";
import firebase from "firebase";
import Header from "./Component/Header";
import { FamilyRestroomRounded } from "@mui/icons-material";
import { Modal, TextField } from "@mui/material";
import { Button, Text } from "native-base";
import moment from "moment";
import SelectSlots from "./Component/BookingAppointment/SelectSlots";

const dataClass = { firstname: "", lastname: "", address: "", phone: "", user_email: "", };

const small_date = 'MMM DD, YYYY'
const formatDateSmall = (timestamp) => {
  if (!timestamp) return "Timestamp not Found";
  return moment(timestamp).utcOffset("+05:30").format(small_date);
}

const services=[
  {label:'Acupuncture'},
  {label:'Chinese Herbal Medicine'},
  {label:'Cupping'},
  {label:'Guasha'},
  {label:'Tuina'},
]
function BookAppointment() {
  const [data, setData] = useState(dataClass);
  const [dateTime, setDateTime] = useState({ date: new Date(), time: "", });
  const [success, setSuccess] = useState(false);
  const [service, setService] = useState('');
  const [showTime, setShowTime] = useState(false);
  console.log(formatDateSmall(dateTime?.date))
  const sendAppointment = (e) => {
    e.preventDefault();
    console.log('dateTime?.start', dateTime?.time?.start)
    console.log('dateTime?.end', dateTime?.time?.end)

    emailjs
      .sendForm(
        "service_jx4br1k",
        "template_e537bi4",
        e.target,
        "ViQ0OXaS8aiGcBtLl"
      )
      .then((res) => {
        console.log(res, "email response");
        db.collection("Bookings")
          .add({
            name: data.firstname + "\t" + data.lastname,
            email: data.user_email,
            address: data.address,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            phone: data.phone,
            service:service,
            ...dateTime,
          })
          .then((res) => {
            console.log(res, "firebase response");
            setSuccess(true);
            alert(
              "Your Appointment has been booked, Confirmation mail has been sent!" 
            )
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const disabled = (() => {
    if (data.firstname && data.lastname && data.phone && data.user_email && dateTime.time && dateTime.date && service && dateTime)
      return false
    return true
  })();
  return (
    <div>
      <Header />
      <div className="bookAppointment">
        <div className="bookLeft">
          <h1>Book You New Slot and Save Your Time</h1>
          <p>
            Here we'll show welcome message and assurance of treatment of some
            positive words
          </p>
          <h2>For Help Call: +61 0437288166</h2>
        </div>
        <form className="bookRight" onSubmit={sendAppointment}>
          <Text fontSize="3xl" fontWeight="bold" my="3">
            Book Appointment
          </Text>

          <div className="nameBlock">
            <TextField
              className="name-input"
              label="First Name"
              type="text"
              variant="outlined"
              value={data?.firstname}
              required
              onChange={(e) => {
                setData({ ...data, firstname: e.target.value });
              }}
            />

            <TextField type="text" name='name' label='name' id='name' value={data?.firstname} hidden />
            <TextField type="text" name='start' label='start' id='start' value={dateTime?.time?.start} hidden />
            <TextField type="text" name='end' label='end' id='end' value={dateTime?.time?.end} hidden />
            <TextField type="text" name='date' label='date' id='date' value={formatDateSmall(dateTime?.date)} hidden />
            <TextField type="text" name='service' label='service' id='service' value={service} hidden />
            <TextField
              variant="outlined"
              className="name-input"
              required
              type="text"
              value={data?.lastname}
              label="Last Name"
              onChange={(e) => {
                setData({ ...data, lastname: e.target.value });
              }}
            />
          </div>
          <TextField
            variant="outlined"
            required
            className="input-field"
            type="text"
            value={data?.phone}
            label="Contact Number"
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            required
            className="input-field"
            type="email"
            label="Email"
            name="user_email"
            value={data?.user_email}
            onChange={(e) => setData({ ...data, user_email: e.target.value })}
          />
          
          {/* Dropdown */}
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle serviceDropDown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {service?service:'Choose Treatment'}
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
              {
                services.map((item,i)=>
                <li key={i}><a class="dropdown-item" href="#" onClick={()=>setService(item?.label)}>{item?.label}</a></li>
                )
              }
            </ul>
          </div>

          <Button
            size="sm"
            variant="solid"
            my="3"
            h="12"
            bg="#75bf47"
            onPress={() => setShowTime(true)}
          >
            <Text fontSize="lg" fontWeight="bold" color="#fff">
              Choose Your Slot
            </Text>
          </Button>
          <input className="btn btn-primary" type='submit' value="BOOK APPOINTMENT" disabled={disabled} />
          {/* <Button size="sm" variant="solid" h="12" bg="teal.900">
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="#fff"
              textTransform="uppercase"
            >
              book an appointment
            </Text>
          </Button> */}
        </form>
        <Modal
          open={showTime}
          className="time-modal"
          onClose={() => setShowTime(false)}
        >
          <SelectSlots data={dateTime} setData={setDateTime} close={() => setShowTime(false)} />
        </Modal>
      </div>
    </div>
  );
}

export default BookAppointment;
