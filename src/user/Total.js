import React,{useState,useRef,useEffect} from 'react'
import { TiInputChecked } from "react-icons/ti";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { RiBankCardFill } from "react-icons/ri";
import axios from "axios";
import { Link } from 'react-router-dom';


function Total({ user, priceTt }) {

  const [total, setTotal] = useState(0);

  const [commande, setCommande] = useState({
    qteCmd: null,
    user: null,
  });

  const [onclik, setOnclik] = useState(0);

 
 /*  useEffect(() => {
    
    console.log("commande autre : ", commande);

    //comme ça on évite de l'executer dans le 1er rendu
   onclik != 0 && commandes();

  }, [onclik]); */

/*   L'important on ne peut pas dans useEffect avoir le setState, et state. modifier le 
  on aura tojours le state avant modification. Pour cela on fait de cette façon.
  SOLUTION : LES SÉPARER */

  const update = () => {
  
    //setState
    setCommande({
      qteCmd: QteClient,
      user: user,
    });

    //mettre a jou useEffect
    setOnclik((prev)=>prev+1);
  };



  const commandes = () => {

   // generatePDF();


    axios
      .post("http://localhost:8080/commandes", commande)
      .then((response) => {
        sessionStorage.clear();
        // console.log("clear session : ", sessionStorage.getItem("auth"));
        sessionStorage.setItem("auth", JSON.stringify(response.data.user));
        
        console.log("Commande return  : ",response.data);
        // console.log("user new session : ", sessionStorage.getItem("auth"));
        const datsa = sessionStorage.getItem("auth");
        //modifier aussi l'état
        // setAuth(JSON.parse(datsa));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /*   const totalPrice = () => {
    axios
      .get(`http://localhost:8080/users/total/${user.id}`)
      .then((response) => {
        console.log("<Total/> totalPrice  : ", response.data);
        setTotal(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }; */

  const QteClient = user.articles && user.articles.reduce(
    (total, article) => total + article.qte_client,
    0
  );

  return (
    <>
      <div className="bg-gray-100  py-2 sm:w-[18rem] xl:w-[35rem]">
        <div className="flex my-4 justify-around">
          <div className="text-2xl font-bold font-mono "> Total : </div>
          <div className="font-bold text-2xl">{priceTt && priceTt} DHS </div>
        </div>

        <p className="my-2 text-center text-slate-600">
          Gagner des points Rewards avec cette commande{" "}
        </p>

        <div className="my-0 text-center text-slate-600">
          <span className="italic font-semibold font-mono">Quantité(s) : </span>
          {user.articles && user.articles.length != 0 ? (
            <span className="font-semibold italic text-blue-600">
              {" "}
              {QteClient} Article(s)
            </span>
          ) : (
            <span className="italic font-extralight text-slate-700">
              Aucun article au Panier
            </span>
          )}{" "}
          <span> </span>
        </div>

        <div className="w-full text-center my-16 px-10">
          <Link to="/pdf"
           /*  onClick={update} */
            className="bg-blue-600 w-full p-3 rounded-full text-white"
          >
            Paiement
          </Link>
    
        </div>

        <div className="flex justify-center space-x-4 items-center">
          <FaCcVisa
            size="27px"
            className="text-blue-800 hover:cursor-pointer duration-300"
          />
          <FaCcMastercard
            size="27px"
            className="text-orange-500 hover:cursor-pointer duration-300 "
          />
          <FaCcPaypal
            size="27px"
            className="text-cyan-500 hover:cursor-pointer duration-300"
          />
          <RiBankCardFill size="27px" />
        </div>

        <div className="ms-[5rem] mb-5 font-extralight">
          <h1 className="my-3 font-semibold "> Modalité de paiement</h1>
          <ul>
            <li className="flex space-x-2 items-center">
              {" "}
              <TiInputChecked /> <span className="block">Carte bancaire</span>
            </li>
            <li className="flex space-x-2 items-center">
              {" "}
              <TiInputChecked />{" "}
              <span className="block"> Paiement à crédit</span>
            </li>
            <li className="flex space-x-2 items-center">
              {" "}
              <TiInputChecked />{" "}
              <span className="block"> Paiement en espèce</span>
            </li>
            <li className="flex space-x-2 items-center">
              <TiInputChecked />{" "}
              <span className="block">Virement bancaire</span>
            </li>
          </ul>
        </div>
      </div>
 
    </>
  );
}

export default Total
