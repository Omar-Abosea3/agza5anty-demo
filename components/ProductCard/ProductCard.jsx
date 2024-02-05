"use client"
import Image from "next/image";
import StatusTag from "./StatusTag";
import { IconButton, Rating } from "@mui/material";
import $ from 'jquery';
import heartIcon from "@/assets/icons/heart-blue.svg";
import heartIconfilled from "@/assets/icons/red-heart-icon.png";
import searchIcon from "@/assets/icons/search-blue.svg";
import MainButton from "../Button/MainButton";
import Link from "next/link";
import { addToCartLogic, addToWishlistLogic, removeFromWishlistLogic } from "@/app/apis";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartData } from "@/app/GlobalRedaux/Features/User/userCartSlice";
import { getUserWishlistData } from "@/app/GlobalRedaux/Features/User/userWishlistSlice";

export default function ProductCard({
  category,
  title,
  rate,
  oldPrice,
  price,
  status,
  imgSrc,
  salesCard,
  bgTransparent,
  buyNow,
  id,
  quantity,
  product
}) {
  const wishlistItems = useSelector(state => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  async function addtoCart (){
    const data = await addToCartLogic(id , quantity , product);
    if(!data){
      $(`#addedToCartErr${id}`).slideDown(500 , function(){
        setTimeout(() => {
          $(`#addedToCartErr${id}`).slideUp(500);
        }, 2000);
      });
    }else{
      $(`#addedToCartSuc${id}`).slideDown(500 , function(){
        setTimeout(() => {
          $(`#addedToCartSuc${id}`).slideUp(500);
        }, 2000);
      });
    }
    dispatch(getUserCartData());
  }

  const checkIfInWishList = (id) => {
    let result = false;
    wishlistItems?.find(item => {
      if(item.id == id){
        result = true;
      }
    });
    return result;
  }

  async function addToWishlist(id){
    await addToWishlistLogic(id);
    dispatch(getUserWishlistData());
  }
  
  async function removeFromWishlist(){
    await removeFromWishlistLogic(id);
    dispatch(getUserWishlistData());
  }
  return (
    <div className="rounded-[10px] overflow-hidden shadow-card position-relative pb-5">
      <div
        className={`${
          salesCard || bgTransparent ? "bg-transparent" : "bg-[#F6F5FA]"
        } rounded-[10px] relative flex items-center justify-center pt-[30px]`}
      >
        <div
          className={`${
            salesCard ? " w-[204px] h-[270px]" : "w-[270px] h-[270px]"
          } relative`}
        >
          <Image src={imgSrc} alt={title} fill  className="object-contain" />
        </div>
        {status && <StatusTag status={status} />}

        {!salesCard && (
          <div className="flex flex-col gap-[5px] absolute top-[20px] end-[11px]">
            <IconButton sx={{ padding: 0 }}>
              {wishlistItems?<>
                {checkIfInWishList(id)?<Image onClick={() => {removeFromWishlist(id)}} src={heartIconfilled} alt="heart-filled" width={30} height={30} />
                :<Image onClick={() => {addToWishlist(id)}} src={heartIcon} alt="heart" width={35} height={35} />}
              </>:<Image onClick={() => {addToWishlist(id)}} src={heartIcon} alt="heart" width={35} height={35} />}
            </IconButton>
            <IconButton sx={{ padding: 0 }} href="/product/en">
              <Image src={searchIcon} alt="search" width={35} height={35} />
            </IconButton>
          </div>
        )}
      </div>
      <div
        className={`p-[16px] ${
          salesCard ? "flex items-center justify-center flex-col" : ""
        }`}
      >
        <p className="text-[#20A5D5] text-[13px] font-[700] mb-[11px] order-[1]">
          {category}
        </p>
        <Link href={`/product/${id}`} className="block text-black font-[700] text-[15px] mb-[11px] text-ellipsis whitespace-nowrap overflow-hidden order-[2]">
          {title}
        </Link>
        <Rating
          readOnly
          defaultValue={rate}
          className={`${salesCard ? "order-[1] mb-[11px]" : "order-[3]"}`}
        />

        <div className="text-black font-[500] text-[15px] order-[4]">
          {oldPrice ? <span className="line-through">{oldPrice} -</span> : ""}
          <span className={salesCard ? "text-primary" : ""}> {price}</span>
        </div>
        <div className="flex items-center justify-center mt-[12px] order-[5] position-absolute bottom-0 start-0 end-0 pb-2">
          <MainButton 
            text={buyNow ? "Buy Now" :"Add to cart"} 
            icon="cart" 
            iconStart 
            fontSize="15px"  
            fontWeight="500"
            padding="10px 30px"
            clickHandler={addtoCart}
          />
        </div>
      </div>
    </div>
  );
}
