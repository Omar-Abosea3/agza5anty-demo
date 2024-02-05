import Container from '@/components/Container/Container';
import BestSales from '@/components/HomePage/BestSales/BestSales';
import ProductsGroup from '@/components/ProductsGroup/ProductsGroup';
import SpecialOffers from '@/components/SpecialOffers/SpecialOffers';
import React from 'react';
import dynamic from 'next/dynamic';
import CartWrapper from '@/components/CartPage/CartWrapper/CartWrapper';
import NotUserPages from '@/components/Authorization/NotUserPages';

// const BestSales = dynamic(() => import('@/components/HomePage/BestSales/BestSales'), { ssr: false })

const CartPage = ({params}) => {
  return (
      <div className='bg-pattern'>
        <Container>
            <div className='page-container'>
                <CartWrapper pageType="cart" lang={params.lang} userAuth={false}  />
                <ProductsGroup title="You may be interested in" />
                <SpecialOffers />
                <BestSales />
            </div>
        </Container>
      </div>
  )
}

export default CartPage