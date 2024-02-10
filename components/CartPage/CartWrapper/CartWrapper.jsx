"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { CartItemsData } from "@/constants/Data/CartData/CartItemsData";
import CartItems from "../CartItems/CartItems";
import Button from "@/components/Button/Button";
import $ from 'jquery';
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from "@mui/material";
import BillingInformationForm from "@/components/CheckoutPage/BillingInformationForm/BillingInformationForm";

import "./CartWrapper.scss";
import { FaCircleCheck } from "react-icons/fa6";
import MainInput from "@/components/inputs/MainInput/MainInput";
import MainButton from "@/components/Button/MainButton";
import Image from "next/image";

import visaImg from "@/assets/images/global/visa.svg"
import mastercardImg from "@/assets/images/global/mastercard.svg"
import { BiSolidCreditCardFront } from "react-icons/bi";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { acceptCartOffer, addNewAddress, cartCheckOut } from "@/app/apis";
import { getUserData } from "@/app/GlobalRedaux/Features/User/userDataSlice";
import { getUserCartData } from "@/app/GlobalRedaux/Features/User/userCartSlice";


const CartWrapper = ({ t, pageType, userAuth = false, actionBtn , lang}) => {
const router = useRouter()
  const [userLoggedIn, setUserLoggedIn] = useState(userAuth);
  const userData = useSelector(state => state.user.userData);
  const [step, setStep] = useState(1);
  const [sameShippingBilling, setSameShippingBilling] = useState(false);
  const [deliveryDays, setDeliveryDays] = useState("5-7");
  const [paymentMethod, setPaymentMethod] = useState("cash"); // ["cash", "card"]
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const currency_id = useSelector((state) => state.cart.currency_id);
  const [offerId, setofferId] = useState(null);
  const [haveAccount, setHaveAccount] = useState(false);
  const [isToCurrentAddress, setIsToCurrentAddress] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [registerState, setregisterState] = useState(`/${lang}/auth/signup`);

  const paymentRef = useRef(null);

  const handleRegister = (registerState) => {
    if(registerState === 'login'){
      setregisterState(`/${lang}/auth/login`);
    }else{
      setregisterState(`/${lang}/auth/signup`);
    }
    localStorage.setItem('redirect' , '/checkout/payment');
  }
  const getPageTitle = () => {
    switch (pageType) {
      case "cart":
        return "Cart";
      case "billing-info":
        return "Checkout";
      case "payment":
        return "Payment";
      case "track-order":
        return "Track-Order"
      default:
        return "Cart";
    }
  };

  const getNextPageLink = () => {
    switch (pageType) {
      case "cart":
        return `/checkout/${userLoggedIn ? "payment" : "billing-info"}`;
      case "billing-info":
        return "/checkout/payment";
      case "checkout":
        return "/checkout/payment";
      case "payment":
        return "/checkout/payment";
      default:
        return `/checkout/${userLoggedIn ? "payment" : "billing-info"}`;
    }
    dispatch(getUserCartData());
  };
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const acceptOffer = async () => {
    const data = await acceptCartOffer(localStorage.getItem('offers'));
    if(data === true){
      // changeStep(4);
      localStorage.removeItem('offers');
      router.push(`/${lang}/shipping`);
    }
  }

  const changeStep = async (step) => {
    setStep(step);
    paymentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }



  const chooseAnAddress =async (step) => {
    console.log(selectedOption);
    if(selectedOption){
      $('#checkOutBtn').html('<i class="fa-solid fa-ellipsis fa-beat-fade"></i>');
      const result = await cartCheckOut(parseInt(selectedOption));
      $('#checkOutBtn').html('Continue');
      if(result){
        changeStep(step);
        cartOffersOpen();
        dispatch(getUserCartData());
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    }else{
      $('#chooseAddressMsg').html('please choose an address');
      $('#chooseAddressMsg').fadeIn(300 , function(){
        setTimeout(() => {
          $('#chooseAddressMsg').fadeOut(300);
        }, 1500);
      });
    }
  }

  const addOffersData = (step) => {
    if(offerId){
      changeStep(step);
    }else{
      alert('choose an offer first')
    }
  }
  const dispatch = useDispatch();

  const addAddress = async () => {
    const address = $('#newAddress').val();
    const name = $('#addressName').val();
    if(address.length < 3){
       $('#AddressMsg').html('enter a valid address data');
       $('#AddressMsg').fadeIn(300 , function(){
        setTimeout(() => {
          $('#AddressMsg').fadeOut(300);
        }, 1500);
       });
       return false;
    }else{
      $('#addAddressButton').html('<i class="fa-solid fa-ellipsis fa-beat-fade"></i>');
      await addNewAddress(name , address);
      $('#addAddressButton').html('Add Address');
      $('#newAddress').val('');
      $('#addressName').val('');
    }
    dispatch(getUserData());
  }
  const  cartOffersOpen = () => {
    if($('#cartOffersToggelarIcon').hasClass('bi-chevron-left') && !localStorage.getItem('offerId')){
        $('.cartFiles').animate({right:'0%'} , 2000);
        $('#cartOffersToggelarIcon').removeClass('bi-chevron-left').addClass('bi-chevron-right')
    }
  }
  const memo = useMemo(()=>{
    if(userData){
      setUserLoggedIn(true);
    }
  },[userData]);

  useEffect(() => {
    if(pageType == 'payment' && localStorage.getItem('offers')){
      setofferId(parseInt(localStorage.getItem('offers')));
      changeStep(2);
    }
  },[])
  const cartTotalComponent = () => {
    return (
      <div className="component-wrapper px-[12px] min-[550px]:px-[50px]">
        <p className="text-[#363636] text-[28px] font-[500] pb-[18px] border-b border-[#E6E6E6]">
          Cart total
        </p>
        <div className="py-[18px] border-b border-[#E6E6E6] flex items-center gap-[70px]">
          <p className="text-[#757575] text-[18px] font-[500] w-[81px]">
            Subtotal:
          </p>
          <p className="text-[#565656] font-[500]">{totalCartPrice + " " +currency_id}</p>
        </div>
        <div className="py-[18px] flex items-center gap-[70px]">
          <p className="text-[#757575] text-[18px] font-[500] w-[81px]">
            Total:
          </p>
          <p className="text-black text-[18px] md:text-[30px] font-[700]">{totalCartPrice + " " +currency_id}</p>
        </div>

        <div className="mt-[65px] flex items-center justify-center">
          <MainButton
            text="Proceed to checkout"
            color="secondary"
            href={getNextPageLink()}
            disabled={pageType === "billing-info"}
            padding="10px 40px"
            upperCase
            fontWeight="700"

          />
        </div>
      </div>
    );
  };

  const shippingStepComponent = () => {
    return <>
      {cartItems?<div className="py-[35px]">
        <div className="mb-[35px]">
          <p className="text-[#585858] text-[20px] font-[500] mb-[20px]">
            Your Addresses
          </p>
          <div className="space-y-[15px]">
            <div id="chooseAddressMsg" style={{display:'none'}} className="alert alert-warning">enter a valid address data</div>
            {userData?.addresses.length ? (
              <>
                {userData.addresses.map((address, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="address"
                      id={`flexRadioDefault1${index}`}
                      onClick={(e)=>{handleRadioChange(e)}}
                      value={address.id}
                    />
                    <label className="form-check-label" htmlFor={`flexRadioDefault1${index}`}>
                      {address.address_url}
                    </label>
                  </div>
                ))}
              </>
            ) : (
              <h3>you don’t have any address you must add at least one address</h3>
            )}
          </div>
        </div>

        <div className="mb-[35px]">
          <p className="text-[#585858] text-[20px] font-[500] mb-[20px]">
            Add New Address
          </p>
          <div className="space-y-[15px]">
            <div id="AddressMsg" style={{display:'none'}} className="alert alert-warning">enter a valid address data</div>
            <input
              className="payment-input w-full"
              placeholder="Flat/House no."
              id="addressName"
            />
            <input className="payment-input w-full" placeholder="Address" id="newAddress"/>
            {/* <div className="grid grid-cols-1 min-[530px]:grid-cols-2 gap-[30px]">
              <input className="payment-input" placeholder="City" />
              <input className="payment-input" placeholder="State" />
            </div>
            <div className="grid grid-cols-1 min-[530px]:grid-cols-2 gap-[30px]">
              <input className="payment-input" placeholder="Postal Code" />
              <input className="payment-input" placeholder="Famous Landmark" />
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-end mt-[30px]">
          <MainButton
            text="Add Address"
            color="secondary"
            padding="10px 44px"
            fontWeight="700"
            upperCase
            id={'addAddressButton'}
            clickHandler={addAddress}
          />
        </div>
        {/* <div className="checkbox-sameAddress">
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#41BCE8",
                  },
                }}
                checked={sameShippingBilling}
                onChange={(e) => setSameShippingBilling(e.target.checked)}
              />
            }
            label="My shipping and Billing address are the same"
          />
        </div> */}

        <div className="flex items-center justify-end mt-[30px]">
          {userData?.addresses.length?<MainButton
            text="Continue"
            color="secondary"
            padding="10px 44px"
            fontWeight="700"
            upperCase
            id={'checkOutBtn'}
            clickHandler={() => chooseAnAddress(2)}
          />:''}
        </div>
      </div>:<div className="p-5">
            <h2>please check your cart offers</h2>
      </div>}
      </>
  };

  const chooseOfferStepComponent = () => {
    return <>
    <div className="py-[35px]">
      <div className="mb-[35px]">
        <div className="space-y-[15px]">
          <div className="mb-3">
            <label htmlFor="anothorMobile">Add Second Number</label>
            <input
              className="payment-input w-full"
              placeholder="Number"
              id="anothorMobile"
            />
          </div>
          <div>
            <label htmlFor="ordernotes">Notes</label>
            <input className="payment-input w-full" placeholder="Add Note" id="ordernotes"/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-[30px]">
        <MainButton
          text="Continue"
          color="secondary"
          padding="10px 44px"
          fontWeight="700"
          upperCase
          id={'addAddressButton'}
          clickHandler={()=>{changeStep(3)}}
        />
      </div>
    </div>
    </>
  }

  const deliveryStepComponent = () => {
    return (
    <div className="py-[35px]">
        <div>
            <p className="text-[#585858] text-[20px] font-[500] mb-[20px]">
                Delivery Options
            </p>
            <div className="">
                <RadioGroup
                    defaultValue="5-7"
                    name="radio-buttons-group"
                    onChange={(e)=> setDeliveryDays(e.target.value)}
                    value={deliveryDays}
                >
                    <div className="flex items-center justify-between">
                        <FormControlLabel value="5-7" control={<Radio sx={{'&.Mui-checked': {color: "#41BCE8"}}} />} label="Standard 5-7 Business Days" />
                        <p className={`${deliveryDays === "5-7" ? "text-primary" : "text-[#6C6C6C]"} text-[15px]`}>FREE</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <FormControlLabel value="2-4" control={<Radio sx={{'&.Mui-checked': {color: "#41BCE8"}}} />} label="2-4 Business Days" />
                        <p className={`${deliveryDays === "2-4" ? "text-primary" : "text-[#6C6C6C]"} text-[15px]`}>EG5</p>
                    </div>
                    <div className="flex items-center justify-between">
                    <FormControlLabel value="0" control={<Radio sx={{'&.Mui-checked': {color: "#41BCE8"}}} />} label="Same day delivery" />
                        <p className={`${deliveryDays === "0" ? "text-primary" : "text-[#6C6C6C]"} text-[15px]`}>+EG 15</p>
                    </div>
                </RadioGroup>
            </div>
        </div>
        <div className="flex items-center justify-between flex-col-reverse min-[430px]:flex-row gap-[20px] mt-[30px]">
            <MainButton text="Back" color="primary" width="100%" padding="10px 0" fontWeight="700" upperCase clickHandler={()=> changeStep(1)} />
            <MainButton text="Continue" color="secondary" width="100%" padding="10px 0" fontWeight="700" upperCase clickHandler={()=> changeStep(3)} />
        </div>
    </div>);
  };

  const paymentStepComponent = () => {
    return (
        <div className="py-[35px]">

            <p className="text-[#585858] text-[20px] font-[500] mb-[20px]">
                Payment Methods
            </p>

            <div className="payment-method">
                <RadioGroup
                        defaultValue="5-7"
                        name="radio-buttons-group"
                        onChange={(e)=> setPaymentMethod(e.target.value)}
                        value={paymentMethod}
                    >
                    <div className="mb-[20px]">
                        <FormControlLabel value="cash" control={<Radio sx={{'&.Mui-checked': {color: "#41BCE8"}}} />} label="Pay on Delivery" />
                        <p className="text-[13px] text-[#585858CC] mt-[-13px] ms-[30px]">Pay with cash on delivery</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <FormControlLabel value="card" control={<Radio sx={{'&.Mui-checked': {color: "#41BCE8"}}} />} label="Credit/Debit Cards" />
                            <p className="text-[12px] min-[400px]:text-[13px] text-[#585858CC] mt-[-13px] ms-[30px]">Pay with your Credit / Debit Card</p>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <Image src={visaImg} alt="visa" width={26} height={26} className="object-contain" />
                            <Image src={mastercardImg} alt="visa" width={26} height={26} className="object-contain" />
                        </div>
                    </div>
                </RadioGroup>
            </div>

            {
                paymentMethod === "card" && (
                    <div className="space-y-[8px] mt-[27px]">
                        <div className=" relative">
                            <input type="text" className="pe-[40px] payment-input w-full" placeholder="Card number" />
                            <BiSolidCreditCardFront size={22} className="payment-icon" color="#C2C2C2" />
                        </div>
                        <div className="grid grid-cols-1 min-[574px]:grid-cols-3 gap-[16px]">
                            <div className="min-[574px]:col-span-2 relative">
                                <input type="text" className="pe-[40px] payment-input w-full" placeholder="MM/YY" />
                                <BsCalendar2EventFill size={18} className="payment-icon" color="#C2C2C2" />
                            </div>
                            <div className="min-[574px]:col-span-1 relative">
                                <input type="text" className="pe-[40px] payment-input w-full" placeholder="CVV" />
                                <MdLock size={18} className="payment-icon" color="#C2C2C2" />
                            </div>
                        </div>
                    </div>
                )
            }

            <div className="flex items-center justify-between flex-col-reverse min-[430px]:flex-row gap-[20px] mt-[30px]">
                <MainButton text="Back" color="primary" width="100%" padding="10px 0" fontWeight="700" upperCase  clickHandler={()=> changeStep(2)} />
                <MainButton text="PAY EG 550" color="secondary" width="100%" padding="10px 0" fontWeight="700" upperCase clickHandler={acceptOffer} />
            </div>
        </div>
    );
  };

  const track_OrderComponent = () => {
    return <>
      <div className="w-100">
            <div className='p-4 bg-white shadow-sm rounded-3 mb-5'>
                <h3 className='mb-5 fw-bold primary'>Fri, 1 Dec 2023</h3>
                <div className='d-flex align-items-center'>
                    <p className='me-2'>In 40 minutes</p>
                    <p>Order #2000279</p>
                </div>
            </div>

            <div className='p-4 bg-white shadow-sm rounded-3 mb-5'>
                <h5 className='mb-5 fw-bold text-black'>Order Status</h5>
                <div>
                    <div style={{marginBottom:'75px'}} className='d-flex align-items-center'>
                        <p className='me-4 '><i className="afterIcon bi bi-check-circle-fill"></i></p>
                        <p className='text-info fs-6 fw-bold'>Order placed</p>
                    </div>
                    <div style={{marginBottom:'75px'}} className='d-flex align-items-center'>
                        <p className='me-4 '><i className="afterIcon bi bi-check-circle-fill"></i></p>
                        <p className='text-info fs-6 fw-bold'>Preparing</p>
                    </div>
                    <div style={{marginBottom:'75px'}} className='d-flex align-items-center'>
                        <p className='me-4 '><i className="afterIcon bi bi-check-circle-fill"></i></p>
                        <p className='text-info fs-6 fw-bold'>On it’s way</p>
                    </div>
                    <div style={{marginBottom:'75px'}} className='d-flex align-items-center'>
                        <p className='me-4'><i style={{color:'#C9C9C9'}} className="bi bi-check-circle-fill"></i></p>
                        <p className='text-info fs-6 fw-bold'>Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  }

  const stepperComponent = () => {
    return (
      <div className="flex items-center justify-between">
        <p className="text-[14px] min-[530px]:text-[18px] font-[500] text-[#20A5D5]">Shipping</p>
        <span className={`check-mark ${step > 1 ? "active" : ""}`}>
          <FaCircleCheck color={`${step > 1 ? "#90C44E" : "#CCCCCC"}`} />
        </span>
        <p
          className={`text-[14px] min-[530px]:text-[18px] font-[500] ${
            step > 1 ? "text-[#20A5D5]" : "text-[#58585899]"
          } `}
        >
          Notes
        </p>
        <span className={`check-mark ${step > 2 ? "active" : ""}`}>
          <FaCircleCheck color={`${step > 2 ? "#90C44E" : "#CCCCCC"}`} />
        </span>
        <p
          className={`text-[14px] min-[530px]:text-[18px] font-[500] ${
            step > 2 ? "text-[#20A5D5]" : "text-[#58585899]"
          } `}
        >
          Payment
        </p>
      </div>
    );
  };

  return (
    <div>
      <SectionTitle title={getPageTitle()} position="start" />

      <div className="grid grid-cols-3 gap-[28px]">
        <div className="col-span-3 lg:col-span-2">
            <CartItems removeAction={pageType !== "cart" && pageType !== "billing-info"} products={CartItemsData} offersId={offerId}/>
          {pageType === "billing-info" && (
            <div className="bg-[#F8F8F8] rounded-[10px] mt-[23px] p-[20px] grid grid-cols-1 min-[750px]:grid-cols-2 gap-[20px] min-[750px]:gap-0 ">
              <div className="text-black">
                <p className="font-[700]">Checkout as a Guest or Register</p>
                <p className="font-[500]">
                  Register with us for future Offers:
                </p>
                <div>
                  <FormControl>
                    <RadioGroup
                      name="job-exp-group"
                      value={haveAccount}
                      onChange={(e) => setHaveAccount(e.target.value)}
                    >
                      <FormControlLabel
                        control={<Radio color="success" size="small"/>}
                        label="you already have account"
                        value="true"
                        onClick={()=>{handleRegister('login')}}
                      />
                      <FormControlLabel
                        control={<Radio color="success" size="small" />}
                        label="Register"
                        value="false"
                        onClick={()=>{handleRegister('signUp')}}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div>
                <p className="font-[700]">Or Register and save time!</p>
                <p>Register with us for future Offers:</p>
                <p>Fast and easy check out</p>
                <p className="mb-3">Easy access to your order history and status</p>
                <MainButton
                text={t.home.Continue}
                color="primary"
                width="350px"
                padding="5px 0px"
                fontSize="18px"
                href={registerState}
                type={'button'}
              />
              </div>
            </div>
          )}
        </div>

        <div className="col-span-3 lg:col-span-1 " ref={paymentRef}>
          {pageType === "cart" || pageType === "billing-info" ? (
            !cartItems?'':cartTotalComponent()
          ) : (
            <div className="px-[20px] component-wrapper">
                {step === 4 || !cartItems? '' : stepperComponent()}
                {step === 4 && track_OrderComponent()}
              {(!cartItems || !cartItems.length ) && offerId? <>
                {step === 2 && chooseOfferStepComponent()}
                {step === 3 && paymentStepComponent()}
              </>:<>
                {step === 1 && shippingStepComponent()}
                {step === 3 && paymentStepComponent()}   
              </>}      
            </div>
          )}
        </div>
      </div>

      {/* {pageType === "cart" && (
        <div className="flex items-center gap-[25px] mt-[80px]">
          <p className="text-black font-[700]">Coupon:</p>
          <input
            className="payment-input rounded-[30px] px-[28px] py-[15px] text-black2 border border-[##EEEEEE] outline-none w-[384px]"
            placeholder="coupon code"
          />
        </div>
      )} */}

      {/* {pageType === "billing-info" && (
        <BillingInformationForm formType="register" t={t} />
      )} */}
    </div>
  );
};

export default CartWrapper;
