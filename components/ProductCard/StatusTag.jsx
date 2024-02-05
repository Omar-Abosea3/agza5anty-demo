import { Box } from "@mui/material";

export default function StatusTag({ status, bgColor }) {
  return (
    <div
      className={`${
        status.toLowerCase() === "sale" ? "bg-secondary" : "bg-primary"
      } text-white px-[14px] py-[1px] text-[15px] font-[500] rounded-full absolute top-[26px] start-[17px] capitalize`}
    >
      {status}
    </div>
  );
}
