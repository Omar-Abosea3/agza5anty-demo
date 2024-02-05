import React from 'react'
import "./HeroSection.scss"
import Container from '../Container/Container'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = ({title, img}) => {
  return (
    <div className='bg-header  h-fit min-[880px]:h-[400px]'>
        <Container>
            <div className='grid grid-cols-1 min-[880px]:grid-cols-2 h-[500px] min-[880px]:h-[400px] py-[15px]'>
                <div className='flex flex-col justify-center'>
                    <p className='text-white font-[700] text-[50px] min-[500px]:text-[75px] min-[1150px]:text-[90px]'>{title}</p>
                    <div>
                        <div className='text-white font-[500] text-[20px] flex items-center gap-1 text-start'>
                            <Link href="/">Home</Link> / 
                            <p>{title}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='relative w-[full] h-[250px] min-[650px]:h-[300px] min-[880px]:h-[360px]'>
                        <Image src={img} alt='Hero section' fill className='object-contain' />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeroSection