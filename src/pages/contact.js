import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
const API_URI = "https://admin.massholdings.com.np/api/Site_settings";
const Contact = () => {
    const { slug } = useParams();
    const [content, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getApiData();
    }, [slug]);
    async function getApiData() {
        try {
            const response = await axios.get(API_URI);
            setData(response.data.site_settings);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    if (loading) return "...";
    if (error) return "error";
    return (
        <>
            <div className="container">
                <div className="contact-section">
                    <div className="title text-center mb-4">
                        <div className="big-text">Keep In Touch With Us</div>
                        <div className="normal-text text-center">Contact Us</div>
                    </div>
                    <div className="details row justify-content-between w-100">
                        <div className="col-6 form d-flex">
                            <div className="header-text mb-3">Map Location</div>
                            <div className="map">
                                <iframe src={content?.map_location} ></iframe></div>

                        </div>
                        <div className="col-5 info d-flex">
                            <div className="contact-number">
                                <i className="fa-solid fa-phone" />
                                <div className="title-text">Contact Number</div>
                                <div className="title-text">{content?.mobile}</div>
                            </div>
                            <div className="email">
                                <i className="fa-solid fa-envelope" />
                                <div className="title-text">Email Address</div>
                                <div className="title-text">{content?.email}</div>
                            </div>
                            <div className="location">
                                <i className="fa-solid fa-location-dot" />
                                <div className="title-text">Location</div>
                                <div className="title-text" dangerouslySetInnerHTML={{ __html: content?.contact_detail ? content?.contact_detail : 'No Content' }}>
                                </div>
                            </div>
                            <div className="socials d-flex">
                                <div className="normal-text">Follow Us On:</div>
                                <div className="social-logo">
                                    <a href={content?.facebook} target="_blank"><i className="fa-brands fa-facebook" /></a>
                                    <a href={content?.instagram} target="_blank"><i className="fa-brands fa-instagram" /></a>
                                    <a href={content?.youtube} target="_blank"><i className="fa-brands fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >


        </>
    );
};
export default Contact;
