import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import WLOgo from "../assets/img/mh-logo-white.png";
const API_URI = "https://admin.massholdings.com.np/api/footer";
const Footer = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getApiData();
  }, [slug]);
  async function getApiData() {
    try {
      const response = await axios.get(API_URI);
      setData(response.data);
      console.log("Foot-------------------", response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  if (loading) return "...";
  if (error) return "error";
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
                    <i className="fa-brands fa-facebook"></i>
                    facebook
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                    instagram
                  </li>
                  <li>
                    <i className="fa-brands fa-youtube"></i>
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
