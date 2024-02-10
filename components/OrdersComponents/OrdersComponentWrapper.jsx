"use client"
import Container from "../Container/Container";
import './style.css';
import OrdersNavigation from "./ordersNavigation";
import ActiveOrders from "./ActiveOrders";
import { useEffect, useState } from "react";
import AllOrders from "./AllOrders";
import $ from'jquery';
export default function OrdersComponentWrapper({t, lang}) {
    const [Content, setContent] = useState(<ActiveOrders t={t} lang={lang}/>);

    const orderNavigation = (orderType) => {
        if(orderType === 'active'){
            setContent(<ActiveOrders t={t} lang={lang}/>);
            $('#activeOrderBtn').addClass('currentOrderLink');
            $('#allOrderBtn').removeClass('currentOrderLink');
        }else if(orderType === 'all'){
            setContent(<AllOrders t={t} lang={lang}/>);
            $('#activeOrderBtn').removeClass('currentOrderLink');
            $('#allOrderBtn').addClass('currentOrderLink');
        }
    }

  return <>
        <Container>
            <section id="OrdersPage" className="bg-white">
                <div className="py-4 px-5">
                    <div className="mb-5 ordersTitle">
                        <h2 className="start-0">{t.orders.myOrders}</h2>
                    </div>

                   <div className="mb-5">
                        <OrdersNavigation orderNavigation={orderNavigation} t={t} lang={lang}/>
                   </div>

                   <div className="pb-5 px-5 orders">
                       {Content}
                   </div>
                </div>
            </section>
        </Container>
  </>
}
