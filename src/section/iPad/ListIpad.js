import React, { useContext } from "react";
import Carde from "../Carde";
import { ArticleContext } from "../../Context"; 

export default function ListIpad() {

   const { articles, setArticles } = useContext(ArticleContext);

  return (
    <>
      <div className="bg-black py-7 text-white">
        <h1 className="pt-5 my-5 ps-5 text-6xl capitalize font-black text-center">
          iPad Pro - Créativité Sans Limites
        </h1>

        <div className="max-w-[83rem] mx-auto">
          <p className="uppercase text-3xl text-slate-400">
            Redéfinissez la Créativité
          </p>
          <h1 className="my-3 text-xl">
            Donnez vie à vos idées avec la puissance de l'iPad Pro, son écran
            Liquid Retina et sa compatibilité avec l'Apple Pencil.
          </h1>
          <div className="max-w-[25rem] text-black bg-white rounded-xl bg-ipad-accent-color text-md px-3 py-2">
            Découvrir l'iPad Pro, Acheter maintenant &nbsp; 🖌️📱 &nbsp; !
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {/* centré mon grid au cas ou j'ai une seule composant  ,n'oublier pas de faire des conditions dans les grids selons la quantité de liste qu'on va reçevoir*/}
        <div className="grid px-[7rem] py-5 md:px-10 xl:px-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5">
          {articles.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Carde article={item} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
