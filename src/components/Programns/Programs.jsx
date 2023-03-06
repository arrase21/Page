import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";

function Programs() {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Nuestros</span>
        <span>Programas</span>
        <span className="stroke-text">para ti</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
