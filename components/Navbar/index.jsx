import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaBars, FaClosedCaptioning, FaShoppingCart } from "react-icons/fa";

function NavList1() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          abelmejia.e@gmail.com
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          My Orders
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          My Account
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Sign In
        </Link>
      </Typography>
      <FaShoppingCart size={25} />
    </ul>
  );
}

function NavList2() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          All
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/mens-clothing"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Men's Clothing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/Electronics"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Electronics
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/Jewelery"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Jewelery
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/women-clothing"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Women's Clothing
        </Link>
      </Typography>
    </ul>
  );
}

export default function NavMenu() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto rounded-none max-w-full px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Typography
            href="/"
            as={Link}
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Shopi
          </Typography>
          <div className="hidden lg:block left-0">
            <NavList2 />
          </div>
        </div>

        <div className="hidden lg:block">
          <NavList1 />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaClosedCaptioning className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList2 />
        <NavList1 />
      </Collapse>
    </Navbar>
  );
}
