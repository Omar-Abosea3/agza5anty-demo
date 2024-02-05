"use client"

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import img1 from "@/assets/images/buyNow/image1.png";
import img2 from "@/assets/images/buyNow/image2.png";
import img3 from "@/assets/images/buyNow/image3.png";
import img4 from "@/assets/images/buyNow/image4.png";
import img5 from "@/assets/images/buyNow/image5.png";
import Image from "next/image";


const BuyNow = () => {
  useEffect(()=>{
    require("../../../node_modules/swiper/swiper.min.css");
  },[])
  return (
    <>
      <div className="hidden xl:flex items-center flex-col min-[1450px]:flex-row gap-[30px] mt-[67px]">
        <div className="w-[70%] flex flex-col gap-[30px] h-full">

          <div className="flex items-center gap-[30px] h-full">
            <div className="relative w-[70%] h-[284px] rounded-[10px] overflow-hidden">
              <Image src={img1} alt="buy" fill className="object-cover" />
            </div>
            <div className="relative w-[30%] h-[284px] rounded-[10px] overflow-hidden">
              <Image src={img2} alt="buy" fill className="object-cover" />
            </div>
          </div>

          <div className="flex items-center gap-[30px] h-full">
            <div className="relative w-[38%] h-[322px] rounded-[10px] overflow-hidden">
              <Image src={img3} alt="buy" fill className="object-cover" />
            </div>
            <div className="relative w-[62%] h-[322px] rounded-[10px] overflow-hidden">
              <Image src={img4} alt="buy" fill className="object-cover" />
            </div>
          </div>

        </div>

        <div className="w-[30%] h-[640px] relative rounded-[10px] overflow-hidden">
          <Image src={img5} alt="buy" fill className="object-cover" />
        </div>
      </div>

      <div className="block xl:hidden">
        <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={{
                  clickable: true,
                }}
              autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
              }}
              loop
              modules={[Autoplay,Pagination, Navigation]}
          >
            <SwiperSlide className="mb-5">
                <div className="relative w-full h-[208px]">
                  <Image src={img1} alt="brand" fill className='object-contain' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5">
              <div className="relative w-full h-[188px]">
                <Image src={img2} alt="brand" fill className='object-contain' />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5">
              <div className="relative w-full h-[188px]">
                <Image src={img3} alt="brand" fill className='object-contain' />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5">
              <div className="relative w-full h-[188px]">
                <Image src={img4} alt="brand" fill className='object-contain' />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5">
              <div className="relative w-full h-[188px]">
                <Image src={img5} alt="brand" fill className='object-contain' />
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BuyNow;
