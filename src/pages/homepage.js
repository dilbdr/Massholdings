import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider from "react-slick";
import TImage1 from "../assets/img/trending/combi-oven.png";
import AboutImage from "../assets/img/about-us-img.png";
import Blogo from "../assets/img/brands/companies-logo-1.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Banner from "./banner";
const API_URI = "https://admin.massholdings.com.np/api/home";
const HomePage = () => {
  const { slug } = useParams();
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  var Tsettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  var Bsettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  var BSsettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    getApiData();
  }, [slug]);
  async function getApiData() {
    try {
      const response = await axios.get(API_URI);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  if (loading) return "...";
  if (error) return "error";
  let $description = false;
  if (Data.about) {
    if (Data.about.Description.replace(/(<([^>]+)>)/gi, "").length > 750) {
      $description = true;
    }
  }
  console.log("Body-------------------", Data);
  return (
    <>
      <Banner banner={Data.banner ? Data.banner : []} />

      <div className="MainTrending">
        <div className="container">
          <div className="TTitle">Featured Products</div>
          <div className="TItems">
            <Slider {...Tsettings}>
              {Data.items
                ? Data.items.map((item) => (
                    <div>
                      <div className="TItemsBox">
                        <div className="CIMG">
                          <img src={item.DocPath} alt={item.item_name} />
                        </div>
                        <div className="CTitle">{item.item_name}</div>
                      </div>
                    </div>
                  ))
                : "No Data"}
            </Slider>
          </div>
        </div>
      </div>

      <div className="CompanyIntro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="CImages">
                <img src={Data.about.CoverImage} alt={Data.about.PageTitle} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="CContent">
                <h1>{Data.about.PageTitle}</h1>
                <div
                  className="post__content"
                  dangerouslySetInnerHTML={{ __html: Data.about.Description }}
                ></div>
                <Link to={`/${Data.about.slug}`} className="BTNSSS">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MainServices">
        <div className="container">
          <div className="STitle">
            <h1>Our Services</h1>
            <p>
              Experience seamless service excellence with{" "}
              <span> MASS HOLDINGS PVT LTD. </span>
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="SBox">
                <div>
                  <i className="fa-solid fa-chart-column"></i>
                  <h2>Equipment Procurement and Sales</h2>
                  <p>
                    Sourcing and supplying a comprehensive range of restaurant
                    and kitchen equipment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="SBox CHColor">
                <div>
                  <i className="fa-solid fa-chart-column"></i>
                  <h2>Equipment Procurement and Sales</h2>
                  <p>
                    Sourcing and supplying a comprehensive range of restaurant
                    and kitchen equipment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="SBox">
                <div>
                  <i className="fa-solid fa-chart-column"></i>
                  <h2>Equipment Procurement and Sales</h2>
                  <p>
                    Sourcing and supplying a comprehensive range of restaurant
                    and kitchen equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="MainBrand">
        <div className="container">
          <div className="STitle">
            <h1>Our Brands</h1>
          </div>
          <div className="BItems">
            <Slider {...Bsettings}>
              {Data.brand
                ? Data.brand.map((brand) => (
                    <div>
                      <div className="BIMGS">
                        <img src={brand.DocPath} alt={brand.name} />
                      </div>
                    </div>
                  ))
                : ""}
            </Slider>
          </div>
        </div>
      </div>
      <div className="BestSeller">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="sumury">
                <h1>Best Sellers</h1>
                <p>
                  Discover the ultimate in quality and style with our top-rated
                  product. Join the countless satisfied customers who have made
                  it their go-to choice.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">
              <div className="BestBox">
                <Slider {...BSsettings}>
                  {Data.best_selller
                    ? Data.best_selller.map((seller) => (
                        <div>
                          <div className="TItemsBox">
                            <div className="CIMG">
                              <img
                                src={seller.DocPath}
                                alt={seller.item_name}
                              />
                            </div>
                            <div className="CTitle">{seller.item_name}</div>
                          </div>
                        </div>
                      ))
                    : ""}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MainBrand">
        <div className="container">
          <div className="STitle">
            <h1>Our Clients</h1>
          </div>
          <div className="BItems">
            <Slider {...Bsettings}>
              {Data.clients
                ? Data.clients.map((client) => (
                    <div>
                      <div className="BIMGS">
                        <img src={client.DocPath} alt={client.name} />
                      </div>
                    </div>
                  ))
                : ""}
            </Slider>
          </div>
        </div>
      </div>

      <div className="MainContact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="ContactBox">
                <h1>Contact Us</h1>
                <p>
                  <i className="fa-solid fa-phone"></i> 01-4376876 , 01-4379535
                  +977- 9841885368
                </p>
                <p>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  contact@massgroup.com.np
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i> Mass Complex,
                  Dhumbarahi-04, Kathmandu, Nepal
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.973188937442!2d85.32267717350263!3d27.725211070668006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19693c88645f%3A0xbf69e587bc07a866!2sDhumbarahi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1698842941890!5m2!1sen!2snp"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
