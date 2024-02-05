"use client"

import { Fade, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import layoutIcon01 from "@/assets/icons/layout01.svg"
import layoutIcon02 from "@/assets/icons/layout02.svg"

const SortHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <div className="flex items-center justify-between pb-[8px] border-b border-[#DDDDDD] mb-[30px]">
      <div>
        <p className="">Showing 1–12 of 60 results</p>
      </div>
      <div className="flex items-center gap-[15px]">
        <div className=" border-e-2 pe-[15px]">
            <button
                onClick={handleClick}
                className="flex items-center gap-[5px]"
            >
                Sort by
                <IoIosArrowDown className={`${open ? "rotate-180" : ""} transition  `} />
            </button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Newest</MenuItem>
                <MenuItem onClick={handleClose}>Oldest</MenuItem>
                <MenuItem onClick={handleClose}>high price</MenuItem>
                <MenuItem onClick={handleClose}>low price</MenuItem>
            </Menu>
        </div>

        <div className="flex items-center gap-[13px]">
            <div>
                <Image src={layoutIcon01} alt="layout" width={18} height={18} className="object-contain" />
            </div>
            <div>
                <Image src={layoutIcon02} alt="layout" width={18} height={18} className="object-contain" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SortHeader;
