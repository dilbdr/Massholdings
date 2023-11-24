import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import WLOgo from "../assets/img/mh-logo-white.png";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import Newsletter from "../pages/NewsLetter";
const API_URI = "https://admin.massholdings.com.np/api/footer";
const Footer = () => {
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
    <>
      <div className="MainFooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <div className="FootLogo">
                <img src={WLOgo} alt="Image" />
                <h2>{data.site_settings.site_name}</h2>
                <p>
                  <strong>Address : </strong> {data.site_settings.address}
                </p>
                <p>
                  <strong>Email : </strong> {data.site_settings.email}
                </p>
                <p>
                  <strong>Phone : </strong> {data.site_settings.telephone}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="FootMenu">
                <h2>Quick Links</h2>
                <ul>
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
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="FootMenu">
                <div className="newslatter">
                  <Newsletter title="Join Our Newsletter" />
                </div>
                <div className="follow">
                  <h2>Follow Us : </h2>
                  <ul>
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
                    {/* <li>
                      <a href={data.site_settings.facebook}>
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a target="_blank" href={data.site_settings.linked_in}>
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
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
