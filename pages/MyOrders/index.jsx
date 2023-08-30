import React from "react";
import { Typography } from "@material-tailwind/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const MyOrders = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-20">My orders</h1>

      <div className=" w-72 flex gap-3 items-center justify-between p-3 rounded-md border border-black">
        <Typography className="flex flex-col gap-1">
          <span>Date of purchase:</span>
          <span>10/08/2023</span>
          <span>3 product</span>
        </Typography>
        <Typography className="flex gap-1 items-center">
          <span className="text-lg">$182.00</span>
          <MdOutlineArrowForwardIos className="cursor-pointer" size={25} />
        </Typography>
      </div>
    </div>
  );
};

export default MyOrders;
