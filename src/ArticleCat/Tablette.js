import React, { useState, useEffect } from "react";
import Section from "../Main/Section";
import axios from "axios";

function Tablette() {
  const items = ["Téléphone", "Lunette", "Jeu Xbox", "Ordinateur", "Tablette"];

  const products = {
    id: 2,
    nom: "Lunette bft",
    descp: "bjr nos",
    prix: 199.0,
    image: "/image/tablette/Lenovo-Tab-P12-Pro.jpg",
    date: "2023-06-05T19:37:29.000+00:00",
    qteArt: 5,
    sell: null,
    category: {
      id: 2,
      nom: "Lunette",
    },
  };

  const [data, setData] = useState();

  useEffect(() => {
    datas();
  }, []);

  const datas = () => {
    axios
      .get("http://localhost:8080/articles/AllNotSellByCateogry/2")
      .then((response) => {
        console.log("tablettes : ", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {data && <Section itemes={items} name={items[4]} articles={data} />}
    </div>
  );
}

export default Tablette;
