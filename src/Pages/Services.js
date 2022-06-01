import React, { useState } from "react";
import { NavigationType, useNavigate } from "react-router-dom";
import { cards } from "../Component/Data/staticData";
import Header from "../Component/Header";
import "../Styles/Services.css"
import Modal from '@material-ui/core/Modal';
import { Heading, Text, Box } from "native-base";
import CloseIcon from '@mui/icons-material/Close';
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
                  {/* <p>{item?.desc.substr(0, 30) + '....'} </p> */}
                  <button className="btn btn-info">Read More</button>
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
          <Box style={{position:"relative", overflow:"scroll"}} w='80%' h='80%' bg='#fff'
            alignItems={'center'} justifyContent='center' alignSelf={'center'} m='auto'>
            <Heading>
            {/* {data?.heading} */}
            Head anything
            </Heading>
            <Text>
            {data?.showDecs}
            {/* here, you can write anything */}
            </Text>
            <CloseIcon onClick={handleClose} style={{position:'absolute', top:'10px', right:'10px', cursor:'pointer'}}/>
          </Box>

        </Modal>

      </div>
    </div>
  );
};

export default Services;
