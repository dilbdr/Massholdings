import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const HomeBestSeller = ({data}) => {
  return (
    <Swiper
        modules={[Navigation, Scrollbar, Autoplay]}
        navigation={true}
        autoplay={true}
        loop={true}
        breakpoints={{
            0: {
            slidesPerView: 1,
            },
            576: {
            spaceBetween:10,
            slidesPerView: 2,
            },
            768: {
            spaceBetween:10,
            slidesPerView: 3,
            },
            992: {
            spaceBetween:10,
            slidesPerView: 3,
            },
            1200: {
            spaceBetween:10,
            slidesPerView: 4,
            },
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
    >
        {data?.map((item, index) => (
            <SwiperSlide key={index}>
                <>
                    <div className="product-card">
                        <div className="img-wrapper">
                            <img src={item.DocPath} alt={item.item_name} />
                        </div>
                        <p className='normal-text'>{item.item_name}</p>
                        <Link className="btn" to={`/products/details/${item.slug}`}>
                            <h6 className='text-white mb-0 px-3 py-2'>MORE INFO</h6>
                        </Link>
                    </div>
                </>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default HomeBestSeller