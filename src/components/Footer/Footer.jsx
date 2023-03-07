import React from "react";
import "./Footer.css";
import Logo from "../../assets/log.png";

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
            <span>+57 3203784256</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
