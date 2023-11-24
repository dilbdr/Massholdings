import axios from "axios";
import React from "react";
import logo from "../assets/img/logo.png";
import { Link, useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Breadcrumbs from "../comon/breadcrumbs";
const Common = (props) => {
  const { slug } = useParams();
  const content = props.content;
  const breadcrum = props.breadcrum;
  console.log("----Params----", content);
  return (
    <>
      <Breadcrumbs />

      <div className="about-section">
        <div className="container">
          {content?.length === 0
            ? "No Content"
            : content?.map((content) => (
                <>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-8">
                      <div className="insideContent">
                        <h1>{content.title}</h1>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: content.Description
                              ? content.Description
                              : "No Content",
                          }}
                        ></p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="aboutImage">
                        <img
                          src={content.CoverImage ? content.CoverImage : logo}
                          alt={content.title}
                        />
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
export default Common;
