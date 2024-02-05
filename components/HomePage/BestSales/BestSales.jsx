"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { bestSalesData } from "@/constants/Data/HomeData/bestSalesData";
import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

const BestSales = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    setTest("test");
  }, []);

  useEffect(()=>{
    // alert("Fetching")
  },[test])

  return (
    <div className="mt-[60px]">
      {!test ? (
        "Not found"
      ) : (
        <ProductSlider title="Best sales" position show={4}>
          {bestSalesData.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                salesCard
                key={index}
                title={item.name}
                imgSrc={item.imgSrc}
                oldPrice={item.oldPrice}
                price={item.newPrice}
                rate={item.rate}
                status={item.status}
              />
            </SwiperSlide>
          ))}
        </ProductSlider>
      )}
    </div>
  );
};

export default BestSales;
