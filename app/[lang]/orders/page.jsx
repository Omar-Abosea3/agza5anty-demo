import OrdersComponentWrapper from "@/components/OrdersComponents/OrdersComponentWrapper";
import { getDictionary } from "@/libs/dictionary";


const userOrders = async ({params}) => {
    const t = await getDictionary(params.lang);
    return <>
        <OrdersComponentWrapper t={t} lang={params.lang}/>
    </>
}

export default userOrders;