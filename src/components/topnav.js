import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const API_URI = "https://admin.massholdings.com.np/api/head";
const TopNav = () => {
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
      // console.log("Head-------------------", response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  if (loading) return "...";
  if (error) return "error";
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
                      <i className="fa-solid fa-phone"></i> 01-4376876 ,
                      01-4379535
                    </a>
                  </li>
                  <li className="email">
                    <a href="#">
                      <i className="fa-solid fa-envelope"></i>
                      contact@massgroup.com.np
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6">
                <ul className="TopItems AR">
                  {data.content.map((i, value) => {
                    return (
                      <li key={value}>
                        <Link to={i.slug !== 'home' ? i.slug : ''}>{i.title}</Link>
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
                  <form action="#">
                    <input type="search" placeholder="Search" />
                    <button>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
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
