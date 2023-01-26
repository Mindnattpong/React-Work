import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../asstes/me.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nattpong Phoorisri</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">เลื่อนลง</a>
      </div>
    </header>
  );
};

export default Header;
