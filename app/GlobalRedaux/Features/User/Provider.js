"use client";
import { Provider} from "react-redux";
import { myStore } from "./store";

export function Providers({ children }) {
  return <Provider store={myStore}>{children}</Provider>;
}