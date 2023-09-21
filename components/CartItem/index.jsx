import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { ShopiContext } from "../../context";
import Loader from "../ImgLoader";

const CartItem = ({ product }) => {
  const [loading, setloading] = useState(true); // for conditional render
  const [ItemAdded, setItemAdded] = useState(false); // to enable y disable button interaction

  const {
    cartList,
    setProdDetails,
    handleOpenCartList,
    handleOpenDetails,
    addToCart,
  } = useContext(ShopiContext);

  useEffect(() => {
    const index = cartList?.findIndex(({ id }) => id == product.id);

    if (index != -1) {
      setItemAdded(true);
    } else {
      setItemAdded(false);
    }
    LoadImage();
  }, [cartList]);

  // function Validate if the image already load in the client side

  const LoadImage = async () => {
    try {
      const imgElement = new Image();
      imgElement.src = product.image;
      imgElement.onload = () => {
        setloading(false);
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className=" border border-gray-400 justify-between max-w-[20rem] max-h-[25rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        onClick={() => {
          setProdDetails(product);
        }}
        className="m-0 mt-3 rounded-none flex justify-center p-3 cursor-pointer"
      >
        <button
          disabled={ItemAdded}
          translate="no"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            padding: "8px",
            borderRadius: "100%",
            lineHeight: "1.5",
          }}
          className={`${ItemAdded ? " bg-green-600" : " bg-blue-600"}`}
          onClick={() => {
            addToCart(product), handleOpenCartList();
          }}
        >
          {ItemAdded ? (
            <BsCartCheck size={20} color="white" />
          ) : (
            <FaPlus size={20} color="white" />
          )}
        </button>
        {loading ? (
          <Loader />
        ) : (
          <img
            src={`${product.image}`}
            alt={product.title}
            loading="eager"
            style={{ height: "100%" }}
            onClick={() => {
              handleOpenDetails();
            }}
          />
        )}
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="font-bold">
          {product.title}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography
          variant="lead"
          color="black"
          className="m-0 rounded-md px-3 text-md font-bold backdrop-blur-sm bg-green-200"
        >
          {product.category}
        </Typography>

        <Typography color="black" className="m-0 font-normal text-xl">
          ${product.price}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default CartItem;
