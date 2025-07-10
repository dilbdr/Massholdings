import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import bannerImage from "../assets/img/banner/banner.png";
const Banner = (props) => {
    const banners = props.banner;
    if (banners) {
        return (
            <section className="MainBanner" aria-label='banner'>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={3000}
                >
                    {banners.map((banner, index) =>
                        <div key={index}>
                            <img src={banner.DocPath} alt={banner.title} />
                        </div>
                    )}

                </Carousel>
            </section>
        );
    }

};
export default Banner;