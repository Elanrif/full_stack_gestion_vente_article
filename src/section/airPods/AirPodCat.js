import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListAirpod from "./ListAirpod";
import axios from "axios";
import { ArticleContext } from "../../Context"; 

export default function AirPodCat() {

   const [articles, setArticles] = useState(null);

   useEffect(() => {
     displayArticle();
   }, []);

   const displayArticle = () => {
     axios
       .get(`/article/find-by-category/9`)
       .then((res) => {
         setArticles(res.data);
       })
       .catch((err) => {
         console.log("Err : ", err);
       });
   };

  return (
    <>
      {/* un contexte peut prendre plusieurs valeurs et appellé plusieur fois ou imbriqué sur lui même, tjours les composant prendront le context le plus proche d'eux dans l'ARBRE */}
      {articles && (
        <ArticleContext.Provider value={{ articles, setArticles }}>
          <Header />
          <ListAirpod />
        </ArticleContext.Provider>
      )}
    </>
  );
}
