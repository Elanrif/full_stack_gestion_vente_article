import React from 'react';
import { BiCartAdd } from "react-icons/bi";


function Card() {
  return (
    <div className="bg-white shadow-lg">
      <img
        src="/image/pc/asus-rog-strix-g15-g513ic.jpg"
        className="w-[200px] h-[200px] mx-auto"
      />
      <div className="relative pb-8  w-full flex justify-center ">
        <div className="">
          <p className="text-slate-500 max-w-[200px]">
            Ordinateur galactic x923 dss bonne nuit
          </p>

          <p className="text-orange-800  my-3 text-lg font-mono font-bold">
            {" "}
            20000,00 MAD
          </p>
          <p
            className="bg-orange-300 hover:bg-orange-400 duration-300 
             p-3 text-white font-semibold font-mono hover:cursor-pointer"
          >
            <BiCartAdd size="25px" className="inline-flex" /> ajouter au panier
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card
