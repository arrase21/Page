import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whitheTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text"> Estan Listos para</span>
        <span> entrenar</span>
        <span className="stroke-text">Con Nosotros?</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}

            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whitheTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/573143722158?text=Hola%20Me%20puedes%20dar%20mas%20info%20del%20plan...."
              style={{ textDecoration: "none" }}
            >
              <button type="" className="btn">
                Saber mas
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
