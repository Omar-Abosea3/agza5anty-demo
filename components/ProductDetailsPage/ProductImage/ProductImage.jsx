"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const ProductImage = ({productData}) => {


  return (
    <div className='w-full'>
        <div className='w-full border border-[#D9D9D9] rounded-[7px] relative h-[600px] mb-[23px]'>
            <Image src={productData.image} alt={productData.name} fill className='object-contain' />
        </div>

        <div className='flex items-center gap-[22px]'>
            {
                !productData.images.length?'':productData.images.map((image, index) => (
                    <div key={index} className='w-[213px] h-[138px] relative rounded-[7px] overflow-hidden cursor-pointer' onClick={() => setCurrectImage(image)}>
                        <Image src={image} alt={productData.name} fill className='object-contain' />
                    </div>
                ))
            }
            {/* <div className='w-[213px] h-[138px] relative border border-[#D9D9D9] rounded-[7px] overflow-hidden'>
                <Image src={productData?.images[0]} alt={productData.name} fill className='object-contain' />
            </div> */}
        </div>
    </div>
  )
}

export default ProductImage