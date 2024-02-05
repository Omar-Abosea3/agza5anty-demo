"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import arrowRightSlider from "@/assets/icons/arrow-right-slider.svg";
import arrowLeftSlider from "@/assets/icons/arrow-left-slider.svg";


import "./ProductSlider.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProductSlider = ({title, position,show=4, children }) => {
  const [swiper, setSwiper] = useState();

  // call css of swiper
  useEffect(()=>{
    require("../../node_modules/swiper/swiper.min.css");
  },[])

  return (
    <div className="relative">
      <div className="slide-btns">
        <span onClick={() => swiper?.slidePrev()} className="slider-btn">
          <Image src={arrowLeftSlider} alt="slide" loading="lazy" />
        </span>
        <span onClick={() => swiper?.slideNext()} className="slider-btn">
          <Image src={arrowRightSlider} alt="slide" loading="lazy" />
        </span>
      </div>

      {!position && title && (
        <p className="text-black3 text-[24px] md:text-[30px] font-[500] md:font-[700] mb-[34px]">{title}</p>
      )}

      {
        position && title && (
          <SectionTitle title={title} />
        )
      }

      <Swiper
        // slidesPerView={show}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        loop
        height="fit-content"
        observer={true}
        observeParents={true}
        freeMode={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          1300:{
            slidesPerView: show,
            spaceBetween:34,
          },
          1024: {
            slidesPerView: show === 1 ? 1 : show > 6 ? 5 : 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: show === 1 ? 1 : show > 6 ? 4 : 2,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: show === 1 ? 1 : show > 6 ? 3 : 2,
            spaceBetween: 18
          },
          320: {
            slidesPerView: show === 1 ? 1 : show > 6 ? 2 : 1,
            spaceBetween:12
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5
          }

        }}
        className=" pb-5"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
