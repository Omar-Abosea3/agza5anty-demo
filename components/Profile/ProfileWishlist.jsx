"use client"
import { getUserCartData } from "@/app/GlobalRedaux/Features/User/userCartSlice";
import { getUserWishlistData } from "@/app/GlobalRedaux/Features/User/userWishlistSlice";
import { addToCartLogic, removeFromWishlistLogic } from "@/app/apis";
import product1 from "@/assets/images/cart/product01.svg";
import product2 from "@/assets/images/cart/product02.svg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
export default function ProfileWishlist({t , lang}) {
    const wishlistItems = useSelector(state => state.wishlist.wishlistItems);
    const dispatch = useDispatch();
    async function addToCart(id){
        await addToCartLogic(id);
        dispatch(getUserCartData());
    }

    async function removeWishlistProduct(id){
        await removeFromWishlistLogic(id);
        dispatch(getUserWishlistData());
    }
    
  return (
    <>
      <div className="profileWishlist py-5 ps-5 pe-3">
        <h2 className="mb-4">{t.profile.user_Wishlist}</h2>
        <div className="container-fluid">
            {wishlistItems?<>
                <div className="row mb-2 titleRow text-start ps-3">
                    <div className="col-6">Product</div>
                    <div className="col-2">Price</div>
                    <div className="col-4">Action</div>
                </div>
                {wishlistItems.map(item => <div key={item.id} className="row mb-2 contentRow text-start align-items-center position-relative ps-4">
                <hr className="mb-2" />
                <div className="position-absolute top-0 bottom-0 start-0 d-flex justify-content-start align-items-center"><i style={{cursor:'pointer'}} onClick={() => {removeWishlistProduct(item.id)}} className="bi bi-x-lg"></i></div>
                <div className="col-6">
                    <Image src={item.image?item.image:product1} width={50} height={50}/>
                    <p>{item.name}</p>
                </div>
                <div className="col-2">
                    <p>{item.price + " " + item.currency_id[1]}</p>
                </div>
                <div className="col-4">
                    <button onClick={() => addToCart(item.id)} type="button" className="btn btn-info">Add to cart</button>
                </div>
            </div>)}
            </>:''}
            {/* <div className="row mb-2 contentRow text-start align-items-center position-relative ps-4">
                <hr className="mb-2" />
                <div className="position-absolute top-0 bottom-0 start-0 d-flex justify-content-start align-items-center"><i className="bi bi-x-lg"></i></div>
                <div className="col-6">
                    <Image src={product2} width={50} height={50}/>
                    <p>Vitamin C 500mg Sugarless </p>
                </div>
                <div className="col-2">
                    <p>EG 200</p>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-info">Add to cart</button>
                </div>
            </div>
            <div className="row mb-2 contentRow text-start align-items-center position-relative ps-4">
                <hr className="mb-2" />
                <div className="position-absolute top-0 bottom-0 start-0 d-flex justify-content-start align-items-center"><i className="bi bi-x-lg"></i></div>
                <div className="col-6">
                    <Image src={product1} width={50} height={50}/>
                    <p>Vitamin C 500mg Sugarless </p>
                </div>
                <div className="col-2">
                    <p>EG 200</p>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-info">Add to cart</button>
                </div>
            </div>
            <div className="row mb-2 contentRow text-start align-items-center position-relative ps-4">
                <hr className="mb-2" />
                <div className="position-absolute top-0 bottom-0 start-0 d-flex justify-content-start align-items-center"><i className="bi bi-x-lg"></i></div>
                <div className="col-6">
                    <Image src={product1} width={50} height={50}/>
                    <p>Vitamin C 500mg Sugarless </p>
                </div>
                <div className="col-2">
                    <p>EG 200</p>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-info">Add to cart</button>
                </div>
            </div> */}
        </div>
      </div>
    </>
  );
}
