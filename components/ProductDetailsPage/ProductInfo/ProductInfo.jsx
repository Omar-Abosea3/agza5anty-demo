import { Rating } from '@mui/material'
import React from 'react'
import AddToCartCounter from './AddToCartCounter'

const ProductInfo = ({productData}) => {
  return (
    <div>
        <div className='border-b border-[#A7A9AC] pb-[14px]'>
            <p className='text-[#575757] text-[30px] font-[700]'>{productData.name}</p>
            <div className='flex items-center gap-[7px]'>
                <Rating defaultValue={productData.rating_avg} readOnly />
                <p className='text-[#575757] text-[12px]'>(5 customer review)</p>
            </div>
        </div>
        
        <div className='py-[14px]'>
            <p className='font-[500] text-[35px] mb-[10px]'> {productData.price + " " + productData.currency_id[1]}</p>
            {productData.description?<p className='text-[#8D8D8D] leading-[24px]'>{productData.description}</p>:''}
        </div>

        <div>
            <AddToCartCounter />

            <div className='mt-[30px] text-[#8D8D8D] space-y-[15px]'>
                <p><span className='font-[700]'>SKU: </span><span>{productData.name}</span></p>
                <p><span className='font-[700]'>Category: </span><span>{productData.category[1]}</span></p>
                <p><span className='font-[700]'>Tag: </span><span>{productData.name}</span></p>
            </div>
        </div>
    </div>
  )
}

export default ProductInfo