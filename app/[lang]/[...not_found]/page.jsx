import Error402Page from "@/components/NotFoundPages/Error402Page";
import Error404Page from "@/components/NotFoundPages/Error404Page";
import { getDictionary } from "@/libs/dictionary";



export default async function not_found({params}) {
  const t = await getDictionary(params.lang);
  return (
    <Error404Page t={t} lang={params.lang} />
  )
}
