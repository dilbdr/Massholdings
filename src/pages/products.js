import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/img/logo.png";
const API_URI = "https://admin.massholdings.com.np/api/products/10/1";
const Products = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getApiData();
  }, [slug]);
  async function getApiData() {
    try {
      const response = await axios.get(API_URI);
      setData(response.data);
      console.log("P-------------------", response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  if (loading) return "...";
  if (error) return "error";
  return (
    <>
      <div className="Breadcom">
        <div className="container">
          <h1>{slug}</h1>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>{slug}</li>
          </ul>
        </div>
      </div>
      <div className="ProductsDetails">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              {data.items.map((i) => {
                console.log("it", i.slug);
                return (
                  <div className="ProductsItems">
                    <div className="productsImage">
                      <img src={i.DocPath} />
                    </div>
                    <div className="productsTitle">
                      <h1>{i.item_name}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
