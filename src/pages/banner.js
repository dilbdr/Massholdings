import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles

const Banner = (props) => {
    const banners = props.banner;

    if (!banners || banners.length === 0) return null;

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
                {banners.map((banner, index) => (
                    <div key={index}>
                        {banner.file_type === 'video' ? (
                            <iframe 
                            className='h-100 mb-0'
                            width="560" 
                            src={banner.link}
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullscreen></iframe>
                        ) : (
                            <img src={banner.DocPath} alt={banner.title || `banner-${index}`} />
                        )}
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Banner;
