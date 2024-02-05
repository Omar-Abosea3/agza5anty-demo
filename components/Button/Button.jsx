"use client"

import { useRouter } from "next/navigation";
import "./styles.scss"

const Button = ({ text, color,classes,link,disabled,onClickHandler,width,id,type }) => {
  const router = useRouter()

  const handleClick = () => {
    if (link) {
      router.push(link);
    } else if (onClickHandler) {
      onClickHandler();
      // router.push("/checkout/payment")
    }else{
      console.log('login');
    }
  };

  return (
    <button
      className={`custom-btn text-center py-[15px] rounded-[30px] outline-none ${
        disabled ? "bg-[#00000026] text-white cursor-not-allowed" : color === "main"
          ? "bg-gradient-to-r from-[#41BCE8] to-[#20A5D5] text-white"
          : color === "second" ? "bg-gradient-to-r from-[#80C265] to-[#5EBC9F] text-white"  
          : color === "error" ? "bg-gradient-to-r from-[#C12E35] to-[#DE1F27] text-white" : ""
      } ${ classes}`}
      style={{
        width: width ? width : "100%",
        
      }}
      onClick={handleClick}
      disabled={disabled}
      id={id}
      type={type}
    >
      <p dangerouslySetInnerHTML={{__html:text}}/>
    </button>
  );
};

export default Button;
