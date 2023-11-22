import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useParams } from "react-router-dom";
import Loading from "../comon/loading";
import Errors from "../comon/error";
const API_URI = "https://admin.massholdings.com.np/api/products/10/1";
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
              {data.items.map((i, value) => {
                return (
                  <li className="nav-item" key={value}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={`products/${i.slug}`}
                    >
                      {i.item_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default MainNav;
