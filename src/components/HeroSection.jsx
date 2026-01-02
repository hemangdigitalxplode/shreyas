import React from "react";
import heroImage from "../assets/images/hero_banner.png"; // replace later

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Image */}
      <img src={heroImage} alt="Rice Processing" className="hero-img" />

      {/* Overlay Content */}
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">

            <h1>
              <span className="headBold">Pioneering India’s Integrated</span> <br />
              <span className="headSubText">Rice Processing Excellence</span>
            </h1>

            <p>
              Delivering premium Basmati and Non-Basmati rice through
              advanced technology, certified quality systems, and
              sustainable operations.
            </p>

            <div className="hero-stats">
              <div>
                <strong>74 MT</strong>
                <span>/ Hour Capacity</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Global Certifications</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>Export Countries</span>
              </div>
              <div>
                <strong>Zero</strong>
                <span>Discharge Operations</span>
              </div>
            </div>

            <button className="btn hero-btn">
              Know More
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
