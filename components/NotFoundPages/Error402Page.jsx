import Image from 'next/image'
import React from 'react'
import errorImg from '@/assets/images/404-page/402.svg';
import MainButton from '../Button/MainButton';
export default function Error402Page() {
  return <>
    <section id='error402Page'>
        <div className="container w-75 py-5 px-5">
            <div className="row flex-row-reverse py-5 gx-2">
                <div className="col-lg-4 col-12 mb-4 mb-lg-0 align-self-center">
                    <figure>
                        <Image src={errorImg} alt="404" width={200} height={200}/>
                    </figure>
                </div>
                <div className="col-lg-8 col-12">
                    <div>
                        <h3>Oops!</h3>
                        <h3 className='mb-4'>No content found</h3>
                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.</p>
                        <MainButton
                            text="Go to homepage"
                            color="secondary"
                            padding="10px 44px"
                            fontWeight="700"
                            upperCase
                            href={'/'}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}
