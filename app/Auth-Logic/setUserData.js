"use client"

import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode";


export const setUserData = (userData) => {
    Cookies.set('accessKey' , userData.access_token);
    Cookies.set('refreshKey' , userData.refresh_token);
    const decodedData = jwtDecode(userData.access_token);
    console.log(decodedData);
    return decodedData;
}

