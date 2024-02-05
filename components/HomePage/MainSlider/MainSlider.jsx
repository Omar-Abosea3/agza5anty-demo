"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slidersData from "@/constants/Data/MainSlider";
// import heroImg from '@/assets/images/sliders/product1.jpg'
import heroBg from "@/assets/images/sliders/heroSliderBg.png";

import "./MainSlider.scss";
import MainButton from "@/components/Button/MainButton";
import Link from "next/link";
import Container from "@/components/Container/Container";

const MainSlider = ({ lang }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
      autoplay={true}
    >
      {slidersData?.map((slider) => (
        <SwiperSlide
          key={slider.id}
          style={{
            height: "100%",
            backgroundImage: `url("${slider.bgImg.src}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
            <div className="w-full h-full">
              <div className="relative w-full h-[380px] min-[900px]:h-[588px]">
                <Image
                  src={slider.img}
                  alt={slider.nameEn}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="pt-[66px]">
              <p className={"slider-title text-white"}>
                {lang === "ar" ? slider.nameAr : slider.nameEn}
              </p>
              <div className="flex flex-col min-[500px]:flex-row  mt-[20px] justify-center min-[1020px]:justify-start gap-[30px] min-[500px]:gap-0">
                {slider.attributes.map((attr, index) => (
                  <div
                    key={index}
                    className="flex items-center flex-row gap-[20px]"
                  >
                    <div className="w-[80px] h-[80px] min-[900px]:w-[100px] min-[900px]:h-[100px] bg-white p-[12px] rounded-full flex items-center justify-center">
                      <Image
                        src={attr.icon}
                        alt={attr.nameEn}
                        width={88}
                        height={88}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-white text-[16px] min-[600px]:text-[25px] font-[700] max-w-[220px]">
                      {lang === "ar" ? attr.nameAr : attr.nameEn}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center me-5 pe-5">
              <MainButton
                text={lang === "ar" ? slider.cta.nameAr : slider.cta.nameEn}
                href={slider.cta.url}
                color="secondary"
                padding="14px 46px"
                upperCase
                fontWeight="700"
                fontSize="18px"
              />
              </div>
            </div>
          </div>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
