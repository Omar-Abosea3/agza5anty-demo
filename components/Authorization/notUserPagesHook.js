"use client"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
const useNotAuthorized = (lang) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.user.newUser);
    const access_token = Cookies.get('accessKey');
    const memo = useMemo(() => {
      if (isAuthenticated == null && !access_token) {
            router.push(`/${lang}/auth/login`);
            console.log(isAuthenticated);
      }
    }, [isAuthenticated]);
    // Return any necessary data or functions
    return {};

  return {}
}

export default useNotAuthorized;
