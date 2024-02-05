"use client"
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem/CartItem'
import { CartItemsData } from "@/constants/Data/CartData/CartItemsData";
import defaultImage from '../../../assets/images/cart/product01.svg'
import axios from 'axios';
import Cookies from 'js-cookie';
const CartItemsOffers = ({offersId , changeStep , pageType}) => {
  const [CartOfferData, setCartOfferData] = useState(null);
  const cartOffer = async () => {
    try {
      const Authorization = Cookies.get('accessKey');
      console.log(Authorization);
      const {data} = await axios({
          method:'get',
          url:`${process.env.apiBaseUrl}/api/v2/customer/offer/${offersId}`,
          headers:{
              Authorization,
              'Content-Type':'application/json',
          },
          data:{
              id:1,
              method:'get',
              params:{}
          }
      });
      console.log('success');
      console.log(data);
      if(pageType == 'payment'){
        changeStep(2);
      }else{
        changeStep(4);
      }
      setCartOfferData(data.result.data);
  } catch (error) {
      console.log(error);
      console.log('error');
      return false;
  }
  }

  useEffect(()=>{
    cartOffer();
  },[])
  return (
    <div className='space-y-[23px]'>
      {
        CartOfferData?.lines.map((item)=>(
          <CartItem
            key={item.product_id}
            id={item.product_id}
            imgSrc={item.image.url || defaultImage.src}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.price * item.quantity}
            // removeAction={removeAction}
            currency_id={CartOfferData.currency_id[1]}
          />
        ))
      }
      {!CartOfferData ?<div className='p-5 d-flex justify-content-center align-items-center'>
        <h2 className='my-5'>your cart is empty please check your checkout offers or add a new cart</h2>
      </div>:''}
    </div>
  )
}

export default CartItemsOffers;