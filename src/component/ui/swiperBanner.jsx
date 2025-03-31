"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import "swiper/css/navigation";

const slideData = [
  {
    imgScr: "/image1.png",
    head: "zulaa",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
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
      slidesPerView={10}
      hashNavigation={{
        watchState: true,
      }}
      spaceBetween={10}
      navigation={true}
      grabCursor
      initialSlide={2}
      centeredSlides
      slideToClickedSlide
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: { spaceBetween: 10 },
        650: { spaceBetween: 30 },
        1000: { spaceBetween: 20 },
      }}
      onSwiper={(swiper) => {
        swiperWrappedRef.current = swiper.swiperWrappedEl;
      }}
      modules={[Pagination, Navigation, HashNavigation]}
      className="bannerSwiper"
    >
      <div className="justify-center ml-[100px]">
        {slideData.map((el, index) => (
          <SwiperSlide key={index}>
            <img
              className="imageStyle"
              src={el.imgScr}
              alt={`Slide ${index + 1}`}
            />
            <div className="title">
              <h1 className="">{el.head}</h1>
            </div>
            <div className="contentTitle">
              <p>{el.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
