import errImg from '@/assets/images/404-page/404.svg';
import Image from 'next/image';
import '@/components/NotFoundPages/style.css';
import MainButton from '../Button/MainButton';
export default function Error404Page({t , lang}) {
  return <>
        <section id='error404Page'>
            <div className='container py-5 d-flex justify-content-center align-items-center flex-wrap'>
                <figure className='w-100 text-center mb-3'>
                    <Image src={errImg} className='m-auto' alt="404" width={200} height={200}/>
                </figure>
                <figcaption className='text-center w-100'>
                    <h2>404</h2>
                    <h3>Oops! Page not found</h3>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.</p>
                    <MainButton
                        text={t.errors.homePageButton}
                        color="secondary"
                        padding="10px 44px"
                        fontWeight="700"
                        upperCase
                        href={'/'}
                    />
                </figcaption>
            </div>
        </section>
  
  </>
}
