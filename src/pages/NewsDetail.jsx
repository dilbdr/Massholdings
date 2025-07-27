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

const NewsDetail = () => {
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
          `https://admin.massholdings.com.np/api/News_blog/detail/${slug}`
        );
        setData(response.data.detail);
        console.log("NewsssDetaillll", response.data);
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
    <div className="container py-5">
        <Link to={`/news-updates`}>
            <div className="back pb-4">
                <i class="fa-solid fa-arrow-left-long"></i>
                <span className="px-2 normal-text text-red">Go Back</span>
            </div>
        </Link>
        <div className='news-detail'>
            <div className="detail">
                <div>
                    <div className="big-text text-blue">{data?.title}</div>
                    <div className="text-red">
                        <i class="fa-solid fa-calendar"></i>
                        <span className="small-text px-2">{data.created_on}</span>
                    </div>
                </div>
                <img src={data?.CoverImage} alt={data?.title} />
                <p
                    className="normal-text desc"
                    dangerouslySetInnerHTML={{
                        __html: data?.description
                        ? data?.description
                        : "No Content",
                    }}
                ></p>
            </div>
        </div>
    </div>
  )
}

export default NewsDetail