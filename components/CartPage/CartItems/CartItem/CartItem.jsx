"use client"

import { getUserCartData } from '@/app/GlobalRedaux/Features/User/userCartSlice'
import { decrementCartItemsLogic, increamentCartItemsLogic, removeCartItemsLogic } from '@/app/apis'
import AddToCartCounter from '@/components/ProductDetailsPage/ProductInfo/AddToCartCounter'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const CartItem = ({imgSrc, title, quantity, price, removeAction , id}) => {
    const [count, setCount] = useState(quantity)
    const dispatch = useDispatch();
  const countHandler = async (type , id)=>{
    if(type === "add") {
      await increamentCartItemsLogic(id);
      setCount(prev=> prev + 1)
    }else {
      await decrementCartItemsLogic(id);
      if(count > 1) {
        setCount(prev=> prev - 1)
      }
    }
    dispatch(getUserCartData());
  }
  const removeCartItem = async (id) => {
    await removeCartItemsLogic(id);
     dispatch(getUserCartData());
   }
  return (
    <div className='bg-[#F8F8F8] py-[30px] px-[15px] flex items-center gap-[30px] rounded-[10px]'>
      {
        <i onClick={() => {removeCartItem(id)}} style={{cursor:'pointer'}} title="remove cart item" className="fa fa-xmark"></i>
      }
        
        <div className="relative w-[56px] lg:w-[86px] h-[61px] lg:h-[99px]">
          <Image src={imgSrc} alt={title} fill className='object-contain w-full h-full' />
        </div>
        <div className="flex-1">
          <p className='text-black font-[700] text-[12px] xl:text-[15px] '>{title}</p>

          {!removeAction && (
            <p className='inline-block xl:hidden text-primary text-[14px] md:text-[18px] font-[700]'>EG {price}</p>
          )}
        </div>

        <div className='flex items-center gap-[15px]'>
            <p className='hidden xl:inline-block text-primary text-[14px] md:text-[18px] font-[700]'>EG {price}</p>
            {
              !removeAction && (
                <div className='rounded-full border border-[#A7A9AC] text-[#575757] flex items-center justify-center gap-[20px] md:gap-[40px] w-[93px] md:w-[134px] p-[5px] md:p-[13px]'>
                    <FaMinus  className='text-[14px] md:text-[20px] cursor-pointer' onClick={()=> countHandler("minus" , id)}/>
                    <p>{quantity}</p>
                    <FaPlus className='text-[14px] md:text-[20px] cursor-pointer' onClick={()=> countHandler("add" , id)} />
                </div>
              )
            }
            
            {
              !removeAction ? (
                <p className='hidden xl:inline-block text-secondary text-[14px] md:text-[18px] font-[700]'>EG {price*count}</p>
              ): (
                <p className='text-secondary text-[14px] md:text-[18px] font-[700]'>x {quantity}</p>
              )
            }
        </div>
    </div>
  )
}

export default CartItem