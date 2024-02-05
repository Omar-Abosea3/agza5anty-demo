import { servicesData } from "@/constants/Data/HomeData/servicesData";
import React from "react";
import "./Services.scss";
import MainButton from "@/components/Button/MainButton";

const Services = ({ t, lang }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[35px] mt-[35px]">
      {servicesData.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-[10px] py-[32px] ps-[22px] pe-[50px] space-y-[8px]`}
          style={{
            background: `url(${item.bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="service-card-color"
            style={{
              backgroundColor: item.color,
            }}
          ></div>
          <div className="z-10 relative flex flex-col h-full">
           <div className="flex-1">
            <p className="text-[30px] font-[700] text-white pe-[0px] uppercase">
                {lang === "ar" ? item.nameAr : item.nameEn}
              </p>
              <p className="text-white">
                {lang === "ar" ? item.subTitleAr : item.subTitleEn}
              </p>
           </div>
            
            <div className="flex justify-end mt-[8px]">
                <MainButton
                    text={t.home.clickhere}
                    outline
                    icon="arrow"
                    padding="2px 14px"
                    fontSize="20px"
                />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
