import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ShippingInfo from '@/components/ShippingPage/ShippingInfo/ShippingInfo'
import SpecialOffers from '@/components/SpecialOffers/SpecialOffers'
import React from 'react'

function ShippingPage() {
  return (
    <div className='bg-pattern'>
        <Container>
            <div className='page-container'>
                <SectionTitle title="Shipping" position='start' />
                <ShippingInfo />
                <SpecialOffers />
            </div>
        </Container>
    </div>
  )
}

export default ShippingPage