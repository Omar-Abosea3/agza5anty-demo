"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import NavLinks from "@/components/NavLinks/NavLinks";
import $ from 'jquery';
import Footer from "@/components/Footer/Footer";
import CartOffers from "@/components/CartOffers/CartOffers";


const MainLayout = ({ children, lang, t}) => {
  const pathname = usePathname();

  useEffect(()=>{
    if(!pathname.includes('payment')){
      localStorage.removeItem('offers');
    }
  },[])

  return (
    <>
      {!pathname.includes("auth") && (
        <>
          <CartOffers lang={lang} t={t} salesCard={null}/>
          <Navbar lang={lang} t={t} />
          <NavLinks lang={lang} t={t} />
        </>
      )}
      {children}
      {!pathname.includes("auth") && (
       <Footer />
      )}
    </>
  );
};

export default MainLayout;
