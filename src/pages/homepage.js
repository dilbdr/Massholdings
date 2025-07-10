import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Banner from "./banner";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import { TabTitle } from "../comon/dynamicTitle";
import logo from "../assets/img/logo.png";
import HomeFeatureProduct from "../components/HomeFeatureProduct";
import HomeIntro from "../components/HomeIntro";
import HomeServices from "../components/HomeServices";
import HomeBrands from "../components/HomeBrands";
import HomeBestSeller from "../components/HomeBestSeller";
const API_URI = "https://admin.massholdings.com.np/api/home";
const HomePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  TabTitle(`Mass Holdings | Home`);
  const [Data, setData] = useState([]);
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
        console.log("sssss______", response.data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) return <Loading />;
  if (error) return <Errors />;
  let $description = false;
  if (Data.about) {
    if (Data.about.Description.replace(/(<([^>]+)>)/gi, "").length > 750) {
      $description = true;
    }
  }
  return (
    <main>
      <Banner banner={Data.banner ? Data.banner : []} />

      <section className="feature bg-gray" aria-label="feature section">
        <div className="container py-5">
          <h1 className="big-text text-blue pb-5 text-center">Featured Products</h1>
          <HomeFeatureProduct data={Data.items ? Data.items : []}/>
        </div>
      </section>

      <HomeIntro data={Data.about ? Data.about : []}/>

      <HomeServices data={Data?.services} />

      <HomeBrands data={Data?.brand} /> 

      <section className="BestSeller" aria-label="best seller section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sumury">
                <h1 className="big-text text-blue pb-5 text-center">Best Sellers</h1>
              </div>
            </div>
            <div className="col-12">
              <HomeBestSeller data={Data.best_selller ? Data.best_selller : []}/>
            </div>
          </div>
        </div>
      </section>

      <HomeBrands data={Data?.clients} />
    </main>
  );
};
export default HomePage;
