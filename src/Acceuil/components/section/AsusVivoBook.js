import React from "react";
import { Link } from "react-router-dom";

export default function AsusVivoBook() {
  return (
    <div className="relative min-h-[70vh] bg-white">
      <div className="text-center pt-1">
        <p className="text-blue-500 "> nouveau </p>
        <h1 className="text-6xl font-semibold"> Asus VivoBook</h1>
        <p className="pt-3">Inteligente. Meilleur Qualité.</p>
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
      <div className="mx-auto mt-5 min-h-[15rem] w-[40rem]">
        <div className="">
          <img
            src="/image/img/pc/viVoBook.png"
            alt="Aucune image"
            className="h-[20rem] w-[80rem]"
          />
        </div>
      </div>
    </div>
  );
}
