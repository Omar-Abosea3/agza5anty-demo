"use client"
import { useState } from "react";
import ProfileAside from "./ProfileAside";
import AccountDetailes from "./AccountDetailes";
import EditProfile from "./EditProfile";
import $ from'jquery';
import ProfileOrders from "./ProfileOrders";
import ProfileWishlist from "./ProfileWishlist";
import './profile.css';
import ProfileAddresses from "./ProfileAddresses";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { getUserData, setNewUser } from "@/app/GlobalRedaux/Features/User/userDataSlice";
import { getUserCartData } from "@/app/GlobalRedaux/Features/User/userCartSlice";
export default function ProfileContentWrapper({t , lang , orders}) {
    const [profileContent, setprofileContent] = useState(<AccountDetailes t={t} lang={lang}/>);
    const router = useRouter();
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
              dispatch(getUserData())
              dispatch(getUserCartData());
              router.push(`/${lang}/auth/login`);
          }
        } catch (error) {
          console.log(error);
        }
      }
    const profileNavigation = (text) => {
        if(text == 'editProfile'){
            $('.profileLinks .d-flex').removeClass('profileActiveLinks');
            $('.profileLinks .d-flex p,i').removeClass('profileActiveLinks');
            setprofileContent(<EditProfile t={t} lang={lang}/>);
        }else if(text == 'accountDetailes'){
            setprofileContent(<AccountDetailes t={t} lang={lang}/>)
        }else if(text == 'ProfileOrders'){
            setprofileContent(<ProfileOrders orders={orders} t={t} lang={lang}/>)
        }else if(text == 'profileWishlist'){
            setprofileContent(<ProfileWishlist t={t} lang={lang}/>)
        }else if(text == 'profileAddress'){
            setprofileContent(<ProfileAddresses t={t} lang={lang}/>)
        }
    }
  return <>
        <div className="shadow-lg profileWrapper d-flex bg-white ps-5 pe-2">
            <ProfileAside t={t} lang={lang} profileNavigation={profileNavigation} logOut={logOut}/>
            {profileContent}
        </div>
  </>
}
