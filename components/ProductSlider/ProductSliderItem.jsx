"use client"

import React from 'react'
import { SwiperSlide } from 'swiper/react'
import "swiper/css/pagination";
const ProductSliderItem = ({children}) => {
  return (
    <SwiperSlide>{children}</SwiperSlide>
  )
}

export default ProductSliderItem