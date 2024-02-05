"use client"
import Image from 'next/image';
import './styles.css';
import { Rating } from '@mui/material';
import defaultImage from '@/assets/images/cartOffers/1.png';
import delivery from '@/assets/icons/delivery.svg';
import location from '@/assets/icons/location.svg';
import MainButton from '../Button/MainButton';
import $ from 'jquery';
import { useEffect, useMemo, useState } from 'react';
import { getCartOffers } from '@/app/apis';
import { useRouter } from 'next/navigation';
export default function CartOffers({lang , t , salesCard}) {
    const [cartOffers , setCartOffers] = useState(null)
    const router = useRouter();
    const  cartOffersToggeler = () => {
        if($('#cartOffersToggelarIcon').hasClass('bi-chevron-left')){
            $('.cartFiles').animate({right:'0%'} , 2000);
            $('#cartOffersToggelarIcon').removeClass('bi-chevron-left').addClass('bi-chevron-right')
        }else{
            $('.cartFiles').animate({right:'-35%'} , 2000);
            $('#cartOffersToggelarIcon').removeClass('bi-chevron-right').addClass('bi-chevron-left')
        }
    }

    async function myCartOffers(){
        setCartOffers(await getCartOffers());
    } 

    const setOffer = (offer) => {
        localStorage.setItem('offers' , offer.id)
        $('.cartFiles').animate({right:'-35%'} , 2000);
        $('#cartOffersToggelarIcon').removeClass('bi-chevron-right').addClass('bi-chevron-left');
        router.push(`/${lang}/checkout/payment`);
    }
    useEffect(()=>{    
        myCartOffers()
        const interval = setInterval(() => {
            // dispatch(getCartOffersData());
            
            myCartOffers();
          }, 2000);
          return () => clearInterval(interval);
    },[]);
  return <>
    <div className="cartFiles shadow-lg position-fixed top-0 bottom-0 bg-light p-2  position-relative">
        <div className='mb-5 pt-2 text-start fs-4'>
            <i style={{cursor:'pointer'}} onClick={cartOffersToggeler} className="bi bi-x-circle"></i>
        </div>

        <div className='cartOffersToggleIcon shadow-lg rounded-3'>
            <i onClick={cartOffersToggeler} id='cartOffersToggelarIcon' className="bi bi-chevron-left"></i>
        </div>

        <div className='cartOffersContent w-100 px-5'>
            {cartOffers?<>
            {console.log(cartOffers)}
                {cartOffers[0].offers.length?cartOffers[0].offers.map((offer , index) => <div key={index} className='cartOffersBox row p-2 rounded-3 pe-0 mb-3 position-relative'>
                <div className='col-8 row'>
                    <figure className='col-6 p-3'>
                        <Image loading='lazy' src={offer.image.url||defaultImage.src} alt='companyPhoto' width={100} height={100}/>
                    </figure>
                    <figcaption className='col-6 px-1 py-3'>
                        <h6 className='mb-3'>{offer.seller_id[1]}</h6>
                        <div className='d-flex align-items-center mb-3'>
                            <Rating
                                readOnly
                                defaultValue={4}
                                className={`${salesCard ? "order-[1] mb-[11px]" : "order-[0] w-50 ratings"}`}
                            />
                            <p className='w-50 ps-1'>(5 review)</p>
                                
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <Image src={delivery} alt='deliveryIcon' width={20} height={20}/>
                            <p className='ps-2'>30 min</p>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <Image src={location} alt='deliveryIcon' width={20} height={20}/>
                            <p className='ps-2'>100 m</p>
                        </div>
                    </figcaption>
                </div>
                <div className='col-4 row py-3 text-center'>
                    <h3>Total:<span> {offer.total_price + " " + offer.currency_id[1]}</span></h3>
                    <div style={{zIndex:'9999999'}} className='d-flex justify-content-end py-3 align-items-center position-absolute bottom-0 end-0'>
                        <div className='px-1'>
                            <MainButton
                                text="Accept"
                                color="secondary"
                                padding="5px 15px"
                                fontWeight="600"
                                upperCase
                                id={'acceptOfferId'}
                                clickHandler={() => {setOffer(offer)}}
                            />
                        </div>
                    </div>
                </div>
                </div>):<div className='vh-100 w-100 d-flex justify-content-center align-content-center'>
                <p>please wait for your cart offers .......</p>    
            </div>}
            </>:<div className='vh-100 w-100 d-flex justify-content-center align-content-center'>
                <p>please wait for your cart offers .......</p>    
            </div>}
        </div>
    </div>
  </>
}
