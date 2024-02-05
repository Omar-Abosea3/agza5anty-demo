"use client"

import { useSelector } from "react-redux";
import useAuthentication from "./userPagesHook";

export default function UserPages({lang , children}) {
    const userData = useSelector(state => state.user.newUser);
    useAuthentication(lang);
  return <>
        {children}
  </>
}
