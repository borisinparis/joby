"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const slideData = [
  { imgScr: "/image1.png" },
  { imgScr: "/image1.png" },
  { imgScr: "/image1.png" },
  { imgScr: "/image1.png" },
  { imgScr: "/image1.png" },
];

export default function SwiperBanner() {
  const swiperWrappedRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;
    if (swiperWrappedRef.current) {
      if (screenWidth <= 520) {
        swiperWrappedRef.current.style.marginLeft = "0px";
      } else if (screenWidth <= 650) {
        swiperWrappedRef.current.style.marginLeft = "-50px";
      } else if (screenWidth <= 800) {
        swiperWrappedRef.current.style.marginLeft = "-100px";
      } else {
        swiperWrappedRef.current.style.marginLeft = "150px";
      }
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      grabCursor
      initialSlide={2}
      centeredSlides
      slideToClickedSlide
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: { spaceBetween: 40 },
        650: { spaceBetween: 30 },
        1000: { spaceBetween: 20 },
      }}
      onSwiper={(swiper) => {
        swiperWrappedRef.current = swiper.swiperWrappedEl;
      }}
      modules={[Pagination]}
      className="bannerSwiper"
    >
      {slideData.map((el, index) => (
        <SwiperSlide key={index}>
          <img
            className="imageStyle"
            src={el.imgScr}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
