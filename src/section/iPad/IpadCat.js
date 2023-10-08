import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListIpad from "./ListIpad";
import axios from "axios";
import { ArticleContext } from "../../Context"; 

export default function IpadCat() {

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    displayArticle();
  }, []);

  const displayArticle = () => {
    axios
      .get(`/article/find-by-category/8`)
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
          <ListIpad />
        </ArticleContext.Provider>
      )}
    </>
  );
}
