import React from "react";
import Carde from "../../../Carde";

export default function ListAsus() {
  return (
    <>
      <h1 className="pt-5 my-5 ps-5 text-5xl font-bold text-center">
        Acheter dès Maintenant ?{" "}
      </h1>

      <div className="max-w-[83rem] mx-auto">
        <p className="uppercase text-3xl font-semibold underline-offset-4 underline">
          performance
        </p>
        <h1 className="my-3 text-5xl font-black">
          {" "}
          Vitesse et Automnie Incroyables{" "}
        </h1>
      </div>

      <div className="flex justify-center">
        {" "}
        {/* centré mon grid au cas ou j'ai une seule composant  ,n'oublier pas de faire des conditions dans les grids selons la quantité de liste qu'on va reçevoir*/}
        <div className="grid px-[7rem] py-5 md:px-10 xl:px-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5">
          <Carde />
          <Carde />
          <Carde />
          <Carde />
          <Carde />
          <Carde />
          <Carde />
          <Carde />
        </div>
      </div>
    </>
  );
}
