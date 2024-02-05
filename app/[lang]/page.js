import Image from 'next/image'
import { getDictionary } from '@/libs/dictionary'
import MainSlider from '@/components/HomePage/MainSlider/MainSlider'
import Container from '@/components/Container/Container'
import Services from '@/components/HomePage/Services/Services'
import "./main.scss"
import ShopByCategory from '@/components/HomePage/ShopByCategory/ShopByCategory'
import LatestProducts from '@/components/HomePage/LatestProducts/LatestProducts'
import BuyNow from '@/components/HomePage/BuyNow/BuyNow'
import SpecialOffers from '@/components/SpecialOffers/SpecialOffers'
import BestSales from '@/components/HomePage/BestSales/BestSales'
import DailyDeal from '@/components/HomePage/DailyDeal/DailyDeal'
import Brands from '@/components/Brands/Brands'
import { fetchData } from '../apis'
export default async function Home({params: {lang}}) {
  const t = await getDictionary(lang)
  const {latestProducts , categories , brands , homeOffers} = await fetchData(); 
  console.log(latestProducts);
  return (
    <main>
      <MainSlider lang={lang} />
      <div className='home-container'>
        <Container> 
          <div className='bg-white shadow-sm px-[14px]'>
            <Services t={t} lang={lang} />
            <ShopByCategory t={t} lang={lang} categories={categories?categories:null} />
            <BuyNow />
            <LatestProducts lang={lang} latestProducts={latestProducts?latestProducts:null}/>
            <SpecialOffers homeOffers={homeOffers?homeOffers:null} />
            <BestSales />
            <DailyDeal />
            <Brands brands={brands?brands:null}/>
          </div>
        </Container>
      </div>
    </main>
  )
}
