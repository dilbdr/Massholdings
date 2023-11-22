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
const Products = () => {
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
      <div className="productsDetails">
        <LazyLoad>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <div className="TabImagess">
                  {data
                    ? data.img.map((image, index) => (
                        <div
                          key={index}
                          className="imgss"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target={`#imagemodel${image.id}`}
                        >
                          <img
                            src={image.DocPath}
                            className="card-img-top active"
                            alt={data.item_name}
                          />
                        </div>
                      ))
                    : error}
                  {data
                    ? data.img.map((image, index) => (
                        <div
                          key={index}
                          className="modal fade"
                          id={`imagemodel${image.id}`}
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body">
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />

                                <img
                                  src={image.DocPath}
                                  className="card-img-top active"
                                  alt={data.item_name}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : error}
                </div>
              </div>
              <div className="col-sm-12 col-md-9 col-lg-10">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="ProductsImage">
                      <img
                        src={data.img[0] ? data.img[0].DocPath : logo}
                        className="card-img-top w-100"
                        alt={data.item_name}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-8">
                    <div className="BrandImage">
                      <h1>
                        Brand : <span>{data?.brand_name}</span>
                      </h1>
                      <img
                        src={data.brand_image ? data.brand_image : logo}
                        className="card-img-top w-100"
                        alt={data?.brand_name}
                      />
                    </div>
                    <div className="Products_details">
                      <h1>
                        Product Name : <span>{data.item_name}</span>{" "}
                      </h1>
                      <h1>Description</h1>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.description
                            ? data.description
                            : "No Content",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="specification">
                  <h1>Specification</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.specification
                        ? data.specification
                        : "No Content",
                    }}
                  ></div>
                  {/* <h1>{data.item_name} </h1> */}
                  {/* <Tabs>
                  <TabList>
                    <Tab>Description</Tab>
                    <Tab>Specification</Tab>
                    <Tab>Watch Video</Tab>
                  </TabList>
                  <TabPanel>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.description
                          ? data.description
                          : "No Content",
                      }}
                    ></div>
                  </TabPanel>
                  <TabPanel>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.specification
                          ? data.specification
                          : "No Content",
                      }}
                    ></div>
                  </TabPanel>
                  <TabPanel>
                    <div>Video</div>
                  </TabPanel>
                </Tabs> */}
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>
      </div>
    </>
  );
};
export default Products;
