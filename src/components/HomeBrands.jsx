import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const HomeBrands = ({data}) => {
  return (
    <section className="MainBrand" aria-label='logo-section'>
        <div className="container">
            <h1 className='big-text text-blue py-5 text-center'>Our Brands</h1>
          <div className="brand-items pb-5">
            <Swiper
                modules={[Navigation, Scrollbar, Autoplay]}
                navigation={false}
                autoplay={true}
                loop={true}
                breakpoints={{
                    0: {
                    slidesPerView: 2,
                    },
                    576: {
                    spaceBetween:30,
                    slidesPerView: 3,
                    },
                    768: {
                    spaceBetween:30,
                    slidesPerView: 3,
                    },
                    992: {
                    spaceBetween:30,
                    slidesPerView: 4,
                    },
                    1200: {
                    spaceBetween:30,
                    slidesPerView: 5,
                    },
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.DocPath} alt={item.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
    </section>
  )
}

export default HomeBrands