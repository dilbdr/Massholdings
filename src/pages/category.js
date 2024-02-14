import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import { TabTitle } from "../comon/dynamicTitle";
import Breadcrumbs from "../comon/breadcrumbs";
import LazyLoad from "react-lazy-load";
const Category = () => {
  const { slug } = useParams();
  TabTitle(`Mass Holdings | ${slug}`);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://admin.massholdings.com.np/api/products/detail/${slug}`
        );
        setData(response.data.detail);
        console.log("products", response.data.detail);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) return <Loading />;
  if (error) return <Errors />;
  return (
    <>
      <Breadcrumbs />
      <h1>Category</h1>
    </>
  );
};
export default Category;
