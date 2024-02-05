import { getUserOrders } from "@/app/apis";
import ProfileContentWrapper from "@/components/Profile/ProfileContentWrapper";
import { getDictionary } from "@/libs/dictionary";
import { cookies } from "next/headers";
import { Suspense } from "react";
export default async function profilePage({params}){
    const cookieStore = cookies();
    const token = cookieStore.get('accessKey');
    const orders = await getUserOrders(token.value);
    const t = await getDictionary(params.lang);
    return <>
        <section>
            <Suspense fallback={<div>loading....</div>}>
                <ProfileContentWrapper t={t} lang={params.lang} orders={orders}/>
            </Suspense>
        </section>
    </>
}