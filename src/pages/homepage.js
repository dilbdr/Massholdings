import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Banner from "./banner";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import { TabTitle } from "../comon/dynamicTitle";
const API_URI = "https://admin.massholdings.com.np/api/home";
const HomePage = () => {
  const { slug } = useParams();
  TabTitle(`Mass Holdings | Home`);
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  var Tsettings = {
    dots: false,
    infinite: true,
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

  if (loading) return <Loading />;
  if (error) return <Errors />;
  let $description = false;
  if (Data.about) {
    if (Data.about.Description.replace(/(<([^>]+)>)/gi, "").length > 750) {
      $description = true;
    }
  }
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
            {Data.services
              ? Data.services.map((service) => (
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="SBox">
                    <div>
                      <img
                        src={service.DocPath}
                        alt={service.title}
                        height="100"
                      ></img>
                      <h2>{service.title}</h2>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: service.description,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))
              : "No Data"}
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
                  <i className="fa-solid fa-phone"></i> {Data?.site_settings?.telephone}
                </p>
                <p>
                  <i className="fa-solid fa-envelope"></i>{Data?.site_settings?.email}
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i> {Data?.site_settings?.address}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contMap">
                <iframe src={Data?.site_settings?.map_location}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
