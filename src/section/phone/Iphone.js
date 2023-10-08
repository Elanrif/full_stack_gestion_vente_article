import React from "react";
import { Link } from "react-router-dom";

export default function Iphone() {
  return (
    <div className="group relative h-[75vh] bg-white">
      <div className="text-center pt-10">
        <p className="text-blue-500 "> nouveau </p>
        <h1 className="text-6xl font-semibold"> Iphone 15 Pro.</h1>
        <p className="pt-3">Titanium. Extrêmement durable. Top lumineux</p>
        <div className="flex items-center justify-center text-xl mt-3 space-x-3">
          <Link
            to="/phone/iphone"
            className="text-blue-400 hover:text-blue-600 duration-300 capitalize"
          >
            En savoir plus &gt;{" "}
          </Link>
          <Link className="text-blue-400 hover:text-blue-600 duration-300 capitalize">
            {" "}
            Acheter &gt;
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-5 h-[15rem] w-[40rem]">
        <div className="group-hover:scale-75 duration-300">
          <img
            src="/image/img/phone/iphone/iphoneMa.png"
            alt="Aucune image"
            className="h-[20rem] w-[80rem]"
          />
        </div>
      </div>
    </div>
  );
}
