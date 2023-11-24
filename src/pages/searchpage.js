import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../comon/loading";
import Errors from "../comon/error";
import Breadcrumbs from "../comon/breadcrumbs";
const SearchPage = () => {
    const slug = useParams();
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await axios.get(`https://admin.massholdings.com.np/api/search?search=${slug.slug}`);
                setData(response.data.search);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        })();
    }, [slug]);
    console.log('List =====', Data);
    if (loading) return <Loading />;
    if (error) return <Errors />;
    return (
        <>
            <Breadcrumbs />
            <div className="about-section">
                <div className="container">
                    {Data?.length === 0
                        ? "No Content"
                        : Data?.map((content) => (
                            <>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-8">
                                        <div className="insideContent">
                                            {content.slug ? <Link to={`/products/${content.slug}`}><h4>{content.title}</h4></Link> : <Link><h4>{content.title}</h4></Link>}


                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </>
    );
};
export default SearchPage;
