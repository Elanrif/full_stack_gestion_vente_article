import React,{useState,useEffect,useContext} from 'react'
import Fab from "@mui/material/Fab";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { ArticleContext,ArticleUserContext, BasketUserContext, UserContext } from '../Context';
import axios from 'axios';

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

export default function Carde(props) {
  /* tout ces contexte on des states */
  const { userConnected, setUserConnected, userLoading, setUserLoading } =  useContext(UserContext);
  const { articleAuth, setArticleAuth } = useContext(ArticleUserContext);
  const { allBasketUser, setAllBasketUser } = useContext(BasketUserContext)
  const { articles, setArticles } = useContext(ArticleContext); /* liste d'articles by category : on a ces articles  */
  const { article } = props; /* l'article en question. */
  const [check, setCheck] = useState(null)

  const [basket, setBasket] = useState({
    prix_unitaire: article.prix,
    prix_total: null,
    qte_article: 1,
    user: {
      id: userConnected?.id /* on a besoin seulement de l'id pour le post et sur back a fait DynamicUpdate. pour le PUT, on utilisera pas les id de user et article. */,
    },
    article: {
      id: article.id /* pas la peine d'envoyer tout les autres infos */,
    },
  })

  const [userSelectedItem,setUserSelectedItem] = useState(null)  

  const [color, setColor] = useState({
    couleur: "Blanc",
    ring: "ring-offset-2 ring-1 ring-slate-800",
  });

  const [hidden, setHidden] = useState(false)

  /* on déduit l'unité ajouté.car on veut éviter si on actualise ou on revient a la page initialisé 
  le sate par la valeur useState(0)
   n(unité restant) = total - m(unité ajouté) donc ; m(unité ajouté) = total - n(unité remaining) */
  const [count, setCount] = useState(article.qte_total-article.qte_restant)

  const handleClick = (e) => {
    setColor({
      couleur: e.color,
      ring: e.ring,
    });
  };

  const loadAllBasketsUserConnected = ()=>{
      axios
          .get(`/basket/find-basket-from-user/${userConnected?.id}`)
          .then((re) => {
            setAllBasketUser(re.data)
          
          })
          .catch((error) => {
            console.log("error : ", error);
          });
          
      }

  // basket n'a pas d'id et ne doit pas avoir.
  const handlePostShoppingCart = () => {
    setCount(
      count + 1
    ); /*  nous arrange , car lorsque on va recliquer. count aura la nouvelle valeur a chaque fois */

    //permet de modifier le state
    setBasket((basket) => ({
      ...basket,
      prix_total: (count + 1) * basket.prix_unitaire,
      qte_article: count + 1,
    }));

    //si on utilise le state basket et count on aura pas ces valeurs modifié. mais les anciens valeurs.pour ça on fait comme ça.
    axios
      .post("/basket/add-shopping-cart", {
        ...basket,
        prix_total: (count + 1) * basket.prix_unitaire,
        qte_article: count + 1,
      })
      .then((res) => {

        /* user selected item. */
         setUserSelectedItem(true)

        //recuperer le resultat
        setBasket(res.data)

        /* mettre à jour  le state allBasketUser du contexte BasketUserContext
         ainsi tout les composant auront les nouveaux infos  */
           loadAllBasketsUserConnected() 
      })
      .catch((err) => {
         err.response?.status === 500 && alert("ERROR : Vous avez déjà ajouté cet article au Panier")
        console.log("err : ", err);
      });
  };

  //pour PUT basket doit avoir un id.
  const plusUpdateShoppingCart = (article) => {

    /* necessaire de faire des setState pour que quand on revient le state a les nouveaus informations */
   count < article.qte_total && setCount(
      count + 1
    ); /*  nous arrange , car lorsque on va recliquer. count aura la nouvelle valeur a chaque fois */

    setBasket((basket) => ({
      ...basket,
      id: basket.id,
      prix_total: (count + 1) * basket.prix_unitaire,
      qte_article: count + 1,
    }))

   /* ne jamais utilisé les state {count et basket} car il ne prendra pas en compte les state avec
     * setCount et setBasket mais le state avant d'entrer dans cette fonction or c'est pas que nous
     voulons */

    axios
      .put("/basket/update-shopping-cart", {
        ...basket,
        id: basket.id /*  quand on a ajouter au panier on a modifié le state basket par la valeur recupérer et maintenant contient une ID, et pourra être modifé */,
        prix_total: (count + 1) * basket.prix_unitaire,
        qte_article: count + 1,
      })
      .then((res) => {
        //recuperer le resultat
        setBasket(res.data);

        /* mettre à jour  le state allBasketUser du contexte BasketUserContext
         ainsi tout les composant auront les nouveaux infos  */
        loadAllBasketsUserConnected()

      })
      .catch((err) => {
        
        console.log("err : ", err);
      });
  };

  //ajouter un panier et recuperer le resultat.
  const minusUpdateShoppingCart = (article) => {

    /* necessaire de faire des setState pour que quand on revient le state a les nouveaus informations */
   count > 1 && setCount(
      count - 1
    ); /*  nous arrange , car lorsque on va recliquer. count aura la nouvelle valeur a chaque fois */


    setBasket((basket) => ({
      ...basket,
      prix_total: (count - 1) * basket.prix_unitaire,
      qte_article: count - 1,
    }));

    /* ne jamais utilisé les state {count et basket} car il ne prendra pas en compte les state avec
     * setCount et setBasket mais le state avant d'entrer dans cette fonction or c'est pas que nous
     voulons */
    axios
      .put(
        "/basket/update-shopping-cart",
        {
          ...basket,
          id: basket.id /* quand on a ajouter au panier on a modifié le state basket par la valeur recupérer et maintenant contient une ID, et pourra être modifé */,
          prix_total: (count - 1) * basket.prix_unitaire,
          qte_article: count - 1,
        }
      )
      .then((res) => {
        //recuperer le resultat pour le cas de update
        setBasket(res.data);
        /* mettre à jour  le state allBasketUser du contexte BasketUserContext
         ainsi tout les composant auront les nouveaux infos  */
        loadAllBasketsUserConnected()

      })
      .catch((err) => {
      //  err.response?.status === 500 && alert("Vous avez déjà ajouté cet article au Panier")
        console.log("err : ", err);
      });
  };


  const handleAddBasket = () => {

    handlePostShoppingCart();
  }

  useEffect(() => {
    booleanUserAddArticle()
  }, [check]) 


  const booleanUserAddArticle = ()=>{

      axios.get(`/basket/findByUserIdAndArticleId/${userConnected?.id}/${article.id}`)
      .then((res)=>{

          setUserSelectedItem(res.data)
          setCheck(!check)
      })
      .catch((err)=>{
        console.log("err : " , err)
      })
  }


  return (
    <>
      {article && (
        <div
          className={`w-[20rem]  ${
            article.qte_total - count === 0 ? "hidden" : "block"
          } text-center duration-300 rounded-2xl bg-gray-50 border h-[37rem]`}
        >
          <h1 className="mt-5 text-slate-800 text-start text-etralight capitalize font-normal ps-3">
            {article.name.slice(0, 38)}
          </h1>
          <div>
            <img
              src="/image/img/pc/lenovo.jpg"
              className="mt-5 block h-[13rem] w-full"
            />
          </div>

          <div className="my-3">
            <p> Couleur : {article.color} </p>
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

            <div className="border italic w-[14rem] mx-auto text-white bg-blue-400 px-3 mb-3 py-1">
              {article.qte_total - count === 0
                ? "Aucune article "
                : `${article.qte_total - count} unité(s) restante`}
            </div>

            {article.stockage === 0 ||
              (article.stockage !== null && (
                <div className="border w-[14rem] mx-auto border-black rounded-3xl px-3 py-2">
                  stockage : {article.stockage}{" "}
                  {article.stockage >= 20 ? "Go" : "To"}
                </div>
              ))}

            <p className="mt-5 text-2xl font-bold"> {article.prix},00 Dhs</p>
          </div>

          {userSelectedItem ? (
            <>
              <div
                className={`hidden w-[12rem] uppercase duration-300 mx-auto  rounded-xl p-2 hover:${
                  userLoading
                    ? "cursor-pointer bg-orange-500"
                    : "cursor-pointer bg-orange-300"
                } 
             text-white`}
                onClick={
                  userLoading
                    ? handleAddBasket
                    : () => alert("veuillez vous connectez !")
                }
              >
                Ajouter au Panier
              </div>
            </>
          ) : (
            <>
              <div
                className={`w-[12rem] uppercase duration-300 mx-auto  rounded-xl p-2 hover:${
                  userLoading
                    ? "cursor-pointer bg-orange-500"
                    : "cursor-pointer bg-orange-300"
                } 
             text-white`}
                onClick={
                  userLoading
                    ? handleAddBasket
                    : () => alert("veuillez vous connectez !")
                }
              >
                Ajouter au Panier
              </div>
            </>
          )}

          {
            userSelectedItem &&
            <><div
            className={` flex pt-3 items-center justify-around`}
          >
            <div
              className="hover:cursor-pointer duration-300"
              onClick={() => minusUpdateShoppingCart(article)}
            >
              <IndeterminateCheckBoxIcon
                sx={{ fontSize: 40 }}
                className="text-orange-500"
              />
            </div>

            <div className="text-lg font-black">{count}</div>
            <div
              className="hover:cursor-pointer duration-300"
              onClick={() => plusUpdateShoppingCart(article)}
            >
              <AddBoxIcon sx={{ fontSize: 40 }} className="text-orange-500" />
            </div>
          </div></>
          }
        </div>
      )}
    </>
  );
}

