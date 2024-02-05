"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { latestProductsData } from "@/constants/Data/HomeData/latestProductsData";
import { getPartsOfArray } from "@/constants/arrayMethods";
import React from "react";
import { SwiperSlide } from "swiper/react";

const LatestProducts = ({latestProducts}) => {
  // const latestProductsParts = getPartsOfArray(latestProducts?.result.data, 8) || null;
  
  return (
    <div className="mt-[60px]">
      {/* <ProductCard category="1" title="asdasd asdas" oldPrice="50" price="49" rating="5" status="Now"   /> */}
      <ProductSlider title="Latest Products" position show={1}>
        <SwiperSlide >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1300px]:grid-cols-4 gap-[35px] h-fit">
            {latestProducts?.map((item, index) => (
                    <ProductCard
                      key={index}
                      category={item.category}
                      title={item.name}
                      oldPrice={item.oldPrice || 0}
                      price={item.list_price + " " + item.currency_id[1]}
                      rate={item.rating_avg}
                      status={item.status}
                      imgSrc={item.image}
                      id={item.id}
                      quantity={1}
                      product = {item}
                    />
            ))}
          </div>
        </SwiperSlide>
      </ProductSlider>
    </div>
  );
};

export default LatestProducts;
