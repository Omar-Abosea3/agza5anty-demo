"use client"


export default function ProfileAddresses({t , lang}) {
  return <>
         <div className="profileAddresses py-5 ps-5 pe-3">
            <h2 className="mb-4">{t.profile.addresses}</h2>
            <div className="addressContainer">
                <div className="rounded-3 border border-1 p-2 mb-4">
                    <div className="d-flex mb-3 justify-content-between align-items-center w-100">
                      <h3>{t.profile.default_Address}</h3>
                      <p><i className="bi bi-pencil"></i> Edit</p>
                    </div>
                    <p className="mb-2">Sofia Havertz</p>
                    <p className="mb-2">(+02) 1123456789</p>
                    <p className="mb-2">229 Arabella, Cairo, Egypt.</p>
                </div>
                <div>
                  <h2 className="mb-4">{t.profile.latest_Addresses}</h2>
                  <div className="rounded-3 border border-1 p-2 mb-4">
                    <div className="d-flex mb-3 justify-content-between align-items-center w-100">
                      <h3>{t.profile.shipping_Addresses}</h3>
                      <p><i className="bi bi-trash"></i> Delete</p>
                    </div>
                    <p className="mb-2">Sofia Havertz</p>
                    <p className="mb-2">(+02) 1123456789</p>
                    <p className="mb-2">229 Arabella, Cairo, Egypt.</p>
                  </div>
                  <div className="rounded-3 border border-1 p-2 mb-4">
                    <div className="d-flex mb-3 justify-content-between align-items-center w-100">
                      <h3>{t.profile.shipping_Addresses}</h3>
                      <p><i className="bi bi-trash"></i> Delete</p>
                    </div>
                    <p className="mb-2">Sofia Havertz</p>
                    <p className="mb-2">(+02) 1123456789</p>
                    <p className="mb-2">229 Arabella, Cairo, Egypt.</p>
                  </div>
                </div>

            </div>
        </div>
  </>
}
