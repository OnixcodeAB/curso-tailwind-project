import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa";

const CartItem = ({ product }) => {
  return (
    <Card className=" justify-between max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={`${product.images}`} alt={product.title} height={250} />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {product.title}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography
          variant="lead"
          color="black"
          className=" rounded-md px-3 mt-3 font-normal backdrop-blur-sm bg-green-200"
        >
          {product.category.name}
        </Typography>

        <Typography color="black" className="font-normal text-xl">
          ${product.price}.00
        </Typography>
        <Button className="absolute top-3 right-3 rounded-full p-2 uppercase leading-normal backdrop-blur-sm bg-blue-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <FaPlus size={20} color="white" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartItem;
