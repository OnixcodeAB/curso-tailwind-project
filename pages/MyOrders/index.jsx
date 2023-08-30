import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ShopiContext } from "../../context";
import Link from "next/link";

const MyOrders = () => {
  const { myOrders } = useContext(ShopiContext);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-20">My orders</h1>

      {myOrders?.map((order, index) => {
        return (
          <div className=" w-72 flex gap-3 items-center justify-between p-3 mb-4 rounded-md border border-black">
            <Typography className="flex flex-col gap-1">
              <span>Date of purchase:</span>
              <span>10/08/2023</span>
              <span>{order.products} product</span>
            </Typography>
            <Typography className="flex gap-1 items-center">
              <span className="text-lg">${order.price}</span>
              <Link href={`/MyOrders/${index}`} >
                <MdOutlineArrowForwardIos
                  className="cursor-pointer"
                  size={25}
                />
              </Link>
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrders;
