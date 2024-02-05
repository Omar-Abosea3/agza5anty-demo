import React from 'react'
import "./Footer.scss"
import Image from 'next/image'
import Link from 'next/link'

import logo from "@/assets/images/global/logo-footer.svg"
import appleStore from "@/assets/images/global/apple-store.svg"
import googlePlay from "@/assets/images/global/google-play.svg"
import chatIcon from "@/assets/images/global/chat.svg"
import uploadBtnIcon from "@/assets/images/global/upload-image.svg"

import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import Container from '../Container/Container'


const Footer = () => {
  return (
    <footer className=''>
            <div className="z-10 relative">
        <Container>
                <div className="flex flex-col min-[1200px]:flex-row gap-[100px] py-[70px]">
                    <div className='max-w-fit min-[1200px]:max-w-[457px]'>
                        <div className='w-[346px] h-[113px] relative'>
                            <Image src={logo} alt='logo' fill className='object-contain' />
                        </div>
                        <p className='text-[#E8E8E8] text-[18px] font-[500]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown </p>

                        <div className="flex items-center flex-col min-[500px]:flex-row gap-[17px] mt-[16px]">
                            <Image src={appleStore} alt='apple store' width={221} height={59} className='object-contain' />
                            <Image src={googlePlay} alt='apple store' width={221} height={59} className='object-contain' />
                        </div>
                    </div>

                    <div className="flex flex-col min-[530px]:flex-row justify-between min-[800px]:justify-center min-[1200px]:justify-start gap-[40px] min-[530px]:gap-[0] min-[800px]:gap-[100px]">
                        <div>
                            <p className='text-[20px] font-[700] mb-[19px]'>PAGES</p>
                            <ul className='space-y-[19px] text-[18px] font-[500]'>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">About Us</Link></li>
                                <li><Link href="/">Delivery Information</Link></li>
                                <li><Link href="/">Exchange and Return</Link></li>
                            </ul>
                        </div>

                        <div>
                            <p className='text-[20px] font-[700] mb-[19px]'>FOLLOW US</p>

                            <div className='flex items-center gap-[25px] mb-[30px]'>
                                <Link href="/"><FaFacebook size={40} /></Link>
                                <Link href="/"><FaInstagram size={40} /></Link>
                                <Link href="/"><FaTwitter size={40} /></Link>
                                <Link href="/"><FaLinkedin size={40} /></Link>
                            </div>

                            <div className='flex gap-[18px] mb-[30px]'>
                                <div className='hidden min-[800px]:flex bg-white rounded-full w-[50px] h-[50px] items-center justify-center'>
                                    <GoMail size={19} color='#41BCE8' />
                                </div>
                                <div className='text-[18px] font-[500]'>
                                    <p>Email</p>
                                    <p className='underline'>info@agzakhanty.com</p>
                                </div>
                            </div>

                            <div className='flex gap-[18px] mb-[30px]'>
                                <div className='hidden min-[800px]:flex bg-white rounded-full w-[50px] h-[50px] items-center justify-center'>
                                    <IoCallOutline  size={19} color='#41BCE8' />
                                </div>
                                <div className='text-[18px] font-[500]'>
                                    <p>Call Us</p>
                                    <p className=''>0105215812155</p>
                                </div>
                            </div>

                            <Link href="/"><Image src={uploadBtnIcon} alt='upload button' width={284} height={54} /></Link>
                        </div>
                    </div>
                    

                    {/* <div className="pt-[60px]">
                        <Image src={chatIcon} alt='chat' width={60} height={60} />
                    </div> */}

                </div>
        </Container>
                <div className="text-center pt-[10px] pb-[23px] border-t">© 2024 all copyrights reserved Agzakhanty</div>
            </div>
    </footer>
  )
}

export default Footer