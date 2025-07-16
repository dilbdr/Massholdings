import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import Search from "../components/search";
const API_URI = "https://admin.massholdings.com.np/api/menu";

const Navbar = () => {
    const { slug } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        (async () => {
        try {
            setLoading(true);
            setError(false);
            const response = await axios.get(API_URI);
            setData(response.data);
            console.log(data, 'Menuuu')
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
        })();
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav>
        <div className="top">
            <div className="container row d-flex m-auto py-1">
                <ul className="contact col-12 col-md-8 d-flex gap-4 h-auto">
                    <li className="phone d-flex align-items-center">
                        <Link className="d-flex align-items-center" onTouchMove="#">
                            <i className="fa-solid fa-phone"></i>{" "}
                            <p className="small-text">{data?.site_settings?.telephone}</p>
                        </Link>
                    </li>
                    <li className="email d-flex align-items-center">
                        <Link className="d-flex align-items-center" onTouchMove="#">
                            <i className="fa-solid fa-envelope"></i>{" "}
                            <p className="small-text">{data?.site_settings?.email}</p>
                        </Link>
                    </li>
                </ul>
                <div className="right col-12 col-md-4">
                    <div className="search d-flex justify-content-end">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
        <div className={isSticky ? "navbar sticky" : "navbar"}>
            <div className="bottom container m-auto row d-flex align-items-center py-4">
                <div className="logo col-lg-4">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                        <span className="header-text">Mass Holdings</span>
                    </Link>
                    <button className="menu-toggle d-lg-none" onClick={toggleMenu}>
                        {menuOpen ? (
                            <i className="fa-solid fa-xmark"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </button>
                </div>
                <div className={`menu col-lg-8 d-none d-lg-flex justify-content-evenly ${menuOpen ? "open" : ""}`}>
                    {data.content?.map((menu) => (
                        menu.child ? (
                            <div key={menu.slug} className="child-1 position-relative menu-text">
                            <Link to="#">{menu.title}</Link>
                            <div className="sub-menu">
                                {menu.child.map((ch) => (
                                ch.products ? (
                                    <div key={ch.slug} className="title p-3 position-relative">
                                        <Link to="#">{ch.title}</Link>
                                        <div className="child-2">
                                            {ch.products.map((item) => (
                                                <div key={item.slug} className="product-title small-text">
                                                    <Link to={`../products/${item.link || item.slug}`} onClick={() => setMenuOpen(!menuOpen)}>
                                                        {item.title}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link className="title p-3" key={ch.slug} to={`../products/${ch.link || ch.slug}`} onClick={() => setMenuOpen(!menuOpen)}>
                                        {ch.title}
                                    </Link>
                                ) 
                                ))}
                            </div>
                            </div>
                        ) : (
                            <Link className="child-1 menu-text" key={menu.slug} to={menu.slug} onClick={() => setMenuOpen(!menuOpen)}>
                                {menu.title}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar