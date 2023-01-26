import React from "react";
import "./about.css";
import ME from "../../asstes/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>เกี่ยวกับฉัน</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>ประสบการณ์</h5>
              <small>1+ Years Working </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>ลูกค้า</h5>
              <small>10+ Website </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>โปรเจค</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            ผมชื่อณัฐพงษ์ ภูริศรี ชื่อเล่นมายน์ จบจากมหาวิทยาลัยราชภัฏอุดรธานี สาขาวิทยาการคอมพิวเตอร์ 
            ปัจจุบันเป็นฟรีแลนซ์รับจ้างทำเว็บไซต์ทั่วไปและเว็บEcommerce
          </p>

          <a href="#contact" className="btn btn-primary">
           มาคุยกันเถอะ
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
