import ResetPassword from "@/components/AuthPage/ResetPassword/ResetPassword";
import { getDictionary } from "@/libs/dictionary";

export default async function ResetPasswordPage  ({params})  {
  const t = await getDictionary(params.lang);
  return (
    <ResetPassword t={t} lang={params.lang} />
  );
};

