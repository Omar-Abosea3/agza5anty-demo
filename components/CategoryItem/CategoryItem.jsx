import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryItem = ({imgSrc, text, alt , id , lang }) => {
  return (
    <Link href={`/${lang}/category/${id}`} className='text-decoration-none'>
      <div className='flex flex-col items-center gap-[19px]'>
        <div className='w-[160px] h-[160px] relative rounded-full shadow-sm'>
            <Image src={imgSrc} alt={alt} fill className='object-cover' />
        </div>
        <p className='text-black3 font-[700] text-[18px] text-center'>{text}</p>
      </div>
    </Link>
  )
}

export default CategoryItem