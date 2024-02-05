import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";
import { RelatedProductsData, RelatedProductsData as relatedData } from '@/constants/Data/ProductDetailsData/RelatedProductsData'


const ProductsGroup = ({ products = RelatedProductsData, title, show = 8 }) => {
  return (
    <div className="mt-[40px]">
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1300px]:grid-cols-4 gap-[35px] h-fit">
        {products.slice(0, show).map((product, index) => (
          <div key={index}>
            <ProductCard
              category={product.category}
              title={product.name}
              rate={product.rate}
              oldPrice={product.oldPrice}
              price={product.newPrice}
              status={product.status}
              imgSrc={product.imgSrc}
            //   bgTransparent
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGroup;
