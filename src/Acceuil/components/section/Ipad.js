import React from "react";
import { Link } from "react-router-dom";

export default function Ipad() {
  return (
    <div className="group relative min-h-[70vh] bg-black text-white">
      <div className="text-center pt-10 text-slate-50">
        <p className="text-blue-500 "> nouveau </p>
        <h1 className="text-6xl font-semibold"> Ipad Pro</h1>
        <p className="pt-3">Inteligente. Meilleur Qualité.</p>
        <div className="flex items-center justify-center text-xl mt-3 space-x-3">
          <Link
            to="/ipad"
            className="text-cyan-400 hover:text-cyan-600 duration-300 capitalize"
          >
            En savoir plus &gt;{" "}
          </Link>
          <Link className="text-cyan-400 hover:text-cyan-600 duration-300 capitalize">
            {" "}
            Acheter &gt;
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-5 min-h-[15rem] w-[40rem]">
        <div className="group-hover:scale-75 group-hover:animate-pulse duration-300">
          <img
            src="/image/img/ipad/ipadPro.jpg"
            alt="Aucune image"
            className="h-[20rem] w-[90rem]"
          />
        </div>
      </div>
    </div>
  );
}
