"use client"

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import product1 from "@/assets/images/cart/product01.svg";
import product2 from "@/assets/images/cart/product02.svg";
import MainButton from "../Button/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartData } from "@/app/GlobalRedaux/Features/User/userCartSlice";
import { removeCartItemsLogic } from "@/app/apis";

const CartDropDown = ({showCart,setShowCart}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const currency_id = useSelector((state) => state.cart.currency_id);
  const dispatch = useDispatch();
    const cartRef = useRef(null);
    const removeCartItem = async (id) => {
       await removeCartItemsLogic(id);
        dispatch(getUserCartData());
      }
    useEffect(()=>{
        const handleClickOutside = (e) => {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
              setShowCart(false);
            }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
    },[setShowCart])



  return (
    <div className="absolute top-[74px] end-0 z-20 bg-white py-[25px]  rounded-[7px] shadow h-fit max-[916px]:right-0 max-[916px]:left-0 w-max min-[412px]:w-[384px]" ref={cartRef}>
      <div className="text-[#7E889D] flex items-center justify-end gap-[5px] px-[21px] pb-[12px] border-b">
        <p className="text-[18px]">Subtotal:</p>
        <p className="text-[24px]">{currency_id + " "} {totalCartPrice}</p>
      </div>

      <div className="">
        {cartItems?.map(item => <div key={item.id} className="px-[15px] py-[24px] border-b">
          <div className="flex items-center">
            <div className="flex-1 flex gap-[14px]">
              <Image
                src={item.image.url||product1}
                alt="product"
                width={42}
                height={57}
                className="object-contain"
              />
              <div>
                <p className="text-[14px] font-[700]">
                  {item.name?item.name:item.product[1]}{" "}
                </p>
                <p className="text-primary text-[14px] font-[500]">{currency_id + ' ' + item.price +  " * " + item.quantity}</p>
              </div>
            </div>
            {/* <FaTimes /> */}
            {localStorage.getItem('cartItems')?<i onClick={() => {removeCartItem(item.id )}} style={{cursor:'pointer'}} title="remove cart item" className="fa fa-xmark"></i>:<i onClick={() => {removeCartItem(item.product[0])}} style={{cursor:'pointer'}} title="remove cart item" className="fa fa-xmark"></i>}
          </div>
        </div>)}
      </div>

      {!cartItems || !cartItems.length?'':<div className="flex justify-center items-center gap-[10px] px-[25px] mt-[25px]">
        {/* <MainButton text="VIEW CART" color="second" link="/cart" />
        <MainButton text="CHECKOUT" color="error" link="/product/2" /> */}
        <MainButton 
          text="VIEW CART" 
          color="secondary" 
          fontSize="14px" 
          padding="12px 25px" 
          fontWeight="700" 
          upperCase 
          href="/cart"  
          clickHandler={()=> setShowCart(false)}
        />

        <MainButton 
          text="CHECKOUT" 
          color="error" 
          fontSize="14px" 
          padding="12px 25px" 
          fontWeight="700" 
          upperCase  
          href="/checkout/payment"
          clickHandler={()=> {localStorage.removeItem('offers'); setShowCart(false)}}
        />
      </div>}
    </div>
  );
};

export default CartDropDown;
