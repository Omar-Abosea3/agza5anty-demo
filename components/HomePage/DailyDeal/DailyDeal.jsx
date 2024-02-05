"use client"

import ProductCard from '@/components/ProductCard/ProductCard'
import ProductSlider from '@/components/ProductSlider/ProductSlider'
import { dailyDealData } from '@/constants/Data/HomeData/dailyDealData'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

const DailyDeal = () => {
  return (
    <div className="mt-[60px]">
      <ProductSlider title="Best sales" position show={4}>
        {dailyDealData.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
                key={index}
                bgTransparent
                title={item.name}
                imgSrc={item.imgSrc}
                oldPrice={item.oldPrice}
                price={item.newPrice}
                rate={item.rate}
            />
          </SwiperSlide>
        ))}
      </ProductSlider>
    </div>
  )
}

export default DailyDeal