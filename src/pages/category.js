import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import { TabTitle } from "../comon/dynamicTitle";
import Breadcrumbs from "../comon/breadcrumbs";
import LazyLoad from "react-lazy-load";
const Category = () => {
  const API_URI = "https://admin.massholdings.com.np/api/menu";
  const { slug } = useParams();
  console.log(slug)
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
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      })();
    }, []);
    console.log(data, 'Category')
  return (
    <>
      <Breadcrumbs />
      {data.content
        ?.filter(item => item.title === 'Products')
        .map(item => (
          <div className="container py-5 category-page" key={item.id}>
            {/* Find the matching category based on slug */}
            {item.child
              ?.filter(category => category.slug === slug)
              .map(category => (
                <div key={category.id}>
                  <ul>
                    {category.products?.map(product => (
                      <NavLink target={product.link ? "_blank" : ''} to={product.link || `../products/${product.slug}`}>
                        <li className="header-text" key={product.id}>{product.title}</li>
                      </NavLink>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
      ))}
    </>
  );

};
export default Category;
