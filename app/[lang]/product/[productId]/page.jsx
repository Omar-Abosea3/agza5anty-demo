import { Suspense } from 'react'
import "./productDetails.scss"
import ProductImage from '@/components/ProductDetailsPage/ProductImage/ProductImage'
import ProductInfo from '@/components/ProductDetailsPage/ProductInfo/ProductInfo'
import Container from '@/components/Container/Container'
import { productData } from '@/constants/Data/ProductDetailsData/ProductData'
import { ProductTabsData } from '@/constants/Data/ProductDetailsData/ProductTabsData'
import { RelatedProductsData } from '@/constants/Data/ProductDetailsData/RelatedProductsData'
import ProductTabs from '@/components/ProductDetailsPage/ProductTabs/ProductTabs'
import ProductsGroup from '@/components/ProductsGroup/ProductsGroup'
import SpecialOffers from '@/components/SpecialOffers/SpecialOffers'
import BestSales from '@/components/HomePage/BestSales/BestSales'
import Brands from '@/components/Brands/Brands'
import axios from 'axios'


const ProductDetailsPage = async ({params}) => {
    // const PRODUCT_DATA = productData[0];
    const {productId} = params;
    console.log(params);
    let productResult ;
    try {
        const {data} = await axios({
            method:'get',
            url:`${process.env.apiBaseUrl}/api/v2/product/get/${productId}`,
            headers:{
                'Content-Type':'application/json',
            },
            data:{
                id:1,
                method:'get',
                params:{}
            }
        });
        productResult = data.result.data[0];
        console.log(productResult);
    } catch (error) {
        console.log(error);
    }
  return (
    <div className='product-container'>
        <div className="page-container">
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[28px]'>
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductImage productData={productResult} />
                    <ProductInfo productData={productResult} />
                </Suspense>
                </div>
                <ProductTabs data={ProductTabsData} />
                {/* <ProductsGroup title="Related Products" products={RelatedProductsData} /> */}
                <SpecialOffers />
                <BestSales />
                <Brands />
            </Container>
        </div>
    </div>
  )
}

export default ProductDetailsPage