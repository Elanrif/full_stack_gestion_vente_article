import React from "react";
import { Link } from "react-router-dom";

export default function MacBook() {
  return (
    <div className="group relative min-h-[70vh] bg-white">
      <div className="text-center pt-10">
        <p className="text-blue-500 "> nouveau </p>
        <h1 className="text-6xl font-semibold"> MacBook</h1>
        <p className="pt-3">Inteligente. Meilleur Qualité.</p>
        <div className="flex items-center justify-center text-xl mt-3 space-x-3">
          <Link
            to="/computer/macbook"
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
        <div className="group-hover:scale-75 duration-300">
          <img
            src="/image/img/pc/macBook.jpg"
            alt="Aucune image"
            className="h-[20rem] w-[90rem]"
          />
        </div>
      </div>
    </div>
  );
}
