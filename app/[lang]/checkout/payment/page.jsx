import CartWrapper from '@/components/CartPage/CartWrapper/CartWrapper'
import Container from '@/components/Container/Container'
import SpecialOffers from '@/components/SpecialOffers/SpecialOffers'
import React from 'react'

const PaymentPage = ({params}) => {
  return (
    <div>
        <div className='bg-pattern'>
        <Container>
            <div className='page-container'>
                <CartWrapper pageType="payment" lang={params.lang} userAuth={true}  />
                <SpecialOffers />
            </div>
        </Container>
    </div>
    </div>
  )
}

export default PaymentPage