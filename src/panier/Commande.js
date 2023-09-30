import React from 'react';
import Info from './Info';
import { SlBasketLoaded } from "react-icons/sl"; 

function Commande() {

  const items = [ "rayban-sotrie","orignale","wayfarer"]

  return (
    <div>
      <h1 className="font-mono  bg-blue-400 text-white p-3 text-lg font-semibold">
        <SlBasketLoaded size="27px" className="inline-flex items-center "/> PANIER
      </h1>

      <div className="">
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
    </div>
  );
}

export default Commande
