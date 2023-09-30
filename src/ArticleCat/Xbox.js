import React from 'react'
import Section from "../Main/Section";

function Xbox() {
  
   const items = ["Téléphone", "Lunette", "Jeu Xbox", "Ordinateur", "Tablette"];
  
    const products = {
      id: 2,
      nom: "Lunette bft",
      descp: "bjr nos",
      prix: 199.0,
      image: "/image/jeux_video/pack xbox manette carbon black.jpg",
      date: "2023-06-05T19:37:29.000+00:00",
      qteArt: 5,
      sell: null,
      category: {
        id: 2,
        nom: "Lunette",
      },
    };

    return (
      <div>
        <Section itemes={items} name={items[2]} articles={products} />
      </div>
    );
}

export default Xbox
