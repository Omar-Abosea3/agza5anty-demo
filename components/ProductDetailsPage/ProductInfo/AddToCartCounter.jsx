"use client"

import MainButton from '@/components/Button/MainButton';
import React, { useState } from 'react'
import { FaMinus,FaPlus  } from "react-icons/fa6";


const AddToCartCounter = () => {
  const [count, setCount] = useState(1)

  const countHandler = (type)=>{
    if(type === "add") {
      setCount(prev=> prev + 1)
    }else {
      if(count > 1) {
        setCount(prev=> prev - 1)
      }
    }
  }

  return (
    <div className='mt-[50px] flex items-center gap-[30px]'>
      <div className='rounded-full border border-[#A7A9AC] text-[#575757] flex items-center gap-[40px] w-[152px] p-[15px]'>
        <FaMinus size={20} className='cursor-pointer' onClick={()=> countHandler("minus")}/>
        <p>{count}</p>
        <FaPlus size={20} className='cursor-pointer' onClick={()=> countHandler("add")} />
      </div>
      
      <div className="w-[160px]">
        <MainButton text="add to cart" upperCase padding="12px 20px" fontWeight='700' color="secondary" />
      </div>

    </div>
  )
}

export default AddToCartCounter