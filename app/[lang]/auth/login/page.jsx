import Login from  "@/components/AuthPage/Login/Login";
import RootLayout from "../layout";
import { getDictionary } from "@/libs/dictionary";
import UserPages from "@/components/Authorization/UserPages";
import {Suspense} from 'react'
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";



export default async function LoginPage ({params}){
  const t = await getDictionary(params.lang)
  return (
    <Suspense fallback={<LoadingScreen/>}>
      <UserPages lang={params.lang}>
        <Login t={t} lang={params.lang} />
      </UserPages>  
    </Suspense>  
  )
}

