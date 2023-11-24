import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import Breadcrumbs from "../comon/breadcrumbs";
const API_URI = "https://admin.massholdings.com.np/api/Site_settings";

const Contact = () => {
  const [content, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(API_URI);
        setData(response.data.site_settings);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Errors />;
  return (
    <>
      <Breadcrumbs />
      <div className="container">
        <div className="contact-section">
          <div className="ContInfo">
            <div className="cInfo">
              <span
                className="title-text"
                dangerouslySetInnerHTML={{
                  __html: content?.contact_detail
                    ? content?.contact_detail
                    : "No Content",
                }}
              ></span>
              {/* <p>
                <strong>
                  {" "}
                  <i className="fa-solid fa-phone" /> :{" "}
                </strong>
                {content?.mobile}
              </p> */}
              {/* <p>
                <strong>
                  {" "}
                  <i className="fa-solid fa-envelope" /> :{" "}
                </strong>
                {content?.email}
              </p> */}
              <p>
                {/* <strong>
                  {" "}
                  <i className="fa-solid fa-home" />:{" "}
                </strong> */}
              </p>
            </div>
            <div className="map">
              <h3>Map Location</h3>
              <iframe src={content?.map_location}></iframe>
            </div>
          </div>
          {/* <div className="details">
            
            <div className="info">
              
              <div className="contact-number">
                <div className="title-text">
                 
                </div>
                <div className="title-text"></div>
              </div>
              <div className="email">
                <div className="title-text">
                  <i className="fa-solid fa-envelope" /> Email Address
                </div>
                <div className="title-text">{content?.email}</div>
              </div>
              <div className="location">
                <div className="title-text">
                  <i className="fa-solid fa-home" /> Location
                </div>
                <div
                  className="title-text"
                  dangerouslySetInnerHTML={{
                    __html: content?.contact_detail
                      ? content?.contact_detail
                      : "No Content",
                  }}
                ></div>
              </div>
              <div className="socials d-flex">
                <div className="normal-text">Follow Us On:</div>
                <div className="social-logo">
                  <a href={content?.facebook} target="_blank">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href={content?.instagram} target="_blank">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href={content?.youtube} target="_blank">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Contact;
