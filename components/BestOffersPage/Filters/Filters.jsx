"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { ProductCategories } from "@/constants/Data/BestSalesData/ProductCategories";
import { Checkbox } from "@mui/material";
import searchIcon from "@/assets/icons/search-white.svg"
import { Range } from 'react-range';
import { ProductSizesData } from '@/constants/Data/BestSalesData/ProductSizesData';
import { ProductBrandsData } from '@/constants/Data/BestSalesData/ProductBrandsData';
import CheckedFilters from './CheckedFilters';
const Filters = () => {
    const [values, setValues] = useState([0, 100]);
    const [selectedCategories, setSelectedCategories] = useState([]);


  return (
    <div className="border border-[#DDDDDD] rounded-[10px] p-[13px]">

        <div className="relative border border-[#DEDEDE] rounded-[30px] px-[14px] flex justify-between items-center h-[45px] mb-[15px]">
            <div className="max-w-[210px] overflow-hidden">
                <input className="outline-none" placeholder="Search products…" />
            </div>

            <div className="bg-primary rounded-full min-w-[35px] h-[35px] flex items-center justify-center absolute end-[8px]">
                <div className="w-[20px] h-[20px] relative">
                    <Image src={searchIcon} alt="search" fill className="object-cover" />
                </div>
            </div>

        </div>

        <CheckedFilters 
            title="Product categories" 
            filtersData ={ProductCategories} 
            selectedCategories={selectedCategories} 
            setSelectedCategories={setSelectedCategories}  
        />

        <div className="mb-[20px]">
            <p className="font-[700] pb-[12px] border-b">
                Filter by price
            </p>
        </div>

        <div className="mb-[20px]">
            <Range
                step={1}
                min={0}
                max={100}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                    ...props.style,
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#41BCE8'
                    }}
                >
                    {children}
                </div>
                )}
                renderThumb={({ props }) => (
                <div
                    {...props}
                    style={{
                    ...props.style,
                    height: '12px',
                    width: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#41BCE8'
                    }}
                />
                )}
            />

            <div className='flex items-center gap-[8px] mt-[15px]'>
                <p className='font-[500]'>Price: </p>
                <span className='text-primary font-[500]'>EG{values[0]}</span>
                <span className='text-primary font-[500]'> - </span>
                <span className='text-primary font-[500]'>EG{values[1]}</span>
            </div>
        </div>

        <div className="mb-[20px]">
            <p className="font-[700] pb-[12px] border-b">
                Filter by size
            </p>
        </div>

        <div className="mb-[20px]">
            <div className="flex items-center gap-[9px] flex-wrap">
                {
                    ProductSizesData.map((item, index) => (
                        <div key={index} className='bg-[#E3E3E3] px-[15px] py-[4px] rounded-full'>
                            <p className='text-[14px] font-[500] text-black2'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        <CheckedFilters
            title="Product Brands"
            filtersData={ProductBrandsData}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
        />

    </div>
  )
}

export default Filters