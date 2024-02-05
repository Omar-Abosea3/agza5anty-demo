import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'
// import "./main.scss"
import { Poppins, Cairo } from 'next/font/google'
import {  i18n } from '@/i18n.config'
import { getDictionary } from '@/libs/dictionary';
import "swiper/css/pagination";
import "../../node_modules/swiper/swiper.min.css"
import { Providers } from '../GlobalRedaux/Features/User/Provider';
import { cookies } from 'next/headers';
import GlobalAuth from '@/components/Authorization/AuthProvider';
// ../../node_modules/swiper/swiper.min.css

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cairo = Cairo({
  subsets: ['latin'],
  weight: [ "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Agzakhana',
  description: 'Agzakhana',
}



export default async function RootLayout({ children, params }) {
  const t = await getDictionary(params.lang)
  const dir = params.lang === 'ar' ? 'rtl' : 'ltr';
  const cookieStore = cookies();
  const token = cookieStore.get('accessKey');
  const refresh =  cookieStore.get('refreshKey');
  return (
    <html lang={params.lang} dir={dir}>
      <body suppressHydrationWarning={true} className={params.lang === "en" ? poppins.className : cairo.className}>
        <Providers>
          <GlobalAuth refresh={refresh?refresh.value:null} Authorization={token?token.value:null}>
            <MainLayout lang={params.lang}  t={t}>
              {children}
            </MainLayout>
          </GlobalAuth>
        </Providers>
      </body>
    </html>
  )
}
