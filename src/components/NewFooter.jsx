import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import WLOgo from "../assets/img/mh-logo-white.png";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import GoToP from "../comon/gototop";
import Newsletter from "../pages/NewsLetter";
const API_URI = "https://admin.massholdings.com.np/api/footer";

const NewFooter = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(API_URI);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return "";
  if (error) return <Errors />;
  return (
    <nav className='footer'>
      <div className="container mx-auto pt-5 pb-2 row">
        <div className="col-4 d-flex flex-column justify-content-start">
          <img className="w-75" src={WLOgo} alt="logo" />
        </div>
        <div className="col-4">
          <h2 className="header-text">Quick Links:</h2>
          <ul className="menu-text d-flex flex-column gap-2">
            {data.content.map((i, value) => {
              return (
                <li key={value}>
                  <Link to={i.slug !== "home" ? i.slug : ""}>
                    {i.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-4 d-flex flex-column gap-4">
          <h2 className="header-text mb-0">Contact Us : </h2>
          <ul className="contact small-text d-flex flex-column gap-2">
            <li className="d-flex gap-2 align-items-center">
              <i class="fa-solid fa-location-dot"></i>
              {data.site_settings.address}
            </li>
            <li className="d-flex gap-2 align-items-center">
              <i class="fa-solid fa-envelope-open-text"></i>
              {data.site_settings.email}
            </li>
            <li className="d-flex gap-2 align-items-center">
              <i class="fa-solid fa-phone"></i>
              {data.site_settings.telephone}
            </li>
          </ul>
          <div className="social d-flex flex-column">
            {/* <h2 className="header-text">Follow Us : </h2> */}
            <ul className="d-flex gap-4">
              <li>
                <a target="_blank" href={data.site_settings.facebook}>
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href={data.site_settings.instagram}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href={data.site_settings.linked_in}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center small-text py-1">
        Copyright &copy; {new Date().getFullYear()} Mass Holdings | All Rights
        Reserved
      </div>
    </nav>
  )}

export default NewFooter