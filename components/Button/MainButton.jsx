"use client";
import { Button } from "@mui/material";
import MainLink from "./MainLink";
import Image from "next/image";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import cart from "@/assets/icons/cart.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainButton({
  text,
  href,
  outline,
  color,
  icon,
  iconStart,
  clickHandler,
  padding,
  fontSize = "16px",
  fontWeight = "400",
  upperCase,
  width,
  disabled,
  type,
  id
}) {
  const [lang, setLang] = useState("en");

  const pathName = usePathname();
  useEffect(() => {
    setLang(pathName.split("/")[1]);
  }, [pathName]);


  const getButtonStyles = ()=>{
    if(disabled) {
      return {
        background: "#00000026 !important",
        color: "#fff !important",
        border: "0",
        cursor: "not-allowed"
      }
    }
    if(color === "secondary") {
      return {
        background: "linear-gradient(90deg, rgba(128,194,101,1) 0%, rgba(94,188,159,1) 35%) !important",
        "&:hover": {
          background: "linear-gradient(90deg, rgba(128,194,101,1) 0%, rgba(94,188,159,1) 35%) !important",
        },
        color: "#fff !important",
        border: "0"
      }
    }

    if(color === "primary") {
      return {
        background: "linear-gradient(90deg, rgba(65,188,232,1) 0%, rgba(65,188,232,1) 35%) !important",
        "&:hover": {
          background: "linear-gradient(90deg, rgba(65,188,232,1) 0%, rgba(65,188,232,1) 35%) !important",
        },
        color: "#fff !important",
        border: "0"
      }
    }
    
    if(color === "error") {
      return {
        background: "linear-gradient(90deg, #C12E35 0%, #DE1F27 50%),linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)) !important",
        color: "#fff !important",
        border: "0"
      }
    }

    if(outline) {
      return {
        background: "transparent !important",
        "&:hover": {
          background: "transparent !important",
        },
        color: "#fff !important",
        border: "1px solid #fff"
      }
    }

    return {
      background: "#85C25B80 !important",
      "&:hover": {
        background: "#85C25B !important",
      },
      color: "#fff !important",
      border: "0"
    }
  }

  const getIcon = () => {
    if (icon === "arrow") {
      return (
        <Image
          src={ArrowRight}
          alt="arrow"
          width={20}
          height={20}
          className={lang === "ar" ? "rotate-180" : ""}
        />
      );
    } else if (icon === "cart") {
      return (
        <Image
          src={cart}
          alt="cart"
          width={20}
          height={20}
          className={lang === "ar" ? "rotate-180" : ""}
        />
      );
    }
  };

  return (
    <Button
      endIcon={!iconStart && getIcon()}
      startIcon={iconStart && getIcon()}
      className={`${upperCase ? "uppercase" : "capitalize"} rounded-[30px] gap-[10px `}
      sx={{
        border: `1px solid`,
        borderRadius: "30px", 
        width: width ? width : "auto", 
        padding: padding, 
        fontSize: fontSize, 
        fontWeight: fontWeight,
        ...getButtonStyles()
      }}
        onClick={clickHandler}
        href={href ? href : ""}
        type={type}
        id={id}
    >
      {text}
    </Button>
  );
}
