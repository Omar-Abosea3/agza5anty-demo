"use client"

import Link from 'next/link'
import React from 'react'
import LocaleSwitcher from './LocalSwitcher'
import Container from '../Container/Container'
import Image from 'next/image'
import logoIcon from "@/assets/images/global/nav-logo.svg"
import MainInput from '../inputs/MainInput/MainInput'
import userIcon from "@/assets/icons/user-blue.svg"
import globalIcon from "@/assets/icons/world.svg"
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Cookies from 'js-cookie'
import { setNewUser } from '@/app/GlobalRedaux/Features/User/userDataSlice'
import axios from 'axios'

const Navbar = ({lang, t}) => {
  const pathName = usePathname();
  const router = useRouter();
  const userData = useSelector((state) => state.user.newUser);
  const userProfile = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();

  async function logOut(){
    const refresh_token = Cookies.get('refreshKey');
    const Authorization = Cookies.get('accessKey');
    console.log(Authorization);
    try {
      const {data} = await axios({
        method:'post',
        url:`${process.env.apiBaseUrl}/api/v2/user/logout`,
        headers:{
          Authorization,
          'Content-Type':'application/json',
        },
        data:{
          id:1,
          params: {
            "refresh_token": refresh_token
          },
          method:'post'
        },  
      });
      console.log(data);
      if(data.result.status != "error"){
          console.log('success');
          Cookies.remove('accessKey');
          Cookies.remove('refreshKey'),
          dispatch(setNewUser(null));
          router.push(`/${lang}/auth/login`);
      }
    } catch (error) {
      console.log(error);
    }
  }


  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  
  const handleLocaleChange = (locale) => {
    router.push(redirectedPathName(locale))
    localStorage.setItem('locale', locale)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  return (
    <nav className='py-[15px] shadow'>
      <Container>
        {/* <LocaleSwitcher /> */}
        <div className='flex items-center justify-between gap-[80px]'>
          <Link href={`/${lang}/`} className="relative w-[128px] md:w-[250px] h-[40px] md:h-[90px]">
            <Image src={logoIcon} alt='logo' fill className='object-contain' />
          </Link>

          <div className='flex-1 hidden lg:block'>
            <MainInput
              placeholder={t.nav.search}
              type="search"
            />
          </div>

          <div className='flex items-center gap-[30px]'>
          {console.log(userData)}
            {!userData? <Link href={`/${lang}/auth/login`} className='text-primary flex items-center gap-[7px]'>
              <Image src={userIcon} alt="user" width={16} height={18} />
              <p className='hidden sm:block'>{t.auth.signIn} / {t.auth.signUp}</p>
            </Link>:<Link href={`/${lang}/profile`}  className='link-primary fs-5'>
              <i className="bi bi-person"></i>  {userProfile?.full_name}
            </Link>}
            <button onClick={()=> lang === "ar" ? handleLocaleChange("en") : handleLocaleChange("ar") } className='text-primary flex items-center gap-[7px]'>
              <Image src={globalIcon} alt="change language" width={16} height={18} />
              <p className='hidden sm:block'>{lang === "ar" ? "English" : "العربية"}</p>
            </button>
          </div>

        </div>
      </Container>
    </nav>
  )
}

export default Navbar