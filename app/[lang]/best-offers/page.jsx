import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import HeroSectionImage from "@/assets/images/best-offers/img_header.svg";
import Container from "@/components/Container/Container";

import ClientOnly from "@/components/ClientOnly/ClientOnly";
import Filters from "@/components/BestOffersPage/Filters/Filters";
import Brands from "@/components/Brands/Brands";
import Products from "@/components/BestOffersPage/Products/Products";
import { ProductsData } from "@/constants/Data/BestSalesData/ProductsData";
import SortHeader from "@/components/BestOffersPage/SortHeader/SortHeader";


const BestOffers = () => {
  return (
    <div>
      <ClientOnly>
        <HeroSection title="Best Offers" img={HeroSectionImage} />

        <div className="bg-pattern">
          <Container>
            <div className="page-container">
              <div className="grid grid-cols-4 gap-[25px]">
                <div className="hidden min-[1300px]:block col-span-1">
                  <Filters />
                </div>
                <div className="col-span-4 min-[1300px]:col-span-3">
                    <SortHeader />
                    <Products data={ProductsData} classes="mb-[50px]" />
                </div>
              </div>
            <Brands />
            </div>
          </Container>
        </div>
      </ClientOnly>
    </div>
  );
};

export default BestOffers;
