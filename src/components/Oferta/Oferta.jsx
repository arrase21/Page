import React from "react";
import "./Oferta.css";

function Oferta() {
  return (
    <div className="Oferta" id="oferta">
      <div className="oferta-header">
        <span className="stroke-text"> Aprovecha </span>
        <span> Nuestras Ofertas </span>
        <span className="stroke-text"> para ti</span>
        <div className="categorias-header">
          <span>Obten hasta 50% de descuento en todos nuestros planes</span>
        </div>
        <span className="categorias">*Aplican condiciones</span>
        <div className="categoria-buttons">
          <buttons className="btn">Lo Quiero</buttons>
        </div>
      </div>
    </div>
  );
}

export default Oferta;
