import React, { useRef } from "react";
import "./Join.css";

const Join = () => {
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
          <a
            href="https://wa.me/573143722158?text=Hola%20Me%20puedes%20dar%20mas%20info%20de%20los%descuentos%20"
            style={{ textDecoration: "none" }}
          >
            <button className="btn btn-j">Ahora</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;
