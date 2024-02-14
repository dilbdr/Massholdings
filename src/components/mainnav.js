import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useParams } from "react-router-dom";
import Loading from "../comon/loading";
import Errors from "../comon/error";
const API_URI = "https://admin.massholdings.com.np/api/category/";
const MainNav = () => {
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
        console.log("METU_ITEMS______", response.data.items);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [slug]);
  
  if (loading) return "";
  if (error) return <Errors />;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {data.items.map((category, index) => {
                if (typeof category?.child === "undefined") {
                  return (
                    <>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={`category/${category.slug}`}
                        >
                          {category.title}
                        </Link>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <li className="nav-item dropdown" key={index}>
                      <Link
                        className={`nav-link ${
                          category?.child === undefined ? "" : "dropdown-toggle"
                        }`}
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {category.title}
                      </Link>
                      <ul className="dropdown-menu">
                        {category?.child === undefined
                          ? ""
                          : category?.child.map((ch, index) => {
                              return (
                                <>
                                  <li key={index}>
                                    <Link
                                      className="dropdown-item"
                                      to={`products/${ch.slug}`}
                                    >
                                      {ch.title}
                                    </Link>
                                  </li>
                                </>
                              );
                            })}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default MainNav;
