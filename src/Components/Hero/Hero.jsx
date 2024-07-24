// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
const Hero = () => {
  return (
    <div className="Hero">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="Hero-mySwiper"
      >
        <SwiperSlide className="Hero-slide">
          <h1 className="Hero-slide-text">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed{" "}
          </h1>
        </SwiperSlide>
        <SwiperSlide className="Hero-slide">
          <h1 className="Hero-slide-text">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed{" "}
          </h1>
        </SwiperSlide>
        <SwiperSlide className="Hero-slide">
          <h1 className="Hero-slide-text">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed{" "}
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Hero;
