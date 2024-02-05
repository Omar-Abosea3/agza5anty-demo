import HeroSection from "@/components/HeroSection/HeroSection";
import HeroSectionImage from "@/assets/images/best-offers/img_header.svg";
import Container from "@/components/Container/Container";
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import Filters from "@/components/BestOffersPage/Filters/Filters";
import Brands from "@/components/Brands/Brands";
import Products from "@/components/BestOffersPage/Products/Products";
import { ProductsData } from "@/constants/Data/BestSalesData/ProductsData";
import SortHeader from "@/components/BestOffersPage/SortHeader/SortHeader";
import axios from "axios";

const category = async ({lang , params}) => {
    const {categoryId} = params;
    let categoryProducts ;
    try {
        const {data} = await axios({
            url:`${process.env.apiBaseUrl}/api/v2/product/get`,
            method:'get',
            headers:{
                'Content-Type':'application/json',
            },
            data:{
                id:1,
                method:'get', 
                params:{
                    "category_id": [parseInt(categoryId)],
                }
            }
        });
        console.log(data);
        categoryProducts = data.result.data;
    } catch (error) {
        console.log(error);
    }

    return <>
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
                    <Products data={categoryProducts.length?categoryProducts:null} classes="mb-[50px]" />
                </div>
              </div>
            <Brands />
            </div>
          </Container>
        </div>
      </ClientOnly>
    </div>
    </>

};

export default category;