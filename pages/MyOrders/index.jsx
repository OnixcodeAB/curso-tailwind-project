import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ShopiContext } from "../../context";
import Link from "next/link";
import CartList from "@components/CartList";

const MyOrders = () => {
  const { myOrders, openCartList } = useContext(ShopiContext);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-10 text-2xl font-bold">Pending orders</h1>

      {myOrders?.map((order, index) => {
        return (
          <div key={order.id} className=" w-72 flex gap-3 items-center justify-between p-3 mb-4 rounded-md border border-black">
            <Typography className="flex flex-col gap-1">
              <span>Date of purchase:</span>
              <span>{order.date}</span>
              <span className="font-bold">{order.totalProduct} products</span>
            </Typography>
            <Typography className="flex gap-1 items-center">
              <span className="text-lg font-bold ">${order.totalPrice}</span>
              <Link href={`/MyOrders/${index}`}>
                <MdOutlineArrowForwardIos
                  className="cursor-pointer"
                  size={25}
                />
              </Link>
            </Typography>
          </div>
        );
      })}
      {openCartList ? <CartList />:""}
    </div>
  );
};

export default MyOrders;
