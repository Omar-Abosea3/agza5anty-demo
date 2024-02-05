"use client"

import useNotAuthorized from "./notUserPagesHook"

export default function NotUserPages({children , lang}) {
    useNotAuthorized(lang);
  return <>
    {children}
  </>
}
