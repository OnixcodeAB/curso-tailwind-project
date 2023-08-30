import React from "react";
import { Typography } from "@material-tailwind/react";
import { BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-white p-8  border">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center">
        <h1 className="text-2xl font-bold">Shopi Store</h1>
        <ul className="grid grid-cols-3 gap-4 md:w-3/4">
          <li>
            <Typography variant="h6" className="mb-3">
              Nostros
            </Typography>

            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-blue-500 focus:text-blue-500"
            >
              Conoce Más
            </Typography>
          </li>

          <li>
            <Typography variant="h6" className="mb-3">
              Servicios
            </Typography>

            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-blue-500 focus:text-blue-500"
            >
              Todos los productos
            </Typography>
          </li>

          <li>
            <Typography variant="h6" className="mb-3">
              Hecho para el curso de
            </Typography>
            <Typography>
              <a
                href="#"
                className="font-normal transition-colors text-blue-500 focus:text-blue-500"
              >
                Platzi y su curso de Next.JS
              </a>{" "}
              de Platzi implementado por{" "}
              <a
                href="#"
                className="font-normal transition-colors text-blue-500 focus:text-blue-500"
              >
                @Onixcode
              </a>
            </Typography>
            <Typography className="flex justify-center mt-3">
              <span className="flex items-center px-3">
                <BsTwitter className="mr-2" /> Twiter
              </span>
              <span className="flex items-center px-3">
                <BsGithub className="mr-2" /> GitHub
              </span>
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Desing by Onixcode
      </Typography>
    </footer>
  );
};

export default Footer;
