import LocaleSwitcher from "@/components/Navbar/LocalSwitcher";
import "./auth.css";
import LogoMusk from "@/assets/images/auth/logo.svg";

import Image from "next/image";
export default function RootLayout({ children }) {
  return (

    <div className="block min-[1120px]:grid grid-cols-1 min-[1120px]:grid-cols-2">
          <LocaleSwitcher />
          <div className="auth-mask flex items-center min-[1120px]:justify-center flex-col min-[1120px]:flex-row min-[1120px]:col-span-1">
            <div className="w-[90%] min-[1120px]:w-[390px] h-[430px] relative ">
                <Image
                    src={LogoMusk}
                    alt="logo"
                    fill
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="block w-full min-[1120px]:hidden">
              {children}
            </div>

          </div>
          <div className="hidden min-[1120px]:block min-[1120px]:max-h-screen min-[1120px]:overflow-y-auto min-[1120px]:col-span-1">{children}</div>
        </div>

  );
}
