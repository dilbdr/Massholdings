import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const Products = () => {
  return (
    <>
      <div className="Breadcom">
        <div></div>
      </div>
      <div className="ProductsDetails">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3 col-lg-2">
              <div className="FilterNav">Filter</div>
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
              <div>Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
