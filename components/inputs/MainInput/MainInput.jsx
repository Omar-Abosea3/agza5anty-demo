import React from "react";
import Image from "next/image";
import lockIcon from "@/assets/icons/lock.svg";
import mailIcon from "@/assets/icons/mail.png";
import mapIcon from "@/assets/icons/pin.svg";
import cardIcon from "@/assets/icons/card.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import userIcon from "@/assets/icons/user.svg";
import searchIcon from "@/assets/icons/search.svg";


const MainInput = ({ label, value, error, type, placeholder, onChange, onBlur, id }) => {
  return (
    <div className="border border-[#EEEEEE] bg-white rounded-[30px] py-[20px] px-[25px] flex items-center gap-[8px] w-full">
      {type === "email" && <Image src={mailIcon} alt="phone" width={18} height={20} className="object-contain" /> }
      {type === "password" && <Image src={lockIcon} alt="phone" width={18} height={20} className="object-contain" /> }
      {type === "user" && <Image src={userIcon} alt="phone" width={18} height={20} className="object-contain" /> }
      {type === "phone" && <Image src={phoneIcon} alt="phone" width={18} height={20} className="object-contain" /> }
      {type === "map" && <Image src={mapIcon} alt="map" width={18} height={20} className="object-contain" /> }
      {type === "card" && <Image src={cardIcon} alt="card" width={18} height={20} className="object-contain" /> }

      <input
        defaultValue={value}
        placeholder={placeholder}
        className="w-full outline-none placeholder:text-gray1 bg-transparent"
        type={type === "password" ? "password" : "text"}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
      />

      {type === "search" && <Image src={searchIcon} alt="card" width={18} height={20} className="object-contain" />}
    </div>
  );
};

export default MainInput;
