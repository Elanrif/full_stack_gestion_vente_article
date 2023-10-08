import React,{useState,useEffect,useContext} from 'react'
import Form from './Form';
import { GiPositionMarker } from "react-icons/gi";
import { UserContext, BasketUserContext } from "../Context"
import axios from "axios";

function AsideCommande() {

    const [hidden, setHidden] = useState(true)
    const { userConnected } = useContext(UserContext);
    const { allBasketUser, setAllBasketUser } = useContext(BasketUserContext);

    const total_panier = allBasketUser.reduce((sum,basket)=>{

      return sum + basket.prix_total
    },0)

  return (
    <div className="bg-white p-4 shadow rounded-xl mb-[4rem]">
      <h1 className="mb-3 text-lg">Totaux du panier </h1>
      <div className="flex items-center justify-between my-3">
        <div className="text-md font-semibold  my-3">Sous Total </div>
        <div className="text-md font-semibold capitalize my-3">
          {total_panier}.00 dhs{" "}
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-md mb-3">Forfait: 35,00 Dhs </h1>
        <h2 className="my-4">
          {" "}
          Les options de livraison seront mises à jour lors de la commande.
        </h2>
        <div
          className="mb-4 flex items-center hover:cursor-pointer uppercase text-blue-700"
          onClick={() => setHidden(!hidden)}
        >
          {" "}
          <GiPositionMarker /> &nbsp;<p>Adresse client</p>
        </div>
        <div
          className={`${hidden ? "scale-0 hidden" : "block"} transition-all `}
        >
          <Form />
        </div>
      </div>

      <div className="flex items-center px-3 justify-between my-3">
        <div className="text-md font-semibold  my-3">Total </div>
        <div className="text-md font-semibold capitalize my-3">
          {total_panier + 35}.00 dhs{" "}
        </div>
      </div>

      <div className="bg-orange-500 max-w-[74] rounded-xl">
        <button className="group-hover:text-slate-200 w-full text-center py-3 text-white">
          {" "}
          Valider la commande
        </button>
      </div>
    </div>
  );
 
}

export default AsideCommande
