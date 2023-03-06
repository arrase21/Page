import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image11.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span> Por que</span>
        <div>
          <span className="stroke-text"> tu nos</span>
          <span> Necesitas!</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>
              Tienes ALguna enfermedad (hipertension, fibromialgia, etc..)
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Quieres Bajar de Peso sin sufrir en el intento</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Duermes pero No descansas</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Dolor Cronico de espalda baja</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Estres cronico</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>No tienes tiempo para ir al gym</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          Marcas
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
