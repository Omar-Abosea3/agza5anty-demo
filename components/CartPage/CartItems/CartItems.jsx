"use client"
import React, { useEffect, useMemo, useState } from 'react'
import CartItem from './CartItem/CartItem'
import { CartItemsData } from "@/constants/Data/CartData/CartItemsData";
import { useDispatch, useSelector } from 'react-redux';
import defaultImage from '../../../assets/images/cart/product01.svg'
import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserCartData } from '@/app/GlobalRedaux/Features/User/userCartSlice';
const CartItems = ({products= CartItemsData, removeAction , offersId}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const currency_id = useSelector((state) => state.cart.currency_id);
  const [CartOfferData, setCartOfferData] = useState(null);
  const dispatch = useDispatch();
  // const [offerId, setofferId] = useState(null)
  const cartOffer = async () => {
    const offersId = localStorage.getItem('offers');
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
  
  // const memo = useMemo(()=>{
  //   if(!cartItems || !cartItems?.lenght){
  //     dispatch(getUserCartData());
  //   }
  // },[cartItems])
  return (
    <div className='space-y-[23px]'>
      {
        cartItems?cartItems.map((item)=>(
          <CartItem
            key={item.product?item.product[0]:item.id}
            id={item.product?item.product[0]:item.id}
            imgSrc={item.image.url || defaultImage.src}
            title={item.product?item.product[1]:item.name}
            quantity={item.quantity}
            price={item.list_price?item.list_price:item.price}
            totalPrice={item.list_price?item.list_price * item.quantity:item.price * item.quantity}
            removeAction={removeAction}
            currency_id={currency_id}
          />
        )):offersId && CartOfferData?CartOfferData.lines.map(item => 
          <CartItem
            key={item.product_id}
            id={item.product_id}
            imgSrc={item.image.url || defaultImage.src}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.price * item.quantity}
            removeAction={removeAction}
            currency_id={CartOfferData.currency_id[1]}
          />):<div className='p-5 d-flex justify-content-center align-items-center'>
          <h2 className='my-5'>your cart is empty please check your checkout offers or add a new cart</h2>
        </div>
      }
      
    </div>
  )
}

export default CartItems