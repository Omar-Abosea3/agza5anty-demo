"use client"

import CartItems from "@/components/CartPage/CartItems/CartItems";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

import "./ShippingInfo.scss";
import Image from "next/image";

import pillIcon from "@/assets/icons/pill.svg"
import cashIcon from "@/assets/icons/cash.svg"
import coinsIcon from "@/assets/icons/coins.svg"
import { FaMapMarkerAlt } from "react-icons/fa";

const ShippingInfo = () => {
    const [orderStatus, setOrderStatus] = useState(3)
  return (
    <div className="flex flex-col xl:flex-row gap-[25px]">
      <div className="w-full xl:w-[600px] space-y-[23px]">
        <CartItems removeAction />

        <div className="component-wrapper px-[20px] min-[510px]:px-[60px]">
            <div className="flex items-start min-[510px]:items-center justify-between flex-col min-[510px]:flex-row gap-[10px]">
                <div className="flex items-center gap-[22px]">
                    <Image src={pillIcon} alt="pill" width={30} height={30} className="object-contain"  />
                    <p className="text-[20px] font-[600]">EG 400</p>
                </div>
                <div className="flex items-center gap-[22px]">
                    <Image src={cashIcon} alt="pill" width={36} height={22} className="object-contain" />
                    <p className="text-[20px] font-[600]">Paid in cash</p>
                </div>
            </div>

            <div className="bg-[#20A5D5] text-white py-[8px] flex items-center justify-center gap-[16px] rounded-[10px] my-[20px] cursor-pointer">
                <Image src={coinsIcon} alt="pill" width={24} height={24} className="object-contain"  />
                <p className="text-[14px] min-[510px]:text-[18px] font-[500]">Your 100 point  are on the way!</p>
            </div>

            <div className="flex gap-[15px]">
                <div>
                    <FaMapMarkerAlt size={22} className="mt-2" />
                </div>
                
                <div className="space-y-[4px]">
                    <p className="text-[14px] min-[510px]:text-[18px] font-[600]">229, west Arabella, El Tagamoa</p>
                    <p className="text-[#000000B2] text-[14px] min-[510px]:text-[18px] ">229, west Arabella, El Tagamoa Talet, Cairo, Egypt, New Cairo</p>
                </div>
            </div>
        </div>

      </div>
      <div className="flex-1 space-y-[25px]">
        <div className="component-wrapper px-[54px] h-[160px] flex flex-col justify-center">
          <p className="text-primary font-[700] text-[20px] min-[510px]:text-[28px]">Fri, 1 Dec 2023</p>
          <div className="flex items-center gap-[20px] text-black text-[16px] min-[510px]:text-[18px] font-[500] mt-[16px]">
            <p>In 40 minutes</p>
            <p>Order #2000279</p>
          </div>
        </div>

        <div className="shipping-stepper component-wrapper px-[54px]">
          <p className="text-black font-[600] text-[20px]">Order Status</p>
            <ul className="mt-[42px]">
                <li className={`${orderStatus > 0 ? "active" : ""}`}>
                    <div className="flex items-center gap-[23px]">
                        <FaCircleCheck className="icon" size={22} />
                        <p className="text-[24px] font-[500]">Order placed</p>
                    </div>
                </li>
                <li className={`${orderStatus > 1 ? "active" : ""}`}>
                    <div className="flex items-center gap-[23px]">
                        <FaCircleCheck className="icon" size={22} />
                        <p className="text-[24px] font-[500]">Preparing</p>
                    </div>
                </li>
                <li className={`${orderStatus > 2 ? "active" : ""}`}>
                    <div className="flex items-center gap-[23px]">
                        <FaCircleCheck className="icon" size={22} />
                        <p className="text-[24px] font-[500]">On it’s way</p>
                    </div>
                </li>
                <li className={`${orderStatus > 3 ? "active" : ""}`}>
                    <div className="flex items-center gap-[23px]">
                        <FaCircleCheck className="icon" size={22} />
                        <p className="text-[24px] font-[500]">Delivered </p>
                    </div>
                </li>
                
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
