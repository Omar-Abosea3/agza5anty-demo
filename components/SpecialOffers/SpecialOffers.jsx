import React from 'react'
import img1 from "@/assets/images/offers/image1.png"
import img2 from "@/assets/images/offers/image2.png"
import SectionTitle from '../SectionTitle/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'

const SpecialOffers = ({viewAllLink = "/" , homeOffers}) => {
  return (
    <div className='mt-[68px] pb-[40px] relative'>
        <div className='absolute top-[10px] end-0'>
            <Link href={viewAllLink} className='text-black3 text-[20px] font-[500]'>View All</Link>
        </div>
        <SectionTitle title="Special offers" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[47px]">
            {homeOffers?.result.data?.map(offer => <>
                <div key={offer.id} className='relative w-full h-[267px] rounded-[10px] overflow-hidden shadow-sm'>
                    <Link href={`/offers/${offer.id}`}>
                        <Image src={offer.image.url} alt='offer' fill className='min-[630px]:object-cover' />
                    </Link>
                </div>
            </>)}
            <div className='relative w-full h-[267px] rounded-[10px] overflow-hidden shadow-sm'>
                <Image src={img2} alt='offer' fill className='min-[630px]:object-cover' />
            </div>
        </div>
    </div>
  )
}

export default SpecialOffers