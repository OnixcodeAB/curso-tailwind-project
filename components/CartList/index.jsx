import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ShopiContext } from "../../context";
import { Typography } from "@material-tailwind/react";
import ItemsAdded from "../ItemsAdded";

const CartList = () => {
  const { cartList, SumTotal, handleCloseCartList } = useContext(ShopiContext);
  // console.log(product)

  return (
    <aside className=" w-96 h-[calc(97vh-68px)] top-20 flex flex-col fixed right-4 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Shoping Cart</h2>
        <div
          className="rounded-full  bg-red-900 p-1 cursor-pointer"
          onClick={() => {
            handleCloseCartList();
          }}
        >
          <IoMdClose color="white" className="h-6 w-6 text-black font-bold" />
        </div>
      </div>
      <div className="px-4 overflow-y-auto">
        {cartList.map((item) => (
          <ItemsAdded key={item.id} item={item} />
        ))}
      </div>
      <div
        className="px-6 pb-5 w-[382px] h-[120px] bg-white sticky "
        style={{ bottom: "20px" }}
      >
        <aside className="flex justify-between py-1 ">
          <Typography className="text-xl pt-1">Total</Typography>
          <Typography className="text-xl font-bold">${SumTotal()}</Typography>
        </aside>
        <button className=" w-full  border border-black p-3 mt-5 rounded-md bg-black text-center">
          <Typography variant="h5" color="white" className="font-bold">
            Checkout
          </Typography>
        </button>
      </div>
    </aside>
  );
};

export default CartList;
