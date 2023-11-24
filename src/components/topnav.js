import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import Search from "../components/search";
const API_URI = "https://admin.massholdings.com.np/api/head";
const TopNav = () => {
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
      <div className="MainContainer">
        <div className="TopNav">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 DN">
                <ul className="TopItems">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-phone"></i>{" "}
                      {data.site_settings.telephone}
                    </a>
                  </li>
                  <li className="email">
                    <a href="#">
                      <i className="fa-solid fa-envelope"></i>{" "}
                      {data.site_settings.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6">
                <ul className="TopItems AR">
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
          </div>
        </div>
        <div className="LogoContainer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <div className="MainLogo AL">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                    <span>Mass Holdings</span>
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="SearchForm AR">
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopNav;
