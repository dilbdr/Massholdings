import axios from "axios";
import React from "react";
import logo from "../assets/img/logo.png";
import 'react-tabs/style/react-tabs.css';

const About = (props) => {
  const content = props.content;
  const breadcrum = props.breadcrum;
  console.log('----Params----', content)
  return (
    <>
      <div className="container">
        <div className="about-section">
          {content?.length === 0 ? "No Content" : content?.map((content) =>
            <div className="introduction row justify-content-between">
              <div className="col-5 details">
                <div className="title">
                  <div className="menu-text">{breadcrum.replace('-', ' ').toUpperCase()}</div>
                </div>
                <div className="description">
                  <div className="header-text title mb-3">
                    {content.title}
                  </div>
                  <div className="normal-text mb-5" dangerouslySetInnerHTML={{ __html: content.Description ? content.Description : 'No Content' }}></div>

                </div>
              </div>
              <div className="col-6 sample-img text-center">
                <img src={content.CoverImage ? content.CoverImage : logo} alt={content.title} />
              </div>
            </div>
          )}

        </div>
      </div>

    </>
  );
};
export default About;
