import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="footer">
        <div className="ubicacion">
          <div className="ubi">
            <span className="stroke-text">UBICACION</span>
            <span>Bogota</span>
          </div>
          <div className="contact-f">
            <span className="stroke-text">Cel</span>
            <span>573203784256</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
