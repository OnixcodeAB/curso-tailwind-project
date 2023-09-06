import { useContext } from "react";
import { useRouter } from "next/router";
import { ShopiContext } from "../../context"; // Replace with the actual path
import { Typography } from "@material-tailwind/react"; // Replace with the actual path
import { MdOutlineArrowBack } from "react-icons/md";
import Link from "next/link";


const MyOrderById = ({ product }) => {
  const { myOrders } = useContext(ShopiContext);
  const router = useRouter();
  const id = router.query.id;
  const orders = myOrders.slice(0)[id];
  console.log(orders);
  //console.log(myOrders.slice(0));

  return (
    <div className="flex flex-col items-center justify-center">
      <aside className="flex gap-1 items-center">
        <Link href="/MyOrders">
          <MdOutlineArrowBack size={35} className="cursor-pointer" />
        </Link>
        <h1 className="m-10 text-2xl font-bold">My order</h1>
      </aside>
      {orders?.products.map((item, index) => (
        <div
          className="w-96 flex justify-between items-center gap-2 p-2 mb-4 border border-black rounded-md"
          key={index}
        >
          <div className="flex items-center gap-2">
            <img src={item.image} alt={item.title} style={{ height: "90px" }} />
            <Typography className="text-sm text-center">
              {item.title}
            </Typography>
          </div>
          <Typography>${item.price}</Typography>
        </div>
      ))}
    </div>
  );
};

export default MyOrderById;
