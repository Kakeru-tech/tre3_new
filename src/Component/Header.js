import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

function Header() {
  const navigation = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const user=localStorage.getItem('@user');

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="header-right collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <p
              onClick={() => navigation("/")}
              style={{ borderBottom: `${pathName === "/" && `3px solid black`}`, cursor: "pointer", }}
            > <HomeIcon /> Home </p>
            <p
              onClick={() => navigation("/about")}
              style={{ borderBottom: `${pathName === "/about" && `3px solid black`}`, cursor: "pointer", }}
            > About us </p>
            <p
              onClick={() => navigation("/services")}
              style={{ borderBottom: `${ pathName === "/services" && `3px solid black` }`, cursor: "pointer", }}
            > Treatments </p>
            <p
              onClick={() => navigation("/about/doctor")}
              style={{ borderBottom: `${ pathName === "/about/doctor" && `3px solid black` }`, cursor: "pointer", }}
            > About Practitioner </p>
            <p
              onClick={() => navigation("/location")}
              style={{ borderBottom: `${ pathName === "/location" && `3px solid black` }`, cursor: "pointer", }}
            > Location </p>
            <button onClick={() => navigation("/book")}> Book an appointment </button>

           <p>
              <AccountCircleIcon
                style={{ marginLeft: "20px", width: "50px", height: "50px" }}
                onClick={() => user? navigation("/admin"):navigation('/login')}
                // onClick={() => user?( user?.email === 'chineseherbalclinc@gmail.com'&& navigation("/admin")):navigation('/login')}
              />
              {user? 'Profile':'Login'}
            </p>
          </div>
        </div>
      </div>
    </nav>
   
  );
}

export default Header;
