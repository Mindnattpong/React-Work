import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>คุณสมบัติด้านการทำงาน</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>Programmer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>เขียนเว็บไซต์โดยใช้ภาษา HTML,CSS,JAVASCRIPT.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>ใช้Wordpressในการทำเว็บไซต์ได้ทั้งเว็บทั่วไปและเว็บ Ecommerce</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>สามารถใช้ React เขียนหน้าเว็บในรูปแบบเรียบง่ายได้</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>สามารถจดโดเมนและในเว็บไซต์ขึ้นโฮสได้.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>สามารถใช้ API และ Plugin ในการประยุกต์ใช้</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>ทำเว็บไซต์ให้กับองค์กรทั้งEcommerce & LMS</p>
            </li>
          </ul>
        </article>
        {/* END UI/UX */}
        <article className="services">
          <div className="service__head">
            <h3>Component</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Git&Githubมาใช้ในการทำงานเป็นทีม.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>ใช้โปรแกรม Adobe,Canva มาใช้ในการออกแบบและตกแต่งเว็บไซต์</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>สามารถเรียนรู้สิ่งต่างๆได้อย่างรวดเร็วเพื่อประกอบการทำเว็บไซต์.</p>
            </li>
          </ul>
        </article>
        {/* END UI/UX */}
        <article className="services">
          <div className="service__head">
            <h3>Feature</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>เข้ากับคนอื่นได้ง่าย.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>สามารถทำงานภายใต้แรงกดดันได้.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>มีทัศนคติที่ดีในการทำงาน.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>มีความกระหายในการพัฒนาตัวเอง.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>สามารถทำงานร่วมกับคนอื่นได้.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>มีความมุ่งมั่นและจดจ่อกับการทำงาน</p>
            </li>
          </ul>
        </article>
        {/* END UI/UX */}
      </div>
    </section>
  );
};

export default Services;
