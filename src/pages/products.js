import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
      const response = await axios.get(`https://admin.massholdings.com.np/api/products/detail/${slug}`);
      setData(response.data.detail);

    } catch (error) {
      setError(error.statusText);
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
      <div className="container">
        <div className="main-section row">
          <div className="img-section col-6">
            <div className="row">
              <div className="small-img-section col-2">
                <div className="row row-cols-1 g-4">
                  {
                    data ? data.img.map((image) =>
                      <div className="col">
                        <div className="h-100">
                          <img
                            src={image.DocPath}
                            className="card-img-top active"
                            alt={data.item_name}
                          />
                        </div>
                      </div>
                    ) : error
                  }



                </div>
              </div>
              <div className="full-img-section col-10">
                <img
                  src={data.img[0] ? data.img[0].DocPath : logo}
                  className="card-img-top w-100"
                  alt={data.item_name}
                />
              </div>
            </div>
          </div>
          <div className="details-section col-6">
            <div className="title header-text mb-4">
              <h1>{data.item_name} </h1>
            </div>
            <Tabs>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Specification</Tab>
              </TabList>

              <TabPanel>
                <div dangerouslySetInnerHTML={{ __html: data.description ? data.description : 'No Content' }}></div>
              </TabPanel>
              <TabPanel>
                <div dangerouslySetInnerHTML={{ __html: data.specification ? data.specification : 'No Content' }}></div>
              </TabPanel>
            </Tabs>
          </div>
        </div >
      </div>
    </>
  );
};
export default Products;
