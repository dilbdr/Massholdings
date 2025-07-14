import axios from "axios";
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import Loading from "../comon/loading";
import Errors from "../comon/error";
import Breadcrumbs from "../comon/breadcrumbs";
const API_URI = "https://admin.massholdings.com.np/api/Site_settings";

const Contact = () => {
  const [content, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(API_URI);
        setData(response.data.site_settings);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Errors />;
  return (
    <>
      <Breadcrumbs />
      <div className="container py-5 row m-auto">
            <div className="col-lg-6 pb-5">
              <h2 className="header-text text-blue pb-3">Contact Us</h2>
              <div className="contactp">
                <div className="detail">
                  <i class="fa-solid fa-phone"></i>
                  <p>{content?.telephone}</p>
                </div>
                <div className="detail">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <p>{content?.mobile}</p>
                </div>
                <div className="detail">
                  <i class="fa-solid fa-envelope"></i>
                  <p>{content?.email}</p>
                </div>
                <div className="detail">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>{content?.address}</p>
                </div>
              </div>
            </div>
            <div className="mapp col-lg-6">
              <h2 className="header-text text-blue pb-3">Map Location</h2>
              <iframe className="w-100" src={content?.map_location}></iframe>
            </div>
      </div>
    </>
  );
};
export default Contact;
