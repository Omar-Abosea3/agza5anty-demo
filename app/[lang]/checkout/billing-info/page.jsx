import CartWrapper from '@/components/CartPage/CartWrapper/CartWrapper'
import Container from '@/components/Container/Container'
import SpecialOffers from '@/components/SpecialOffers/SpecialOffers'
import { getDictionary } from '@/libs/dictionary';
import React from 'react'

export default async function BillingInfoPage ({params}) {
    const t = await getDictionary(params.lang);
  return (
    <div className='bg-pattern'>
        <Container>
            <div className='page-container'>
                <CartWrapper t={t} pageType="billing-info" lang={params.lang} userAuth={false}  />


                <SpecialOffers />
            </div>
        </Container>
    </div>
  )
}

