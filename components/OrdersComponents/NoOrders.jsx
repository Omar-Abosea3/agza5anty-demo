"use client"
import Image from "next/image";
import emptyOrders from '@/assets/images/ordersPage/emptyOrders.svg';
import MainButton from "../Button/MainButton";

export default function NoOrders({title, message , t , lang}) {
  return <>
    <div id="NoOrders" className="row flex-row-reverse justify-content-end align-items-center">
        <div className="col-lg-4 col-12 align-self-center">
            <figure className="px-1">
                <Image src={emptyOrders} alt="emptyOrders" width={500} height={500} />
            </figure>
        </div>
        <div className="col-lg-8 col-12">
            <div className="px-1">
                <h2 className="mb-5">{title}</h2>
                <p className="mb-5">{message}</p>
                <MainButton
                    text={t.errors.homePageButton}
                    color="secondary"
                    padding="10px 44px"
                    fontWeight="700"
                    upperCase
                    href={'/'}
                />
            </div>
        </div>
    </div>
  
  </>
}
