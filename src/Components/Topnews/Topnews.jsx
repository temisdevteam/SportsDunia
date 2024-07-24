// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Topnews.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Topnews = () => {
  return (
    <div className="Topnews">
      <h2 className="Topnews-head">Top news</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="Topnews-mySwiper"
      >
        <SwiperSlide className="Topnews-slide">
          <h1 className='Topnews-slide-text'>
            
          </h1>
        </SwiperSlide>
        <SwiperSlide className="Topnews-slide">
          <h1 className='Topnews-slide-text'>
            
          </h1>
        </SwiperSlide >
        <SwiperSlide className="Topnews-slide">
          <h1 className='Topnews-slide-text'>
            
          </h1>
        </SwiperSlide>
      </Swiper>
      <div className="Topnews-down">
        <a className="tags" href="#">
          League
        </a>
        <a className="tags" href="#">
          Football
        </a>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </h2>
      </div>
    </div>
  );
};

export default Topnews;
