import Button from "@/components/Button/Button";
import MainInput from "@/components/inputs/MainInput/MainInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const ForgotPassword = ({t, lang}) => {
  return (
    <div className="h-full">
      <div className="block min-[1120px]:flex min-[1120px]:justify-center items-center max-[1120px]:my-[50px] px-[20px] md:px-[44px] h-full">
        <div className="w-full min-[1120px]:max-w-[380px] flex-1">
          <div className="mb-[40px] space-y-[2px]">
            <p className="text-white min-[1120px]:text-black2 font-bold text-[26px]">
              {t.auth.forgotPassword}
            </p>
            <p className="text-white min-[1120px]:text-black2 text-[18px]">{t.auth.insertYourEmail}</p>
          </div>

          <form className="space-y-[19px]">
            <MainInput placeholder={t.auth.emailAddress} type="email" />

            <Button text={t.auth.resetpassword} color="main" />
          </form>
          <div className="flex flex-col gap-[11px] text-center mt-[22px] text-black2">
            <Link
              href={`/${lang}/auth/login`}
              className="flex items-center justify-center gap-[10px] opacity-70"
            >
              <HiOutlineArrowNarrowLeft size={18} className="text-black2" />
              <p className="text-[14px] text-black2">{t.auth.backToLogin}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
