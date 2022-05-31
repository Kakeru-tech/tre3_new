import React, { useState } from "react";
import { NavigationType, useNavigate } from "react-router-dom";
import { cards } from "../Component/Data/staticData";
import Header from "../Component/Header";
import "../Styles/Services.css"
import Modal from '@material-ui/core/Modal';
import { Heading, Text, Box } from "native-base";
const Services = () => {
  const navigation = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div>
      <Header />
      <div className="service">
        <div className="story_upper">
          <div className="story_icon wow heartBeat">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="line"></div>
          </div>
          <div className="story_heading">
            <h1>Our Services</h1>
          </div>
        </div>
        <div className="cardSection">
          {cards.length > 0 &&
            cards.map((item, index) => (
              <div className="serviceCard" key={index} onClick={() => {
                setShowModal(true)
                setData(item)
              }}>
                <div className="card">
                  {/* <!-- <h2>Read More</h2> --> */}
                  <img
                    src={item.image}
                    alt="back"
                  />
                  <h5>{item?.heading}</h5>
                  {/* <h4>About?</h4> */}
                  <p>{item?.desc} </p>
                  <button onClick={() => navigation("/book")}>
                    Book an Appointment
                  </button>
                </div>
              </div>
            ))}
        </div>

        <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className='imageModal'
        >
          <Box w='80%' h='80%' bg='#fff'
            alignItems={'center'} justifyContent='center' alignSelf={'center'} m='auto'>
            <Heading>{data?.heading}</Heading>
            <Text>{data?.desc}</Text>
          </Box>

        </Modal>

      </div>
    </div>
  );
};

export default Services;
