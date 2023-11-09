import React from "react";
import WLOgo from "../assets/img/mh-logo-white.png";
const Footer = () => {
  return (
    <>
      <div className="MainFooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="FootLogo">
                <img src={WLOgo} alt="Image" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="FootMenu">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="FootMenu">
                <ul>
                  <li>Sales Backup</li>
                  <li>Food Service Equipment</li>
                  <li>Cooking Equipment</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="FootMenu">
                <ul>
                  <li>
                    <i class="fa-brands fa-facebook"></i>
                    facebook
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram"></i>
                    instagram
                  </li>
                  <li>
                    <i class="fa-brands fa-youtube"></i>
                    youtube
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="COpyRights">
        Copyright © 2022 Mass Group | All Rights Reserved
      </div>
    </>
  );
};
export default Footer;
