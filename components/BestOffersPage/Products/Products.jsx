import ProductCard from '@/components/ProductCard/ProductCard'
import React from 'react'

const Products = ({data, classes}) => {
  return (
    <div>
        <div className={`grid grid-cols-1 min-[650px]:grid-cols-2 min-[919px]:grid-cols-3 gap-[33px] ${classes}`}>
            {
                data.map((item,index)=>(
                    <ProductCard
                        key={index}
                        category={item.category}
                        title={item.name}
                        oldPrice={item.oldPrice || 0}
                        price={item.price + " " + item.currency_id[1]}
                        rate={item.rating_avg}
                        status={item.status}
                        imgSrc={item.image}
                        id={item.id}
                        buyNow
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Products