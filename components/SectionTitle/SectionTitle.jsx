import React from 'react'
import "./SectionTitle.scss"

const SectionTitle = ({title,position = "center"}) => {
  return (
    <div className={`${position === "center" ? "text-start min-[600px]:text-center" : "text-start" }`}>
        <p className="text-black2 text-[24px] md:text-[30px] font-[500] mb-[34px] section-title">{title}</p>
    </div>
  )
}

export default SectionTitle