import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const HomeFeatureProduct = ({data}) => {
  return (
    <Swiper
        modules={[Navigation, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        autoplay={true}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {data?.map((item) => (
            <SwiperSlide>
                <Link to={`/products/details/${item.slug}`}>
                    <div
                    className="main-card bg-white m-2 rounded-2 shadow-3"
                    >
                    <div className="CIMG">
                        <img src={item.DocPath} alt={item.item_name} />
                    </div>
                    <h2 className="detail bg-red text-white normal-text p-2 text-center mb-0 rounded-bottom-2">
                        {item.item_name}
                    </h2>
                    </div>
                </Link>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default HomeFeatureProduct