import React, { useState } from "react";
import Logo from "../../assets/log.png";
import Bars from "../../assets/bars.png";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
  const mobile = window.innerWidth <= 760 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpened(false)} to="home" spy={true}>
              Inicio
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="programs" spy={true}>
              Programas
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="reasons" spy={true}>
              PorQue?
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="plans" spy={true}>
              Planes
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Testimonials"
              spy={true}
            >
              Testimonios
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="Contact" spy={true}>
              Contactanos
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
