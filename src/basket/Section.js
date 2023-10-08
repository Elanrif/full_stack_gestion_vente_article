import React, { useState, useEffect, useContext } from "react";
import AsideTable from "./AsideTable";
import AsideCommande from "./AsideCommande";
import { UserContext, BasketUserContext } from "../Context";
import {MdRemoveShoppingCart} from "react-icons/md"
import axios from "axios";

export default function Section() {

  const { userConnected } = useContext(UserContext);
  const { allBasketUser, setAllBasketUser } = useContext(BasketUserContext);
 

  /* on réexécutera le useEffect une 1er fois et a chaque fois que le state checkBasket change. */
  useEffect(() => {
    findAllBasket()
  }, [])

  /* prendre tout les articles au Panier du l'user connecté et mettre à jour le Context BasketUserContext.
     allbasketUser contiendra les informations mise à jour */
  const findAllBasket = () => {
    axios
      .get(`/basket/find-basket-from-user/${userConnected.id}`)
      .then((res) => {

        //mettre à jour le state allBasketUser via le context.
        setAllBasketUser(res.data)
      })
      .catch((err) => {
        console.log("err : ", err);
      })
  }

 
  return (
    <div className="min-h-[75vh] bg-slate-50">
      <div className="max-w-[84rem] mx-auto">
        {/* 2 façon soit d'abord vérifier puis envoyr le props , soit direct envoyé et vérifier dans le return des composant en quesiton */}
        {allBasketUser?.length > 0 ? (
          /* allBasketUser?. dans le cas ou length n'existe pas (car allBasketUser est initialisé a null dans App.js) , on evitera d'afficher une erreur. */
          <>
            <AsideTable />
            <AsideCommande />
          </>
        ) : (
          <div>
            <h1 className="text-3xl pt-20 font-extralight flex justify-center space-x-4 items-center">
              <p> Aucun article sur votre panier</p> <MdRemoveShoppingCart />{" "}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
