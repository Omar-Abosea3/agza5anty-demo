"use client"

import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { brandsData } from '@/constants/Data/HomeData/brandsData';
import Image from 'next/image';
import "./Brands.scss"
import Link from 'next/link';

const Brands = ({brands}) => {
    // call css of swiper
  useEffect(()=>{
    require("../../node_modules/swiper/swiper.min.css");
  },[])
  
  return (
    <div>
        <SectionTitle title="Shop by Brands" />
        <Swiper
            slidesPerView={5}
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
            {
                brands?.result.data.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <Link href={`/brand/${item.id}`}>
                          <Image src={item.image.url} alt={item.name} width={256} height={127} className='' />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default Brands