import React,{useState,useEffect} from 'react'
import Chart from './Chart'
import ArticleItem from './ArticleItem'
import  emoji  from "./image/istockphoto.jpg";

function ListCommande({ user, changeState }) {
  useEffect(() => {}, []);

  return (
    <div className=" bg-white pr-16">
      <h1 className="p-3 text-center font-semibold bg-slate-50 rounded-full">
        Les délais de livraisont peut être prolongé en raison des jours feriés à
        venir
      </h1>
      {console.log("user :", user)}
      {/* user && , j'ajoute ça et supprimé user a cause des erreurs que je trouves */}
      <div className="flex flex-col-reverse">
        {/* si la personne a des articles , puis la taille est zéro 
        il faut savoir que même si il n'a pas d'article , length sera à zéro. donc il va considérer qu'il a 
        zéro articles et ne fera jamais le else PANIER VIDE*/}
        {user.articles && user.articles.length !== 0 ? (
          user.articles.map((article, index) => (
            <React.Fragment key={index}>
              <ArticleItem
                art={article}
                auth={user}
                changeState={changeState}
              />
            </React.Fragment>
          ))
        ) : (
          <div className="max-w-6xl mt-10 bg-slate-100 shadow-lg shadow-slate-500 py-3 px-4 rounded-xl">
            <div className="flex justify-center items-center h-[12rem]">
              <div className="flex space-x-1 items-center">
                <h1 className="text-black text-lg font-semibold">
                  Votre panier est vide !.
                </h1>
                <img src={emoji} className="h-10 w-10" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListCommande
