"use client"

export default function ProfileOrders({t , lang , orders}) {


  return (
    <>
      <div className="profileOrders py-5 ps-5 ">
        <h2 className="mb-4">{t.profile.orders_History}</h2>
        <table className="table fs-6">
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
            {orders.map(order => <tr key={order.id}>
              <th scope="row">{order.id}</th>
              <td>{order.lines.map(pro=> pro.product_id[1] + ',') }</td>
              <td>January 5, 2024</td>
              <td>{order.state}</td>
              <td>{order.total_amount + " " + order.currency_id[1]}</td>
              <td><button className="btn btn-info">{t.profile.re_Order}</button></td>
            </tr>)}
            {/* <tr>
              <th scope="row">#0000_123</th>
              <td>Vitamin C 500mg Sugarless,  Vitamin C 500mg  , +3 more</td>
              <td>January 5, 2024</td>
              <td>Delivered</td>
              <td>EG1234.00</td>
              <td><button className="btn btn-info">{t.profile.re_Order}</button></td>
            </tr>
            <tr>
              <th scope="row">#0000_123</th>
              <td>Vitamin C 500mg Sugarless,  Vitamin C 500mg  , +3 more</td>
              <td>January 5, 2024</td>
              <td>Delivered</td>
              <td>EG1234.00</td>
              <td><button className="btn btn-info">{t.profile.re_Order}</button></td>
            </tr>
            <tr>
              <th scope="row">#0000_123</th>
              <td>Vitamin C 500mg Sugarless,  Vitamin C 500mg  , +3 more</td>
              <td>January 5, 2024</td>
              <td>Delivered</td>
              <td>EG1234.00</td>
              <td><button className="btn btn-info">{t.profile.re_Order}</button></td>
            </tr>
            <tr>
              <th scope="row">#0000_123</th>
              <td>Vitamin C 500mg Sugarless,  Vitamin C 500mg  , +3 more</td>
              <td>January 5, 2024</td>
              <td>Delivered</td>
              <td>EG1234.00</td>
              <td><button className="btn btn-info">{t.profile.re_Order}</button></td>
            </tr>
            <tr>
              <th scope="row">#0000_123</th>
              <td>Vitamin C 500mg Sugarless,  Vitamin C 500mg  , +3 more</td>
              <td>January 5, 2024</td>
              <td>Delivered</td>
              <td>EG1234.00</td>
              <td><button className="btn btn-info">{t.profile.re_Order}</button></td>
            </tr>*/}
          </tbody>
        </table>
      </div>
    </>
  );
}
