"use client";
import React, { useState } from "react";
import "./ProductTabs.scss"

const ProductTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs mt-[72px] w-full">
        <div className="border-b-[2px] border-[#D9D9D9] pb-[13px]">
            <div className="flex items-center gap-[24px] min-[550px]:gap-[66px]">
                {Object.keys(data).map((item, index) => {
                return <p 
                    key={index} 
                    className={`${activeTab === index ? "active" : ""} tab-item capitalize text-[14px] min-[850px]:text-[25px] text-black2 cursor-pointer`}
                    onClick={() => setActiveTab(index)}
                >{item}</p>;
                })}
            </div>
        </div>

      <div className="mt-[12px] text-[#575757]">
        {Object.values(data).map((item, index) => {
          return (
            <div key={index} className={`${activeTab === index ? "block" : "hidden"} text-[12px] min-[850px]:text-[17px] tab-content leading-[30px]`}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTabs;
