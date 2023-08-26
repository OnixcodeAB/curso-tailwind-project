import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ShopiContext } from "../../context";
import { Typography } from "@material-tailwind/react";
import ItemsAdded from "../CartItem/ItemsAdded";

const CartList = () => {
  const { cartList, handleCloseCartList } = useContext(ShopiContext);
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
      <div>
        <aside>
          <Typography>Totla</Typography>
          <Typography></Typography>
        </aside>
        <button>Checkout</button>
      </div>
    </aside>
  );
};

export default CartList;
