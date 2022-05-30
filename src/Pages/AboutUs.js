import React from "react";
import Header from "../Component/Header";
import "../Styles/AboutUs.css";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <Header />
      <div class="container accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             About Us
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img src={require("../Assets/image_1.jpg")} />
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <p>
                  {" "}
                  Natures Path Chinese Medicine and Acupuncture Centre operating in Melbourne since 2010 by Doctor of Chinese Medicine, Miu YIP, Narita.  {" "}
                </p>
                <p>Our mission is to elevate the standards of practice in the field by making high-quality Traditional Chinese Medicine (TCM) accessible to the community.  To offer the public an integrated and holistic approach to achieving optimum health and fertility. </p>
                {/* <ul>
                  <li>General information: The Chinese Medicine doctor asks general information of the patient's age, eating habits and living style etc. </li>
                  <li>Pulse reading (Checking your pulse): The Chinese Medicine doctor will check the pulses of both hands of the patient. The pulse pattern identifies the body constitution and internal imbalance of patients.</li>
                  <li>Tongue reading: The Chinese medicine doctor will look at patient's tongue to see its colour, shape, etc to retrieve patient's health information</li>
                  <li>By gathering the above information taken, a Chinese Medicine doctor can conclude the Yin, Yang, Qi and Blood level of the patient to locate the imbalance and roots of aliments</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
               Core Values
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img src={require("../Assets/image_1.jpg")} />
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                 <p>
                  {" "}
                  Being a Chinese Medicine Doctor, I have a compassion for healing. {" "}
                </p>
                <p>My core values are: </p>
                <ul>
                  <li>Commit to always provide respect to your privacy. </li>
                  <li>Commit to promote an ultimate holistic health care to you </li>
                  <li>Practice patient-centered care with preventative approach to your health. </li>
                  <li>Offer treatment tailored towards each individual and incorporate the best of solution of Traditional Chinese Medicine to meet your current condition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             General Consultation
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img src={require("../Assets/image_1.jpg")} />
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <p>
                  {" "}
                  How does a Chinese Medicine doctor make diagnosis?{" "}
                </p>
                <p>By following these 4 steps: </p>
                <ul>
                  <li>General information: The Chinese Medicine doctor asks general information of the patient's age, eating habits and living style etc. </li>
                  <li>Pulse reading (Checking your pulse): The Chinese Medicine doctor will check the pulses of both hands of the patient. The pulse pattern identifies the body constitution and internal imbalance of patients.</li>
                  <li>Tongue reading: The Chinese medicine doctor will look at patient's tongue to see its colour, shape, etc to retrieve patient's health information</li>
                  <li>By gathering the above information taken, a Chinese Medicine doctor can conclude the Yin, Yang, Qi and Blood level of the patient to locate the imbalance and roots of aliments</li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
