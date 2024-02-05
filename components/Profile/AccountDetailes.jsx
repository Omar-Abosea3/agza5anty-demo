"use client"

import { useSelector } from "react-redux";

export default function AccountDetailes({t , lang}) {
    const userData = useSelector((state) => state.user.userData);
  return <>
        <div className="accountDetailes py-5 ps-5 pe-3">
            <h2>{t.profile.account_detailes}</h2>
            <form className="w-100">
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="firstName" className="form-label">{t.auth.firstName}</label>
                        <input type="text" defaultValue={userData?.first_name?userData.first_name:''} className="form form-control" placeholder={t.auth.firstName} id="firstName" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="lastName" className="form-label">{t.auth.lastName}</label>
                        <input type="text" defaultValue={userData?.last_name?userData.last_name:''} className="form form-control" placeholder={t.auth.lastName} id="lastName" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="mobileNumber" className="form-label">{t.auth.mobileNumber}</label>
                        <input type="text" defaultValue={userData?.mobile?userData.mobile:''} className="form form-control" placeholder={t.auth.mobileNumber} id="mobileNumber" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="email" className="form-label">{t.auth.email}</label>
                        <input type="email" defaultValue={userData?.email?userData.email:''} className="form form-control" placeholder={t.auth.email} id="email" />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="px-1 w-50">
                        <label htmlFor="Governorate" className="form-label">{t.auth.governorate}</label>
                        <input type="text" defaultValue={userData?.governorate?userData.governorate:''} className="form form-control" placeholder={t.auth.governorate} id="Governorate" />
                    </div>
                    <div className="px-1 w-50">
                        <label htmlFor="City" className="form-label">{t.auth.city}</label>
                        <input type="text" defaultValue={userData?.city?userData.city:''} className="form form-control" placeholder={t.auth.city} id="City" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="Location" className="form-label">{t.auth.locationWriting}</label>
                        <input type="text" defaultValue={userData?.address?userData.address:''} className="form form-control" placeholder={t.auth.locationWriting} id="email" />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="px-1 w-50">
                        <label htmlFor="Insurance" className="form-label">{t.auth.insurance}</label>
                        <input type="text" defaultValue={userData?.health_insurance_provider?userData.health_insurance_provider:''} className="form form-control" placeholder={t.auth.insurance} id="Insurance" />
                    </div>
                    <div className="px-1 w-50">
                        <label htmlFor="Card" className="form-label">{t.auth.cardNumber}</label>
                        <input type="text" defaultValue={userData?.health_insurance_no?userData.health_insurance_no:''} className="form form-control" placeholder={t.auth.cardNumber} id="Card" />
                    </div>
                </div>
            </form>
        </div>
  </>
}
