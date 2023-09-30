import React,{useState,useEffect} from 'react';
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BsPlus} from "react-icons/bs" ; 
import { BiMinus } from "react-icons/bi"; 
import { HiMinusSm } from "react-icons/hi"; 

function Chart({ article,updateUser}) {

  /* quant on revient sur le compsant on veut avoir les derniers informations  */
  /* Donc il suffisait juste d'initialiser cet User par les information de l'article au lieu de useState(1) */
  const [count, setCount] = useState(article.qte_client);

  const add = () => {
    count < article.qte_art
      ? setCount((prevState) => prevState + 1)
      : notify();

    //updateQte();
  };

  const sub = () => {
   
    count > 1 ? setCount((prevState) => prevState - 1)
    : notifySb();

   // updateQte();
  };

  // donc useEffect au monté du composant ne s'excutera pas , car count est un entier et n'a pa changé 
  //si s'etait un boolean au monté de composant il s'executerait automatiquement, que sa soit a true ou false,
  // voila la différence entre , un boolean et entier dans le useEffect. le BOOLEAN relance useEffect au monté du composant et entier NON. c'est au changement de cet entier
  useEffect(() => {
   
    //le problème etait ici , dès que on revenait il éxecuter ça , et initialiser a chaque fois par la valeur initiale de '1' useState(1), 
    // on ajoute count !== de quelque chose , sinon seulement count && il va trouver que c'est true est l'executer aussi çe qui ne resoudrait pas notre problème && , pour etre sur que lorsque on va cliquer 
    updateQte();

    //cette fonction vient du parent Total . on va mettre a jour le state labas.
    //et il va mettre a jour USER , props ; updateUser = {changeState();}

    updateUser();
  }, [count])


  /* +1, car je trouve que la fonction s'execute avec un -1 de count */
  const updateQte = () => {
    /* l'article est modifié, je dois actualiser ici l'User connecté  */
    axios
      .put(`http://localhost:8080/articles/panier/qte/client/${count}`, article)
      .then((response) => {

        console.log(" Qte modifié avec succès : ", response.data.qte_client);
      })
      .catch((error) => {
        notifyError();
        console.log(error.message);
      });
  };

   const notifySb = () =>
     toast.info("Voulez vous supprimer l'article ? cliquer sur la poubelle", {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });

        const notifyError = () =>
          toast.error(
            "Ouups !, il semble avoir une erreur ",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );

   const notify = () =>
     toast.warn("Veuillez ne pas dépasser la quantité en stock", {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });

  return (
    <div className="flex items-center bg-white p-3 space-x-3">
      <img src={article.image} className="h-16 w-16" />
      <div>
        <h1 className="text-xl font-semibold font-mono uppercase">
          {article.nom}
        </h1>

        <div>
          <span>couleur : </span> <span> {article.color}</span>
        </div>
        <div className='my-2 font-bold italic'>
          <span className="font-semibold">Quantité Total : </span>{" "}
          <span> {article.qte_art} artilces</span>
        </div>
        <div className='animate-pulse font-mono font-bold text-blue-700'>
          <span className="mt-2 italic">Quantité restant : </span>{" "}
          <span className=''> {article.qte_art-article.qte_client} articles</span>
        </div>

        <div className="flex my-3 justify-center items-center border rounded-full w-[5rem] border-slate-900">
          <button
            onClick={sub}
            className="group hover:scale-120 hover:text-orange-400  duration-300 font-black"
          >
            <HiMinusSm size="24px" className="fon-bold" />
          </button>
          {/*  au lieu d'afficher {count} , afficher plutot la quantité de User, comme ça si je refraichis le DOM. il sera la.  */}

          {/* {article.qte_client} */}
          <div className="border-x-2 px-3 border-slate-900">
           
           {count}
            
          </div>

          <button
            onClick={add}
            className="group hover:scale-120 hover:text-orange-400  duration-300 font-black"
          >
            <BsPlus size="24px" className="font-bold" />
          </button>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

export default Chart
