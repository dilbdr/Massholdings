import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles

const Banner = (props) => {
    const banners = props.banner;

    if (!banners || banners.length === 0) return null;

    return (
        <section className="MainBanner" aria-label='banner'>
            <Carousel
                autoPlay={false}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                {banners.map((banner, index) => (
                    <div className='banner' key={index}>
                        {banner.file_type === 'video' ? (
                            <iframe 
                                className='h-100 w-100 m-auto' 
                                width={100}
                                height={100}
                                src={`${banner.link}&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`} 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen  // 👈 camelCase in React
                            ></iframe>
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
