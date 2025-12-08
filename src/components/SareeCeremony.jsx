import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HomeImage from "../../optimized/Saree Ceremony/05.webp";
import { FaHandPointRight } from "react-icons/fa";
import SareeCeremonyTheme from "../../optimized/Saree Ceremony/20.webp";
const SareeCeremony = () => {
  return (
    <>
      <Navbar />
      <div className="Hero">
        <div className="firstImage">
          <img src={HomeImage} alt="Creative" />
          <div className="heroText">
            <h1>Celebrating the Grace of Saree Ceremony</h1>
            <p>
              A beautiful tradition, timeless emotions — we capture every
              precious moment with perfection.
            </p>
            <a href="/contact-us" className="contact-btn">
              Book Your Saree Ceremony Shoot
            </a>
          </div>
        </div>
      </div>
      <div className="Maternity">
        <div className="Service-section">
          <div className="head">
            <div className="head-content">
              <h1>Saree Ceremony Theme</h1>
              <p>
                Traditional setups, elegant lighting, and emotional candid
                moments — all crafted with professional excellence.
              </p>
            </div>
          </div>
          <div className="offerings-sections">
            <div className="text-side">
              <h1>What We Offer</h1>
              <p className="para">
                <span>
                  <FaHandPointRight className="point-icon" />
                </span>
                Professional photographer charged on an hourly basis
              </p>

              <p className="para">
                <span>
                  <FaHandPointRight className="point-icon" />
                </span>
                High-quality, corrected and professionally edited photos
              </p>

              <p className="para">
                <span>
                  <FaHandPointRight className="point-icon" />
                </span>
                Soft copy delivery through drive or digital album
              </p>
              <p className="para">
                <span>
                  <FaHandPointRight className="point-icon" />
                </span>
                Printed album and framed hard copies available on request
              </p>
            </div>
            <div className="right-side">
              <img src={SareeCeremonyTheme} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SareeCeremony;
