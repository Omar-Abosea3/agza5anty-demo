"use client"
import Button from "@/components/Button/Button";
import MainInput from "@/components/inputs/MainInput/MainInput";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import googleIcon from "@/assets/icons/google.svg";
import axios from "axios";
import { useFormik } from "formik";
import $ from 'jquery';
import { redirect, useRouter } from "next/navigation";
import { setUserData } from "@/app/Auth-Logic/setUserData";
import { getUserData, setNewUser } from "@/app/GlobalRedaux/Features/User/userDataSlice";
import { useDispatch } from "react-redux";
import { addToCartLogic } from "@/app/apis";
import { getUserCartData } from "@/app/GlobalRedaux/Features/User/userCartSlice";
const Login = ({t, lang}) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const successRef = useRef(null);
  const userData={
    "login": "",
    "password": "",
    "redirect": "/"
  };

  async function loginFunction(formData){
    console.log($('#errorMsg'));
    $('#loginBtn').html('<i class="fa-solid fa-beat fa-ellipsis"></i>');
    try {
      const {data} = await axios.post(`${process.env.apiBaseUrl}/api/v2/user/login` , {"params": formData} );
      console.log(data);
      if(data.result.status == "error"){
        console.log($('#errorMsg'));
        $('#errorMsg').removeClass('alert-danger')
        console.log($('#errorMsg').slideDown(500));
        $('#loginBtn').html(t.auth.login);
        console.log(data.result.message);
        alert(data.result.message)
        $('#errorMsg').html(data.result.message)
        $('#errorMsg').slideDown(500 , () => {
          setTimeout(() => {
            $('#errorMsg').slideUp(500);
          }, 2000);
        })
      }else{
        $('#loginBtn').html(t.auth.login);
        $('#sucMsg').html(data.result.message);
        const decodedData = setUserData(data.result);
        dispatch(setNewUser(decodedData));
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if(cartItems){
          for (const item of cartItems) {
            await addToCartLogic(item.id , item.quantity);
          }
          dispatch(getUserData());
          dispatch(getUserCartData());
        }
        localStorage.removeItem('cartItems');
        localStorage.removeItem('totalCartPrice');
        $(successRef.current).slideDown(500 , () => {
          setTimeout(() => {
            $(successRef.current).slideUp(500);
            if(localStorage.getItem('redirect')){
              router.push(`/${lang + localStorage.getItem('redirect')}`)
              localStorage.removeItem('redirect');
              return "success";
            }else{
              redirect(`${data.result.redirect}${lang}`);
            }
          }, 3000);
        })
      }
    } catch (error) {
      $('#loginBtn').html(t.auth.login);
      console.log(error);
      $('#errorMsg').fadeIn(500 , () => {
        setTimeout(() => {
          $('#errorMsg').fadeOut(500);
        }, 2000);
      })
    }
  };

  const formik = useFormik({
    initialValues:userData,
    onSubmit: function(values){
      loginFunction(values);
      console.log(values);
    },
    validate:function(values){
      const errors = {};
      const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const phoneNumberValidation = /^01[0125][0-9]{8}$/;
      const passwordValidation = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!phoneNumberValidation.test(values.login)) {
        errors.login = 'this user phone number is incorrect'
      }if (values.password.length<4) {
        // !passwordValidation.test(values.password)
        errors.password = 'password must have at least 8 and include at least 1 lower case charachter and 1 upper case charachter and 1 number and 1 special charachter'
      }
      return errors;
    }
  });

  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  },[]);
  return (
    <div className="h-full">
      <div className="block min-[1120px]:flex min-[1120px]:justify-center items-center max-[1120px]:my-[50px] px-[20px] md:px-[44px] h-full">
        <div className="w-full min-[1120px]:max-w-[380px] flex-1">
          <div className="mb-[14px] space-y-[2px]">
            <p className="text-white min-[1120px]:text-black2 font-bold text-[26px]">{t.auth.helloAgain}</p>
            <p className="text-white min-[1120px]:text-black2 text-[18px]">{t.auth.welcomeBack}</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-[19px]">
            <div style={{display:'none'}}  id="errorMsg" className="alert alert-danger mb-0">invalid data !</div>
            <div style={{display:'none'}} ref={successRef}  id="sucMsg" className="alert alert-success mb-0">success <i className="bi bi-check-circle"></i></div>
            <MainInput onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.login} placeholder={t.auth.emailAddress}  type="email"  id='login'/>
            {formik.errors.login && formik.touched.login ? <div className='alert alert-warning'>{formik.errors.login}</div> : ''}
            <MainInput onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder={t.auth.password}  type="password" id='password'  />
            {formik.errors.password && formik.touched.password ? <div className='alert alert-warning'>{formik.errors.password}</div> : ''}
            <Button text={t.auth.login} color="main" type={'submit'} id={'loginBtn'} />
          </form>

          <div className="flex flex-col-reverse min-[1120px]:flex-col">
            <div className="flex flex-col gap-[11px] text-center mt-[22px] text-black2">
              <Link href={`/${lang}/auth/forgot-password`}>{t.auth.forgotPassword}</Link>
              <Link href={`/auth/signup`}>{t.auth.dontHaveAccount} {t.auth.signUp}</Link>
            </div>

            <div className="bg-white w-full border border-[#090F471A] rounded-[30px] py-[15px] text-center flex items-center justify-center gap-[13px] mt-[20px] cursor-pointer">
              <Image
                src={googleIcon}
                alt="google"
                width={21}
                height={21}
                className="object-contain"
              />
              <p className="text-[#090F47BF] text-[13px] uppercase font-[600]">
                {t.auth.continueWithGmail}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
