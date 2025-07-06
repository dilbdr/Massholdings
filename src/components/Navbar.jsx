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

  return (
    <nav>
        <div className="top">
            <div className="container row d-flex m-auto py-1">
                <ul className="contact col-6 d-flex gap-4 h-auto">
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
            <div className="menu col-8 d-flex justify-content-evenly">
                {data.content?.map((menu, index) => (
                    menu.child ? (
                    <div key={index} className="child-1 position-relative menu-text">
                        <Link to={'#'}>
                            {menu.title}
                        </Link>
                        <div className="sub-menu">
                                {menu.child.map((ch,index)=>(
                                    <>
                                        {ch.products ? (
                                            <div className="title p-3">
                                                <Link key={index} to={'#'}>
                                                    {ch.title}
                                                </Link>
                                                <div className="child-2">
                                                    {ch?.products?.map((item,index)=>(
                                                        <div key={index} className="product-title small-text">
                                                            <Link to={`../products/details/${item.slug}`}>
                                                                {item.title}
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link className="title p-3" key={index} to={`../products/details/${ch.slug}`}>
                                                {ch.title}
                                            </Link>
                                        )}
                                    </>
                                ))}
                        </div>
                    </div>
                    ) : (
                        <Link className="child-1 menu-text" key={index} to={menu.slug}>
                            {menu.title}
                        </Link>
                    )
                ))}
            </div>

        </div>
    </nav>
  )
}

export default Navbar