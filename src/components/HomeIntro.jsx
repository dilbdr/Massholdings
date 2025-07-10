import React from 'react'
import { Link } from 'react-router-dom'

const HomeIntro = ({data}) => {
  return (
    <section className="intro container row m-auto py-5" aria-label='Introduction Section'>
        <div className="col-sm-12 col-md-12 col-lg-5 pb-5">
            <img src={data.CoverImage} alt={data.PageTitle} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7">
            <h1 className='big-text text-blue'>{data.PageTitle}</h1>
            <div
                className="normal-text"
                dangerouslySetInnerHTML={{ __html: data.Description }}
            ></div>
            <Link className="cta-btn position-relative px-4 py-3" to={`/about-us`}>
              <p className='text-white z-1 position-relative'>LEARN MORE</p>
            </Link>
        </div>
    </section>
  )
}

export default HomeIntro