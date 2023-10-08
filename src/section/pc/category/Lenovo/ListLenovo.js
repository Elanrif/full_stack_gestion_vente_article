import React, { useContext } from "react";
import Carde from "../../../Carde";
import { ArticleContext } from "../../../../Context";

export default function ListeLenovo() {
  const { articles, setArticles } = useContext(ArticleContext);
  return (
    <>
      <div className="py-7">
        <h1 className="pt-5 my-5 ps-5 text-6xl capitalize font-black text-center">
          Lenovo ThinkPad X1 Carbon
        </h1>

        <div className="max-w-[83rem] mx-auto">
          <p className="uppercase text-3xl text-slate-400">
            Performances Inégalées
          </p>
          <h1 className="my-3 text-xl">
            Dominez votre travail avec le processeur Intel Core vPro, l'écran 4K
            UHD et la légèreté remarquable du ThinkPad X1 Carbon.
          </h1>
          <div className="rounded-xl bg-black text-white max-w-[25rem] text-md px-3 py-2">
            Démarrer vos achats &nbsp; 🚀💼 &nbsp; !
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
