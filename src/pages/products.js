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
import Pagination from "react-js-pagination";
const Products = () => {
  const [isPage, setActive] = React.useState(0);
  const handlePageChange = (pageNumber) => {
    // const pagesss = pageNumber * 8;
    setActive(pageNumber);
  };
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
          `https://admin.massholdings.com.np/api/products/all/${slug}/${isPage}`
        );
        setData(response.data);
        console.log("products", response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [slug, isPage]);

  if (loading) return <Loading />;
  if (error) return <Errors />;
  return (
    <>
      <Breadcrumbs />

      <div className="container py-5">
        <div className="row">
          {data.length === 0
            ? "No items"
            : data?.items?.map((Itemss, index) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                    <div className="product-card overflow-hidden mb-4">
                        <div className="img-wrapper">
                            <img src={Itemss.DocPath} alt={Itemss.item_name} />
                        </div>
                        <p className='normal-text'>{Itemss.item_name}</p>
                        <Link className="btn" to={`/products/details/${Itemss.slug}`}>
                            <h6 className='text-white mb-0 px-3 py-2'>MORE INFO</h6>
                        </Link>
                    </div>
                    {/* <div className="ItemsBox">
                      <div className="image">
                        <Link to={`../../products/details/${Itemss.slug}`}>
                          <img src={Itemss.DocPath} alt="Products Image" />
                        </Link>
                      </div>
                      <div className="title">
                        <Link to={`../../products/details/${Itemss.slug}`}>
                          <h2>{Itemss.item_name}</h2>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                );
              })}
        </div>
        {data.total > 8 ? (
          <div className="d-flex justify-content-center py-3">
            <Pagination
              activePage={isPage}
              itemsCountPerPage={8}
              totalItemsCount={data.total}
              pageRangeDisplayed={5}
              firstPageText="First Page"
              lastPageText="Last Page"
              itemClass="page-item"
              linkClass="page-link"
              onChange={handlePageChange}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Products;
