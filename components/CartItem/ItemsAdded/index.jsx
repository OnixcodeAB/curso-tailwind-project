import React from "react";
import { IoMdClose } from "react-icons/io";
import { Typography } from "@material-tailwind/react";

const ItemsAdded = ({ item }) => {
  return (
    <div className="flex w-full py-4">
      <div className="w-full flex items-center justify-between ">
        <figure className=" w-2/5 h-full pr-5 ">
          <img src={item.image} alt="" className=" object-cover " />
        </figure>
        <Typography className="w-1/3" >{item.title}</Typography>
        <Typography>${item.price}</Typography>
        <IoMdClose size={25} color="red" />
      </div>
    </div>
  );
};

export default ItemsAdded;
