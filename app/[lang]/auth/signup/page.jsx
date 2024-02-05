import SignUp from "@/components/AuthPage/SignUp/SignUp";
import { getDictionary } from "@/libs/dictionary";


export default async function RegisterPage ({params}) {
  const t = await getDictionary(params.lang);
  return (
    <SignUp t={t} lang={params.lang} />
  );
};

