"use client";

import React, { useState } from "react";
import Container from "../Container/Container";
import NavLinksData from "@/constants/Data/NavLinks";
import Link from "next/link";
import "./NavLinks.scss";
import { Badge, Button, IconButton } from "@mui/material";
import Image from "next/image";

import HeartIcon from "@/assets/icons/heart.svg";
import cartIcon from "@/assets/icons/cart.svg";
import { FavoriteBorder } from "@mui/icons-material";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import CartDropDown from "./CartDropDown";
import { useSelector } from "react-redux";

const NavLinks = ({ lang, t }) => {
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const numOfCartItems = useSelector((state) => state.cart.numOfCartItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const currency_id = useSelector((state) => state.cart.currency_id);
  console.log(numOfCartItems , cartItems);
  const handleCartCount = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="bg-[#20A5D5] h-[106px] flex items-center">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex-1 hidden min-[916px]:flex items-center">
            {NavLinksData.map((item, index) => (
              <Link key={index} href={item.href} className="link-item">
                {lang === "ar" ? item.nameAr : item.nameEn}
              </Link>
            ))}
          </div>
          <div className="flex items-center max-[916px]:flex-1 justify-between">
            <IconButton className="hidden min-[916px]:inline-block">
              <FavoriteBorder sx={{ fontSize: "32px", color: "#fff" }} />
            </IconButton>

            <div className="relative">
              <Badge
                badgeContent={numOfCartItems}
                showZero
                color={cartCount > 0 ? "success" : "error"}
              >
                <Button
                  sx={{ color: "#fff" }}
                  startIcon={
                    <Image src={cartIcon} alt="heart" width={33} height={29} />
                  }
                  //   onClick={handleCartCount}
                  onClick={() => setShowCart((prev) => !prev)}
                >
                  {totalCartPrice + ' ' + currency_id}
                </Button>
              </Badge>

              {showCart && <CartDropDown showCart={showCart} setShowCart={setShowCart} />}
            </div>

            <HiOutlineMenuAlt3 className="block min-[916px]:hidden text-[32px] text-white cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavLinks;
