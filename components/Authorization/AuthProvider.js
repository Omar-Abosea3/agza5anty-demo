"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getUserData, setNewUser } from '@/app/GlobalRedaux/Features/User/userDataSlice';
import { getUserCartData } from '@/app/GlobalRedaux/Features/User/userCartSlice';
import { getUserWishlistData } from '@/app/GlobalRedaux/Features/User/userWishlistSlice';
export default function GlobalAuth({children , Authorization , refresh }) {
    const curUser = useSelector((state) => state.user.newUser);
    const numOfCartItems = useSelector((state) => state.cart.numOfCartItems);
    const [UserData, setUserData] = useState(null);
    const [expirationDate, setexpirationDate] = useState(null);
    const dispatch = useDispatch();
    const router = useRouter();
    
    async function getData(){
      console.log(Authorization)
      let decodedData = jwtDecode(Authorization);
      console.log(decodedData , new Date(decodedData.exp))
      console.log(Date.now() >= new Date(decodedData.exp))
      if(Date.now() <= new Date(decodedData.exp)){
        try {
          const refresh = Cookies.get('refreshKey');
          // console.log(refresh)
          const {data} = await axios.post(`${process.env.apiBaseUrl}/api/v2/user/token/refresh`,{
            params:{
                refresh_token:refresh,
            },
          });
          console.log(data);
      
          Cookies.set('accessKey' , data.result.access_token);
          decodedData = jwtDecode(data.result.access_token);
          router.refresh();

        } catch (error) {
          console.log(error);
        }
      }
      setexpirationDate(decodedData.exp)
      dispatch(setNewUser(decodedData));
    //   const isAdmin = checkIsAdmin();
    //   dispatch(setUserRole(isAdmin));
      setUserData(decodedData);
    }



    // const checkValidToken = ()=> {
    //   if(expirationDate){
    //     console.log(expirationDate)
    //     if(new Date(expirationDate) >= Date.now()){
    //       router.refresh();
    //     }
    //   }
    // }
    
    useEffect(() => {
      if(Authorization && !curUser ){
        getData();
      } 
      dispatch(getUserCartData());
      dispatch(getUserData());
      dispatch(getUserWishlistData());
    },[]);
    
    // useEffect(() => {
    //  const intervalId = setInterval(checkValidToken,3000)  
    //   return () => clearInterval(intervalId);
    // },[]);
  return <>
        {children}
  </>
}