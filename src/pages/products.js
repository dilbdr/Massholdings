import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import { TabTitle } from "../comon/dynamicTitle";
import Breadcrumbs from "../comon/breadcrumbs";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const { slug } = useParams();
  TabTitle(`Mass Holdings | ${slug}`);

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async (currentPage) => {
    try {
      const response = await axios.get(
        `https://admin.massholdings.com.np/api/products/all/${slug}/${currentPage}`
      );

      const newItems = response.data?.items || [];

      if (newItems.length === 0) {
        setHasMore(false); // No more data
      } else {
        setItems((prev) => [...prev, ...newItems]);
      }
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setItems([]); // Clear on slug change
    setPage(0);
    setHasMore(true);
    setLoading(true);
    fetchProducts(0);
  }, [slug]);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  };

  if (loading && page === 0) return <Loading />;
  if (error) return <Errors />;

  return (
    <>
      <Breadcrumbs />
      <div className="container py-5">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<div class="infinite-loader"><span></span></div>}
            scrollableTarget="scrollableDiv"
          >
            {items.length === 0 ? (
              <p>No items</p>
            ) : (
              <div className="row">
                {items.map((item, index) => (
                  <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                    <div className="product-card overflow-hidden mb-4">
                      <div className="img-wrapper">
                        <img src={item.DocPath} alt={item.item_name} />
                      </div>
                      <p className="normal-text">{item.item_name}</p>
                      <Link className="btn" to={`/products/details/${item.slug}`}>
                        <h6 className="text-white mb-0 px-3 py-2">MORE INFO</h6>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </InfiniteScroll>
      </div>
    </>
  );
};

export default Products;
