import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import bannerImage from "../assets/img/banner/banner.png";
import TImage1 from "../assets/img/trending/combi-oven.png";
import AboutImage from "../assets/img/about-us-img.png";
import Blogo from "../assets/img/brands/companies-logo-1.png";
const HomePage = () => {
  var Tsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  var Bsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  var BSsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="MainBanner">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img src={bannerImage} />
          </div>
          <div>
            <img src={bannerImage} />
          </div>
          <div>
            <img src={bannerImage} />
          </div>
        </Carousel>
      </div>

      <div className="MainTrending">
        <div className="container">
          <div className="TTitle">Featured Products</div>
          <div className="TItems">
            <Slider {...Tsettings}>
              <div>
                <div className="TItemsBox">
                  <div className="CIMG">
                    <img src={TImage1} alt="Image" />
                  </div>
                  <div className="CTitle">Combi Oven</div>
                </div>
              </div>
              <div>
                <div className="TItemsBox">
                  <div className="CIMG">
                    <img src={TImage1} alt="Image" />
                  </div>
                  <div className="CTitle">Combi Oven</div>
                </div>
              </div>
              <div>
                <div className="TItemsBox">
                  <div className="CIMG">
                    <img src={TImage1} alt="Image" />
                  </div>
                  <div className="CTitle">Combi Oven</div>
                </div>
              </div>
              <div>
                <div className="TItemsBox">
                  <div className="CIMG">
                    <img src={TImage1} alt="Image" />
                  </div>
                  <div className="CTitle">Combi Oven</div>
                </div>
              </div>
              <div>
                <div className="TItemsBox">
                  <div className="CIMG">
                    <img src={TImage1} alt="Image" />
                  </div>
                  <div className="CTitle">Combi Oven</div>
                </div>
              </div>
              <div>
                <div className="TItemsBox">
                  <div className="CIMG">
                    <img src={TImage1} alt="Image" />
                  </div>
                  <div className="CTitle">Combi Oven</div>
                </div>
              </div>
              <div>
                <div className="TItemsBox">
                  <div className="CIMG">
                    <img src={TImage1} alt="Image" />
                  </div>
                  <div className="CTitle">Combi Oven</div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="CompanyIntro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="CImages">
                <img src={AboutImage} alt="Image" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="CContent">
                <h1> DISCOVER EXCELLENCE MASS HOLDINGS PVT LTD</h1>
                <p>
                  Welcome to <span>THE MASS HOLDINGS PVT. LTD.</span> , your
                  trusted partner in sourcing top-quality restaurant and kitchen
                  equipment. As a leading importer company specializing in
                  restaurant and kitchen equipment, we have established a
                  reputation for excellence and reliability in the foodservice
                  industry.
                </p>
                <p>
                  With <span>THE MASS HOLDINGS PVT. LTD.’S</span> huge selection
                  of food service equipment and restaurant supplies organized
                  into easily identified categories, you will quickly find the
                  exact products you need for success.
                </p>
                <button className="BTNSSS">LEARN MORE</button>
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
                  <i class="fa-solid fa-chart-column"></i>
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
                  <i class="fa-solid fa-chart-column"></i>
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
                  <i class="fa-solid fa-chart-column"></i>
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
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
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
                  <div>
                    <div className="TItemsBox">
                      <div className="CIMG">
                        <img src={TImage1} alt="Image" />
                      </div>
                      <div className="CTitle">Combi Oven</div>
                    </div>
                  </div>
                  <div>
                    <div className="TItemsBox">
                      <div className="CIMG">
                        <img src={TImage1} alt="Image" />
                      </div>
                      <div className="CTitle">Combi Oven</div>
                    </div>
                  </div>
                  <div>
                    <div className="TItemsBox">
                      <div className="CIMG">
                        <img src={TImage1} alt="Image" />
                      </div>
                      <div className="CTitle">Combi Oven</div>
                    </div>
                  </div>
                  <div>
                    <div className="TItemsBox">
                      <div className="CIMG">
                        <img src={TImage1} alt="Image" />
                      </div>
                      <div className="CTitle">Combi Oven</div>
                    </div>
                  </div>
                  <div>
                    <div className="TItemsBox">
                      <div className="CIMG">
                        <img src={TImage1} alt="Image" />
                      </div>
                      <div className="CTitle">Combi Oven</div>
                    </div>
                  </div>
                  <div>
                    <div className="TItemsBox">
                      <div className="CIMG">
                        <img src={TImage1} alt="Image" />
                      </div>
                      <div className="CTitle">Combi Oven</div>
                    </div>
                  </div>
                  <div>
                    <div className="TItemsBox">
                      <div className="CIMG">
                        <img src={TImage1} alt="Image" />
                      </div>
                      <div className="CTitle">Combi Oven</div>
                    </div>
                  </div>
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
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
              <div>
                <div className="BIMGS">
                  <img src={Blogo} alt="Image" />
                </div>
              </div>
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
                  <i class="fa-solid fa-phone"></i> 01-4376876 , 01-4379535
                  +977- 9841885368
                </p>
                <p>
                  <i class="fa-solid fa-envelope"></i> contact@massgroup.com.np
                </p>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Mass Complex,
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
