import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Typography } from "@material-tailwind/react";
import { ShopiContext } from "../../context";

const ItemsAdded = ({ item }) => {
  const { deleteItemFromCart } = useContext(ShopiContext);
  return (
    <div className="flex w-full py-4">
      <div className="w-full flex items-center justify-between ">
        <figure className=" w-1/3 h-full pr-5 ">
          <img src={item.image} alt="" className=" object-cover " />
        </figure>
        <Typography className="w-1/3">{item.category}</Typography>
        <Typography>${item.price}</Typography>
        <IoMdClose
          size={25}
          color="red"
          className="cursor-pointer"
          onClick={() => {
            deleteItemFromCart(item.id);
          }}
        />
      </div>
    </div>
  );
};

export default ItemsAdded;
