import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ceaw6ax",
        "template_6y1ip3n",
        form.current,
        "mNV35-Y9obwypPPjh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ENTRA YA </span>
          <span>EN ACCION </span>
        </div>
        <div>
          <span>Y ENTRENA </span>
          <span className="stroke-text"> CON NOSOTROS!!!</span>
        </div>
        <div>
          <span className="left-o">
            * Aprovecha nuestras ofertas y obten hasta un 50% de descuento En
            nuestros planes!
          </span>
        </div>
      </div>
      <div className="right-j">
        <div>
          <a href="https://google.com" style={{ textDecoration: "none" }}>
            <button className="btn btn-j">Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;
