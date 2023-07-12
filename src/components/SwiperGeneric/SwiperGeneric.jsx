/* import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css/bundle";

const SwiperGeneric = ({ children, ...props }) => {
  return (
    <Swiper
      loop
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView="auto"
      navigation
      swipeHandler={true}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default SwiperGeneric; */

import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

const SwiperGeneric = ({ children, ...props }) => {
  return (
    <Swiper
      loop
      modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
      spaceBetween={5}
      slidesPerView="auto"
      navigation
      swipeHandler={true}
      //freeMode={true}
      {...props}
    >
      {/* <SwiperSlide>{children}</SwiperSlide> */}
      {children}
    </Swiper>
  );
};

export default SwiperGeneric;
