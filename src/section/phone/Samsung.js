import React from "react";
import { Link } from "react-router-dom";

export default function Samsung() {
  return (
    <div className="relative h-[70vh] bg-black text-white">
      <div className="text-center pt-10">
        <p className="text-blue-500 "> nouveau </p>
        <h1 className="text-6xl font-semibold text-slate-50"> Samsung Galaxy S9.</h1>
        <p className="pt-3">Titanium. Extrêmement durable. Top lumineux</p>
        <div className="flex items-center justify-center text-xl mt-3 space-x-3">
          <Link
            to="/phone/samsung"
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
        <div className="">
          <img
            src="/image/img/phone/samsung/GalaxyS23.jpg"
            alt="Aucune image"
            className="h-[15rem] w-[80rem]"
          />
        </div>
      </div>
    </div>
  );
}
