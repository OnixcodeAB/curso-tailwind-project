import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ShopiContext } from "../../context";
import { Typography } from "@material-tailwind/react";

const ProductDetails = ({ prodDetails: { product } }) => {
  const { handleCloseDetails } = useContext(ShopiContext);
  //console.log(product)
  return (
    <aside className=" w-96 h-[calc(97vh-68px)] top-20 flex flex-col fixed right-4 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <div
          className="rounded-full  bg-red-900 p-1 cursor-pointer"
          onClick={handleCloseDetails}
        >
          <IoMdClose color="white" className="h-6 w-6 text-black font-bold" />
        </div>
      </div>
      <div className="px-5">
        <img
          src={product.image}
          alt=""
          className="w-full h-96 object-contain my-5"
        />
        <Typography className="mt-2 py-3 text-center text-lg font-bold">
          ${product.price}.00
        </Typography>
        <Typography className="mt-2 py-3 text-justify">
          {product.description}
        </Typography>
      </div>
    </aside>
  );
};

export default ProductDetails;
