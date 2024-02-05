"use client"
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAuthentication = (lang ) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.user.newUser);
    // const dispatch = useDispatch();
    const memo = useMemo(() => {
      if (isAuthenticated != null) {
            router.push(`/${lang}`);
            console.log(isAuthenticated);
      }
    }, [isAuthenticated]);
    // Return any necessary data or functions
    return {};
}

export default useAuthentication;
