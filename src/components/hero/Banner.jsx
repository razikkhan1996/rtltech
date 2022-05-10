import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import "./banner.css";

import angular from "../../images/angular.svg";
import codeigniter from "../../images/codeigniter.svg";
import php from "../../images/php.svg";
import handbg from "../../images/handbg.svg";
import hand from "../../images/hand.svg";
import partner1 from "../../images/partner1.svg";
import partner2 from "../../images/partner2.svg";
import partner3 from "../../images/partner3.svg";
import partner4 from "../../images/partner4.svg";
import partner5 from "../../images/partner5.svg";




export const Banner = () => {
  return (
    <>
      <section  className="banner-section">
          {/* hero banner section */}
        <div className="hero-section">
        <div className="content-container">
          <h1>
            We Provide
            <br />
            Web Development
            <br />
            Services
          </h1>
          <br/>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the <br /> industry's
            standard dummy text
          </p>
          <br/>
          <div className="banner-logo">
            <span>Our Expertise</span>
            <span>
              <img src={angular} alt="angular" />
            </span>
            <span>
              <img src={codeigniter} alt="codeigniter" />
            </span>
            <span>
              <img src={php} alt="php" />
            </span>
          </div>
          <br/>
          <button className="btn">Request A Proposal   <i class="fa-solid fa-angles-right"></i></button>
        </div>

        <div className="content-container">
        <img src={handbg} alt="mobile-banner" className="mobile-img"/>
        </div>
    </div>

    {/* hero partner section */}
    <AnimationOnScroll animateIn="animate__fadeInDown">
     <div className="partner-section">
            <div className="div1">
            <span><img src={hand} alt="hand" /></span>
            <span style={{color:"white",fontWeight:"bold",letterSpacing:".2rem"}}>Partnered With</span>
            </div>
            <div className="div2">
            <img src={partner1} alt="partner1" />
            <img src={partner2} alt="partner2" />
            <img src={partner3} alt="partner3" />
            <img src={partner4} alt="partner4" />
            <img src={partner5} alt="partner5" />
            </div>
      </div>
      </AnimationOnScroll>
      </section>
    </>
  );
};
