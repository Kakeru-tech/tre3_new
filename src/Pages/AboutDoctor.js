import React from "react";
import Header from "../Component/Header";
import "../Styles/AboutDoctor.css";
const AboutDoctor = () => {
  return (
    <div class="aboutDoctor">
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
              Experience
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
                  Dr Yip has clinical experience in acupuncture and Chinese
                  Medicine in both Hong Kong and Melbourne.{" "}
                </p>
                <p>AHPRA qualified - </p>
                <ul>
                  <li>Registered Chinese Medicine Practitioner </li>
                  <li>Registered Acupuncturist </li>
                  <li>Registered Chinese Medicine Dispenser</li>
                </ul>
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
              Academics
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
                {/* <p>
                  {" "}
                  Dr Yip has clinical experience in acupuncture and Chinese
                  Medicine in both Hong Kong and Melbourne.{" "}
                </p> */}
                <p>Bachelor Degree: </p>
                <ul>
                  <li>	Hong Kong (Bachelor of Business Admin) </li>
                  <li>	China (Bachelor of Traditional Chinese Medicine & Acupuncture) </li>
                </ul>
                <p>Post Graduate Degree: </p>
                <ul>
                  <li>Melbourne - RMIT. Applied Science - Acupuncture (Distinction)</li>
                  <li>	           RMIT  Applied Science  -  Herbal Medicine (Distinction) </li>
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
              Work Expertise
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
                  She has extensive treatment experience with positive outcomes including women`s health, fertility, dermatological, musculoskeletal, pain management neurological conditions, internal health disorder.{" "}
                </p>
                <p>Dr Yip is dedicated to your path to improve health and wellbeing. </p>
                <p>She speaks fluent  -   </p>
                <ul>
                  <li>Cantonese </li>
                  <li>Mandarin </li>
                  <li>English</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
