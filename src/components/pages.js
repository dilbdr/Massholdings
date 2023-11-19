import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import '../assets/css/contact.css';

const Pages = () => {
  const limit = 4;
  const { slug } = useParams();
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApiData();
  })

  async function getApiData() {
    try {
      const response = await axios.get(`https://admin.massholdings.com.np/api/content/${limit}/1/${slug}`);
      if (response.data.status_code !== 200)
        setError(response.data.statusText);
      setContent(response.data.items);

    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }
  if (loading) return "...";
  if (error) return error;


  return (
    <>
      {slug == 'about-us' ? <About content={content} breadcrum={slug} /> : ''}
      {slug == 'contact-us' ? <Contact /> : ''}
    </>
  );
};
export default Pages;
