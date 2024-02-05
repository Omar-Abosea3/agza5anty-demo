"use client"


export default function EditProfile({t , lang}) {
  return <>
    <div className="accountDetailes py-5 ps-5 pe-3">
            <h2>{t.profile.edit_profile}</h2>
            <form className="w-100">
            <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="firstName" className="form-label">{t.auth.firstName}</label>
                        <input type="text"  className="form form-control" placeholder={t.auth.firstName} id="firstName" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="lastName" className="form-label">{t.auth.lastName}</label>
                        <input type="text" className="form form-control" placeholder={t.auth.lastName} id="lastName" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="mobileNumber" className="form-label">{t.auth.mobileNumber}</label>
                        <input type="text" className="form form-control" placeholder={t.auth.mobileNumber} id="mobileNumber" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="email" className="form-label">{t.auth.email}</label>
                        <input type="email" className="form form-control" placeholder={t.auth.email} id="email" />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="px-1 w-50">
                        <label htmlFor="Governorate" className="form-label">{t.auth.governorate}</label>
                        <input type="text" className="form form-control" placeholder={t.auth.governorate} id="Governorate" />
                    </div>
                    <div className="px-1 w-50">
                        <label htmlFor="City" className="form-label">{t.auth.city}</label>
                        <input type="text" className="form form-control" placeholder={t.auth.city} id="City" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="Location" className="form-label">{t.auth.locationWriting}</label>
                        <input type="text" className="form form-control" placeholder={t.auth.locationWriting} id="email" />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="px-1 w-50">
                        <label htmlFor="Insurance" className="form-label">{t.auth.insurance}</label>
                        <input type="text" className="form form-control" placeholder={t.auth.insurance} id="Insurance" />
                    </div>
                    <div className="px-1 w-50">
                        <label htmlFor="Card" className="form-label">{t.auth.cardNumber}</label>
                        <input type="text" className="form form-control" placeholder={t.auth.cardNumber} id="Card" />
                    </div>
                </div>

                <h2 className="mb-4">{t.auth.password}</h2>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="oldPassword" className="form-label">{t.auth.current_Password}</label>
                        <input type="password" className="form form-control" placeholder={t.auth.current_Password} id="oldPassword" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="newPassword" className="form-label">{t.auth.SetNewPassword}</label>
                        <input type="password" className="form form-control" placeholder={t.auth.SetNewPassword} id="newPassword" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="px-1">
                        <label htmlFor="Repeatnewpassword" className="form-label">{t.auth.confirmNewPassword}</label>
                        <input type="password" className="form form-control" placeholder={t.auth.confirmNewPassword} id="Repeatnewpassword" />
                    </div>
                </div>

                <div>
                    <button type="button" className="btn rounded-5 p-2 px-3">Save Changes</button>
                </div>

            </form>
    </div>
  </>
}
