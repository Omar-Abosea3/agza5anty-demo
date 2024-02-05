"use client";
import CategoryItem from "@/components/CategoryItem/CategoryItem";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ProductSliderItem from "@/components/ProductSlider/ProductSliderItem";
import { shopByCategoryData } from "@/constants/Data/HomeData/shopByCategoryData";
import React from "react";
import { SwiperSlide } from "swiper/react";

const ShopByCategory = ({categories , lang}) => {
  return (
    <div className="mt-[60px]">
      <ProductSlider title="Shop by Category" show={7}>
        {categories?.result.data.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryItem
              imgSrc={ shopByCategoryData[0].imgSrc} //item.image 
              text={item.name}
              alt={item.name}
              id={item.id}
              lang={lang}
            />
          </SwiperSlide>
        ))}
      </ProductSlider>
    </div>
  );
};

export default ShopByCategory;
