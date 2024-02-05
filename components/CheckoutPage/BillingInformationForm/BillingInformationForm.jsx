"use client"

import SignUp from '@/components/AuthPage/SignUp/SignUp'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import React from 'react'

const BillingInformationForm = ({formType, t}) => {
  return (
    <div className='pt-[64px]'>
        <SectionTitle title="Billing Information" />

        <SignUp t={t} pageType="checkout" />
    </div>
  )
}

export default BillingInformationForm