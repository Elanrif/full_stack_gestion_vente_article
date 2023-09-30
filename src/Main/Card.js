import React,{useState} from 'react'
import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios" 

function Card({article}) {
  
  const auth = sessionStorage.getItem("auth")  

    const [userAuth, setUserAuth] = useState({
      id: 4,
      name: "",
      prenom: "",
      email: "",
      password: "",
      passCmd: null,
      connected: false,
      articles: [],
    });

  useEffect(() => {
  
     setUserAuth(JSON.parse(auth)); 

  
  }, [])

   const addArticlesByUser = () => {
   userAuth &&   axios
       .get(`http://localhost:8080/users/saveArticle/${userAuth.id}/${article.id}`)
       .then((response) => {
         sessionStorage.setItem("auth", JSON.stringify(response.data));
         setUserAuth(response.data);
         console.log(" ajoute avec succès ")
       })
       .catch((error) => {
         console.log(error.message);
       });
   };

     const deleteOneArticleByUser = () => {
       userAuth &&
         axios
           .delete(
             `http://localhost:8080/users/deleteArticle/${userAuth.id}/${article.id}`
           )
           .then((response) => {
              sessionStorage.setItem(
               "auth",
               JSON.stringify(response.data)
             );
             setUserAuth(response.data);
             console.log(" supprimé avec succès ");
           })
           .catch((error) => {
             console.log(error.message);
           });
     };


  const [onClik, setOnClik] = useState(false) ;

  const [color, setColor] = useState({
    couleur: "Blanc",
    ring: "ring-offset-2 ring-1 ring-slate-800",
  });
 /* AFFICHER SES ITEMS , puis changer le STATE COLOR , const items = ["Blanc","Noire","Mauve",,"Marron"] */
  const items = [
    {
      color: "Blanc",
      background: "bg-slate-200",
      ring: "ring-offset-2 ring-1 ring-slate-800",
    },
    {
      color: "Noir",
      background: "bg-black",
      ring: "ring-offset-2 ring-1 ring-black",
    },
    {
      color: "Awesome Mauve",
      background: "bg-purple-300",
      ring: "ring-offset-2 ring-1 ring-purple-600",
    },
    {
      color: "Awesome grafit",
      background: "bg-pink-300",
      ring: "ring-offset-2 ring-1 ring-pink-600",
    },
  ];

   const updateColor = () => {
     userAuth &&
       axios
         .post(
           `http://localhost:8080/articles/modify/${color.couleur}`,article
         )
         .then((response) => {
         
           console.log(" couleur modifié avec succès ");
         })
         .catch((error) => {
           console.log(error.message);
         });
   };

  //CHANGER LES COULEURS DU TÉLEPHONES et NOTIFIER A LA BASE DE DONNÉES
  const handleClick = (e)=>{
 
    setColor(
      {
    couleur : e.color,
    ring: e.ring
      }
    )

    updateColor();

    //aller a la base de donnée pour modifier la couleur ; 
  }
  


  const handleClickArticle = (e)=>{
    e.preventDefault()

    //une personne non connecté doit se connecter
    if(userAuth == null) {
          return notNotify() 
    }

 //en foncton de onClik, afficher le toast aussi soit ajouter ou supprimer à la base de donnée
    userAuth ? setOnClik(!onClik) : notNotify()
    userAuth && onClik ? deleteNotify() : notify();
    userAuth && onClik ? deleteOneArticleByUser() : addArticlesByUser();
 
  };
  
  const notNotify = ()=> toast.error("Veuillez d'abord vous connecté !", {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  const deleteNotify = () =>
    toast.success("L'article a été supprimé du Panier avec succès!", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const notify = () =>
      toast.success("L'article est ajouté au panier avec succès !", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

 const toastifies = <> <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <ToastContainer
        position="top-left"
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /></>
   
  return (
    <div className="max-w[15rem] text-center rounded-2xl bg-white">
      {toastifies}
      <h1 className="mt-5 text-slate-800 text-xl font-black">{article.nom}</h1>
      <img
        src={article.image}
        className="mt-10 block h-[10rem] mx-auto w-[10rem]"
      />

      {/* détail */}
      <div className="my-5">
        <p> Couleur : {color.couleur}</p>
        <div className="flex items-center my-5 space-x-5 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={`${item.background} ${
                item.ring === color.ring && color.ring
              } rounded-full hover:cursor-pointer w-5 h-5`}
            ></div>
          ))}
        </div>

        <div className="border w-24 mx-auto border-black rounded-3xl px-3 py-2">
          {article.stockage === null ? article.type : article.stockage}
          {article.stockage && "Go"}
        </div>

        <p className="mt-5 text-2xl font-bold"> {article.prix} DHS</p>
      </div>

      <div
        className={`mt-[5rem]  w-[12rem] mx-auto mb-10 rounded-xl p-3 ${
          userAuth
            ? onClik
              ? "bg-cyan-700 hover:cursor-pointer"
              : " hover:cursor-pointer bg-black text-white hover:bg-blue-700"
            : "hover:cursor-not-allowed bg-slate-500 text-slate-300"
        }`}
        onClick={handleClickArticle}
      >
        <p className={` ${onClik && "text-white"}`}>
          {onClik ? "ajouté avec succès" : " Acheter maintenant"}
        </p>
      </div>
    </div>
  );
}

export default Card
