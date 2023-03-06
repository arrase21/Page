import React, { useState } from "react";
import Logo from "../../assets/logo.png";
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
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="programs" spy={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="reasons" spy={true}>
              WhyUS
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="plans" spy={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Testimonials"
              spy={true}
            >
              Testimonials
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
