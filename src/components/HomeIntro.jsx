import React from 'react'
import { Link } from 'react-router-dom'

const HomeIntro = ({data}) => {
  return (
    <div className="CompanyIntro">
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="CImages">
                    <img src={data.CoverImage} alt={data.PageTitle} />
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="CContent">
                <h1>{data.PageTitle}</h1>
                <div
                    className="post__content"
                    dangerouslySetInnerHTML={{ __html: data.Description }}
                ></div>
                <Link to={`/about-us`} className="BTNSSS">
                    LEARN MORE
                </Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeIntro