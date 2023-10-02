import React from "react";
import { Link } from "react-router-dom";

function Iphone() {
  return (
    <div className="relative h-[70vh] bg-black text-white">
      <div className="text-center pt-10 text-slate-50">
        <p className="text-blue-500 "> nouveau </p>
        <h1 className="text-6xl font-semibold"> Iphone 15 Pro.</h1>
        <p className="pt-3">Titanium. Extrêmement durable. Top lumineux</p>
        <div className="flex items-center justify-center text-xl mt-3 space-x-3">
          <Link className="text-cyan-400 hover:text-cyan-600 duration-300 capitalize">
            En savoir plus &gt;{" "}
          </Link>
          <Link className="text-cyan-400 hover:text-cyan-600 duration-300 capitalize">
            {" "}
            Acheter &gt;
          </Link>
        </div>
      </div>
        <div className="mx-auto mt-5 min-h-[15rem] w-[50rem]">
          <div className="">
            <img
              src="/image/img/phone/iPhone15-Pro.png"
              alt="Aucune image"
              className="h-[20rem] w-[90rem]"
            />
          </div>
        </div>
    </div>
  );
}

export default Iphone;
