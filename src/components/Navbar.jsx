import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import Search from "../components/search";
const API_URI = "https://admin.massholdings.com.np/api/head";

const Navbar = () => {
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
    <nav>
        <div className="top">
            <div className="container row d-flex m-auto py-1">
                <ul className="contact col-6 d-flex gap-4 h-auto">
                    <li className="phone d-flex align-items-center">
                        <Link className="d-flex align-items-center" onTouchMove="#">
                            <i className="fa-solid fa-phone"></i>{" "}
                            <p className="small-text">{data.site_settings.telephone}</p>
                        </Link>
                    </li>
                    <li className="email d-flex align-items-center">
                        <Link className="d-flex align-items-center" onTouchMove="#">
                            <i className="fa-solid fa-envelope"></i>{" "}
                            <p className="small-text">{data.site_settings.email}</p>
                        </Link>
                    </li>
                </ul>
                <div className="right col-6">
                    <div className="search d-flex justify-content-end">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom container m-auto row d-flex align-items-center py-4">
            <div className="logo col-4">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                    <span className="header-text">Mass Holdings</span>
                </Link>
            </div>
            <ul className="menu col-8 d-flex justify-content-evenly menu-text">
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
    </nav>
  )
}

export default Navbar