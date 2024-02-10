"use client"
export default function OrdersNavigation({orderNavigation , t , lang}) {
  return <>
    <div id="ordersNavigation" className="ordersNavigation d-flex">
        <h3 id="activeOrderBtn" onClick={() => {orderNavigation('active')}} className="me-5 orderNavLinks currentOrderLink">{t.orders.activeOrder}</h3>
        <h3 id="allOrderBtn" onClick={() => {orderNavigation('all')}} className="orderNavLinks">{t.orders.allOrders}</h3>
    </div>
  
  </>
}
