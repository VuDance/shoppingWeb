import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css"

import classNames from "classnames/bind";
import style from "./Slider.module.scss";

const cx = classNames.bind(style);

export default function Slider() {
  const Sliders = [];
  for (var i = 1; i < 5; i++) {
    Sliders.push(
      <img
        className={cx("SliderItem")}
        src={`https://theme.hstatic.net/1000026602/1000911550/14/slideshow_${i}.jpg?v=410`}
      />
    );
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={cx("wrapper")}
      >
        {Sliders.map((item) => (
          <SwiperSlide> {item} </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
