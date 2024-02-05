"use client"
import Button from "@/components/Button/Button";
import MainButton from "@/components/Button/MainButton";
import MainInput from "@/components/inputs/MainInput/MainInput";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import $ from 'jquery';
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
const SignUp = ({t, lang, pageType, submitHandler}) => {
  const router = useRouter()
  const userData ={
    "first_name":"",
    "last_name":"",
    "mobile": "",
    "email": "",
    "password": "",
    "repassword":"",
    "redirect": "/login",
    "address":"",
    "city":"",
    "governorate":"",
    "health_insurance_no":"",
    "health_insurance_provider":"",
  };
 
 
  async function signUpFunction(formData){
    const bodyData = {
      "first_name": formData.first_name,
      "last_name": formData.last_name,
      "mobile": formData.mobile,
      "email": formData.email,
      "password":formData.password ,
      "repassword": formData.repassword,
      "redirect": formData.redirect,
    };
    const paramsData = {
      "address":formData.address,
      "city":formData.city,
      "governorate":formData.governorate,
      "health_insurance_no":formData.health_insurance_no,
      "health_insurance_provider":formData.health_insurance_provider,
    }
    try {
      const {data} = await axios.post(`${process.env.apiBaseUrl}/api/v2/user/signup`,{"params":bodyData});
      console.log(data);
      if(data.result.status == "error"){
        $('#errorMsg1').html(data.result.message);
        $('#errorMsg1').fadeIn(500 , () => {
          setTimeout(() => {
            $('#errorMsg1').fadeOut(500);
          }, 2000);
        })
      }else{
        $('#sucMsg1').html(data.result.message);
        $('#sucMsg1').fadeIn(500 , () => {
          setTimeout(() => {
            $('#sucMsg1').fadeOut(500);
            router.push(`/${lang}/auth${data.result.redirect}`)
          }, 2000);
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  const myFormik = useFormik({
    initialValues:userData,
    onSubmit:function(values){
      signUpFunction(values);
      console.log(values);
    },
 
    validate:function(values){
      const errors = {};
      const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const phoneNumberValidation = /^01[0125][0-9]{8}$/;
      const passwordValidation = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(values.first_name.length < 3 || values.first_name.length > 20){
        errors.first_name = 'first_name must be greater than 3 charachters and less than 20 charachters';
      }if(values.last_name.length < 3 || values.last_name.length > 20){
        errors.last_name = 'last_name must be greater than 3 charachters and less than 20 charachters';
      }if (!emailValidation.test(values.email)) {
        errors.email = 'this email is incorrect'
      }if (!phoneNumberValidation.test(values.mobile)) {
        errors.mobile = 'this mobile number is incorrect number'
      }if (!passwordValidation.test(values.password)) {
        errors.password = 'password must have at least 8 and include at least 1 lower case charachter and 1 upper case charachter and 1 number and 1 special charachter'
      }if(values.password != values.repassword) {
        errors.repassword = 'password and repassword must be matched';
      }if(values.address.length < 10 || values.address.length > 100){
        errors.address = 'enter a suitable data for address'
      }if(values.city.length < 2 || values.city.length > 25){
        errors.city = 'enter a suitable data for city '
      }if(values.governorate.length < 2 || values.governorate.length > 25){
        errors.governorate = 'enter a suitable data for governorate '
      }
      return errors;
    }
  })
  return (
    <div className="h-full">
      <div className="flex justify-start min-[650px]:justify-center items-center my-[50px] px-[20px] min-[600px]:px-[44px]">
        <div className="w-auto min-[650px]:min-w-[380px] flex-1">
          {pageType !== "checkout" && (
            <div className="mb-[40px] space-y-[2px]">
              <p className="text-white min-[1120px]:text-black2 font-bold text-[26px]">
                {t.auth.hello}
              </p>
              <p className="text-white min-[1120px]:text-black2 text-[18px]">
                {t.auth.signUp} {t.auth.toStarted}
              </p>
            </div>
          )}

          <form className="space-y-[19px]" onSubmit={myFormik.handleSubmit}>
            <div
              style={{ display: "none" }}
              id="errorMsg1"
              className="alert alert-danger mb-0"
            >
              invalid data !
            </div>
            <div
              style={{ display: "none" }}
              id="sucMsg1"
              className="alert alert-success mb-0"
            >
              success <i className="bi bi-check-circle"></i>
            </div>
            <div className="flex min-[650px]:items-center gap-[24px] flex-col min-[650px]:flex-row">
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.first_name}
                  placeholder={`${t.auth.firstName}*`}
                  type="user"
                  name="firstName"
                  id="first_name"
                />
                {myFormik.errors.first_name && myFormik.touched.first_name ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.first_name}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.last_name}
                  placeholder={`${t.auth.lastName}*`}
                  type="user"
                  name="lastName"
                  id="last_name"
                />
                {myFormik.errors.last_name && myFormik.touched.last_name ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.last_name}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex min-[650px]:items-center gap-[24px] flex-col min-[650px]:flex-row">
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.mobile}
                  placeholder={`${t.auth.mobileNumber}*`}
                  type="phone"
                  name="phone"
                  id="mobile"
                />
                {myFormik.errors.mobile && myFormik.touched.mobile ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.mobile}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.email}
                  placeholder={t.auth.emailAddress}
                  type="email"
                  name="email"
                  id="email"
                />
                {myFormik.errors.email && myFormik.touched.email ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.email}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex min-[650px]:items-center gap-[24px] flex-col min-[650px]:flex-row">
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.governorate}
                  placeholder={`${t.auth.governorate}*`}
                  type="map"
                  name="governorate"
                  id="governorate"
                />
                {myFormik.errors.governorate && myFormik.touched.governorate ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.governorate}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.city}
                  placeholder={`${t.auth.city}*`}
                  type="map"
                  name="City"
                  id="city"
                />
                {myFormik.errors.city && myFormik.touched.city ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.city}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div>
              <MainInput
                onChange={myFormik.handleChange}
                onBlur={myFormik.handleBlur}
                value={myFormik.values.address}
                placeholder={`${t.auth.locationWriting}*`}
                type="map"
                name="location"
                id="address"
              />
              {myFormik.errors.address && myFormik.touched.address ? (
                <div className="alert alert-warning">
                  {myFormik.errors.address}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex min-[650px]:items-center gap-[24px] flex-col min-[650px]:flex-row">
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.health_insurance_no}
                  placeholder={t.auth.insurance}
                  type="card"
                  name="insurance"
                  id="health_insurance_no"
                />
                {/* {myFormik.errors.health_insurance_no  && myFormik.values.health_insurance_no? <div className='alert alert-warning'>{myFormik.errors.health_insurance_no}</div> : ''} */}
              </div>
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.health_insurance_provider}
                  placeholder={t.auth.cardNumber}
                  type="card"
                  name="card"
                  id="health_insurance_provider"
                />
                {/* {myFormik.errors.health_insurance_provider && myFormik.values.health_insurance_provider? <div className='alert alert-warning'>{myFormik.errors.health_insurance_provider}</div> : ''} */}
              </div>
            </div>

            <div className="flex min-[650px]:items-center gap-[24px] flex-col min-[650px]:flex-row">
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.password}
                  placeholder={`${t.auth.createPassword}*`}
                  type="password"
                  name="password"
                  id="password"
                />
                {myFormik.errors.password && myFormik.touched.password ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.password}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <MainInput
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  value={myFormik.values.repassword}
                  placeholder={`${t.auth.confirmPassword}*`}
                  type="password"
                  name="confirmPassword"
                  id="repassword"
                />
                {myFormik.errors.repassword && myFormik.touched.repassword ? (
                  <div className="alert alert-warning">
                    {myFormik.errors.repassword}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="flex items-center justify-center">
              {/* <Button text={pageType === "checkout" ? "Continue" : t.auth.register} color="main" width="350px" onClickHandler={submitHandler} /> */}
              <MainButton
                text={pageType === "checkout" ? "Continue" : t.auth.register}
                color="primary"
                width="350px"
                onClickHandler={submitHandler}
                padding="15px 0"
                fontSize="18px"
                href={pageType === "checkout" ? "/checkout/payment" : ""}
                type={'submit'}
              />
            </div>
          </form>

          {pageType !== "checkout" && (
            <div className="flex flex-col gap-[11px] text-center mt-[22px] text-black2">
              <Link href={`/${lang}/auth/login`}>
                {t.auth.alreadyHaveAccount}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp