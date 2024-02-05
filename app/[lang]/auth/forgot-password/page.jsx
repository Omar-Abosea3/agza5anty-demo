import ForgotPassword from "@/components/AuthPage/ForgotPassword/ForgotPassword";
import { getDictionary } from "@/libs/dictionary";

export default async function ForgotPasswordPage({ params }) {
  const t = await getDictionary(params.lang);
  return <ForgotPassword t={t} lang={params.lang} />;
}
