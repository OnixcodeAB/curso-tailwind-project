import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { BsCartCheck } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import ProductDetails from "@components/ProductDetails";
import ProductList from "@components/ProductList";
import CartList from "@components/CartList";
import { ShopiContext } from "../../context";

const MenClothing = () => {
  const [menClothes, setMenClothes] = useState([]);
  const [ItemAdded, setItemAdded] = useState(false);
  const { setProdDetails, handleOpenDetails } = useContext(ShopiContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then((res) => setMenClothes(res.data));
  }, []);

  const clothes = menClothes?.filter(
    (prod) => prod.category === "men's clothing"
  );

  console.log(clothes);

  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Men's Clothing</h1>
      <div className="my-8 grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-6">
        {clothes.map((item) => (
          <Card className=" border border-gray-400 justify-between max-w-[20rem] max-h-[25rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              onClick={() => {
                setProdDetails({ item });
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
                  addToCart({ item }), handleOpenCartList();
                }}
              >
                {ItemAdded ? (
                  <BsCartCheck size={20} color="white" />
                ) : (
                  <FaPlus size={20} color="white" />
                )}
              </button>
              <img
                src={`${item.image}`}
                alt={item.title}
                style={{ height: "100%" }}
                onClick={() => {
                  handleOpenDetails();
                }}
              />
            </CardHeader>
            <CardBody>
              <Typography color="blue-gray" className="font-bold">
                {item.title}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <Typography
                variant="lead"
                color="black"
                className="m-0 rounded-md px-3 text-md font-bold backdrop-blur-sm bg-green-200"
              >
                {item.category}
              </Typography>

              <Typography color="black" className="m-0 font-normal text-xl">
                ${item.price}.00
              </Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
      <main className="flex flex-row items-center "></main>
    </div>
  );
};

export default MenClothing;
