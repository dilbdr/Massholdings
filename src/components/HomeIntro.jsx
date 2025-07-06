import React from 'react'
import { Link } from 'react-router-dom'

const HomeIntro = ({data}) => {
  return (
    <div className="CompanyIntro">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={data.CoverImage} alt={data.PageTitle} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h1 className='big-text text-blue'>{data.PageTitle}</h1>
                    <div
                        className="normal-text"
                        dangerouslySetInnerHTML={{ __html: data.Description }}
                    ></div>
                    <Link to={`/about-us`}>
                        <div className="cta-btn position-relative bg-red px-4 py-3">
                            <p className='text-white z-1 position-relative'>LEARN MORE</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeIntro