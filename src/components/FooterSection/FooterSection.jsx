import React from "react";
import "./FooterSection.scss";

function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__icon-box">
          <div className="footer__header">
            <div className="footer__box">
              <h2 className="footer__title">Get in Touch</h2>
            </div>
            <div className="footer__icon">
              <img
                src="./assets/Icons/SVG/Icon-instagram.svg"
                alt="instagram"
                className="footer__icon"
              />
              <img
                src="./assets/Icons/SVG/Icon-facebook.svg"
                alt="facebook"
                className="footer__icon"
              />
              <img
                src="./assets/Icons/SVG/Icon-twitter.svg"
                alt="twitter"
                className="footer__icon"
              />
            </div>
          </div>
          <div className="footer__logo hidden1">
            <img src="./assets/logos/Logo-bandsite.svg" alt="" />
          </div>
        </div>
        <div className="footer__detail-box">
          <div className="footer__detail">
            <span>
              <p>Cam Adams</p>
              <p>The Bees Knees Management</p>
            </span>
            <span>
              <p className="footer__detail-pa padding">
                503 Broadway Penthouse,
                <br />
                <span>New York, NY 10012, USA</span>
              </p>
            </span>

            <span>
              <p className="footer__detail-pa  padding ">
                info@thebeesknees.com
              </p>
            </span>
          </div>
          <div className="footer__detail">
            <span>
              <p>Pearl Gregg</p>
              <p>Limitless Artist Group</p>
            </span>
            <span>
              <p className="footer__detail-pa padding">
                Booking Agent for
                <br />
                <span>US / South America / Japan</span>
              </p>
            </span>
            <span>
              <p className="footer__detail-pa padding">
                pearl.gregg@Limitlessag.com
              </p>
            </span>
          </div>
          <div className="footer__detail">
            <span>
              <p>Carson Whyte</p>
              <p>ARCH Entertainment</p>
            </span>
            <span>
              <p className="footer__detail-pa padding">
                Booking Agent for
                <br />
                <span>UK / EU / AU</span>
              </p>
            </span>
            <span>
              <p className="footer__detail-pa padding">
                cwhyte@archentertainment.com
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="footer__logo hidden">
        <img src="./assets/logos/Logo-bandsite.svg" alt="bandsite" />
      </div>
      <p className="footer__copy-right">
        Copyright The Bees Knees &copy 2021 All Rights Reserved
      </p>
    </footer>
  );
}

export default FooterSection;
