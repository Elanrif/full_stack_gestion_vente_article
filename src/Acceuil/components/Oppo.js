import React from "react";
import { Link } from "react-router-dom";

export default function Oppo() {
  return (
    <div className=" group relative h-[70vh] bg-slate-50">
      <div className="text-center pt-10">
        <p className="text-blue-500 "> nouveau </p>
        <h1 className="text-6xl font-semibold"> Oppo A37.</h1>
        <p className="pt-3 text-2xl">
          Nouveau caméra . Nouveau Design. NewPhoria
        </p>
        <div className="flex items-center justify-center text-xl mt-3 space-x-3">
          <Link
            to="/phone/oppo"
            className="text-blue-600 hover:text-blue-700 duration-300 capitalize"
          >
            En savoir plus &gt;{" "}
          </Link>
          <Link className="text-blue-600 hover:text-blue-700 duration-300 capitalize">
            {" "}
            Acheter &gt;
          </Link>
        </div>
      </div>
      <div className="pt-[2rem] w-[70rem] mx-auto h-[15rem]">
        <div className="relative group-hover:scale-75 duration-300 ">
          {/*  <div className="absolute h-full w-full top-0 bottom-0 bg-slate-50 border opacity-75"></div> */}
          <img
            src="/image/img/phone/oppoA9.jpg"
            alt="Aucune image"
            className="h-[20rem] w-[90rem]"
          />
        </div>
      </div>
    </div>
  );
}

