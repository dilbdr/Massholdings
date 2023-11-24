import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import "../assets/css/contact.css";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import { TabTitle } from "../comon/dynamicTitle";
import Common from "../pages/common";


const Pages = () => {
  const limit = 4;
  const { slug } = useParams();
  TabTitle(`Mass Holdings | ${slug}`);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://admin.massholdings.com.np/api/content/${limit}/1/${slug}`
        );
        if (response.data.status_code !== 200)
          setError(response.data.statusText);
        setContent(response.data.items);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Errors />;

  switch (slug) {
    case 'about-us':
      return (
        <>
          <About content={content} breadcrum={slug} />
        </>
      );
    case 'contact-us':
      return (
        <>
          <Contact />
        </>
      );
    default:
      return (
        <>
          <Common content={content} breadcrum={slug} />
        </>
      );
  }

};
export default Pages;
