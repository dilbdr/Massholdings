import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../comon/breadcrumbs'
import Kitchen from '../assets/img/kitchen.jpg'

const NewsList = () => {
  return (
    <>
        <Breadcrumbs />
        <div className="container py-5">
            <div className="news-list">
                <Link>
                    <div className="news-card">
                        <div className="img-wrapper">
                            <img src={Kitchen} alt="news image" />
                            <p className='px-3 py-2'>Read More</p>
                        </div>
                        <div className="news-detail">
                            <p className="menu-text">Massholding Builds Modular Kitchen in Nepal</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default NewsList