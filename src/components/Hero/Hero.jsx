import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Los mejores entrenadores de Bogota</span>
        </div>
        {/* Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Obten</span>
            <span> Tu</span>
          </div>
          <div>
            <span> Fisico Ideal</span>
          </div>
          <div className="span">
            Entrenadores personales a domicilio en la ciudad de Bogota, El
            fitnes no solo es un cuerpo Bonito,
          </div>
        </div>
        {/* Figuras*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={10} start={1} delay="1" preFix="+" />
            </span>
            <span>Entrenadores</span>
          </div>
          <div>
            <span>
              <NumberCounter end={100} start={50} delay="1" preFix="+" />
            </span>
            <span>Usuarios</span>
          </div>
          <div>
            <span>
              <NumberCounter end={6} start={0} delay="1" preFix="+" />
            </span>
            <span>Programas Fitness</span>
          </div>
        </div>
        {/* Buttons */}
      </div>
      <div className="right-h">
        {/*<button className="btn">Join Now</button>*/}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Pulsaciones</span>
          <span>116 ppm</span>
        </motion.div>
        {/* Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcl</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
