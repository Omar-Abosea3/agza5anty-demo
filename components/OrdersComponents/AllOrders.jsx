"use client"

import NoOrders from "./NoOrders"

export default function AllOrders({t,lang}) {
  return (
    <>
      <div className="pb-5">
        {/* <table className="table">
          <thead>
            <tr>
              <th scope="col">{t.profile.order_id}</th>
              <th scope="col">{t.profile.order_items}</th>
              <th scope="col">{t.profile.order_date}</th>
              <th scope="col">{t.profile.order_Status}</th>
              <th scope="col">{t.profile.order_Price}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#0000_125</th>
              <td>Vitamin C 500m</td>
              <td>August 26, 2023</td>
              <td>Preparing</td>
              <td>EG 200.00</td>
              <td className='text-end'><button className='btn btn-info text-white rounded-2'>{t.profile.re_Order}</button></td>
            </tr>
          </tbody>
        </table> */}
        <NoOrders title={t.errors.NoAllOrderTitle} message={t.errors.NoAllOrderMessage} t={t} lang={lang}/>
      </div>
    </>
  )
}
