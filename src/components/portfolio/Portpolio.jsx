/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portpolio.css";
import IMG1 from "../../asstes/portfolio1.png";
import IMG2 from "../../asstes/portfolio2.png";
import IMG3 from "../../asstes/portfolio3.png";


const Portpolio = () => {
  return (
    <section id="portpolio">
      <h5>My Recent Work</h5>
      <h2>ผลงานของฉัน</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>สร้างจาก WordPress Ecommerce</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://dogshop.prajak-in.com/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>สร้างจาก HTML,CSS,BOOTSTRAP</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://mindkung-7bcd4.web.app/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>สร้างจาก REACT JS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://react-portfolio-928fd.web.app/" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
      

      </div>
    </section>
  );
};

export default Portpolio;
