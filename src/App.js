import React, { useState, useEffect } from "react";
import Main from "./Main/Main";
import Footer from "./Main/Footer";
import { Routes, Route, useParams } from "react-router-dom";
import Pc from "./ArticleCat/Pc";
import Phone from "./ArticleCat/Phone";
import Tablette from "./ArticleCat/Tablette";
import Lunette from "./ArticleCat/Lunette";
import Login from "./user/Login";
import Register from "./user/Register";
import Forget from "./user/Forget";
import Welcome from "./user/Welcome";
import Logout from "./user/Logout";
import Panier from "./user/Panier";
import Dashboard from "./user/admin/Dashboard";
import Aside from "./Main/Aside";
import Manager from "./user/admin/Manager";
import Articles from "./user/admin/articles/Articles";
import AddArticle from "./user/admin/options/AddArticles";
import UpdateArticle from "./user/admin/options/UpdateArticles";
import UpdateUser from "./user/admin/options/UpdateUser";
import ViewArticle from "./user/admin/options/ViewArticles";
import PDF from "./Pdf_/PDF";
import AddUser from "./user/admin/options/AddUser";
import UseOrder from "./UseOrder";
import Acceuil from "./Acceuil/Acceuil";
import Home from "./Acceuil/components/Home";
import Computer from "./section/pc/Computer";
import MacCat from "./section/pc/category/Mac/MacCat";
import AsusCat from "./section/pc/category/Asus/AsusCat";
import LenovoCat from "./section/pc/category/Lenovo/LenovoCat";
import SmartPhone from "./section/phone/SmartPhone";
import RedmiCat from "./section/phone/category/redmi/RedmiCat";
import SamsungCat from "./section/phone/category/samsung/SamsungCat";
import OppoCat from "./section/phone/category/oppo/OppoCat";
import IphoneCate from "./section/phone/category/iphone/IphoneCate";
import IpadCat from "./section/iPad/IpadCat";
import AirPodsCat from "./section/airPods/AirPodCat";
import AccessoireCat from "./section/accessoire/AccessoireCat";
import WatchCat from "./section/watch/WatchCat";
import Users from "./user/admin/users/Users";
import { UserContext, BasketUserContext, ArticleUserContext } from "./Context";
import Commandes from "./user/admin/commandes/Commandes";
import axios from "axios";
import Basket from "./basket/Basket";

function App() {

  const auth = sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : null;
  /* :{} ,  Si auth est initialisé avec un objet vide {} au lieu de null, alors authBool sera toujours true.

Cela est dû au fonctionnement des valeurs truthy et falsy en JavaScript. Un objet vide {} est une valeur "truthy" en JavaScript, ce qui signifie qu'il est considéré comme "vrai" dans un contexte booléen.

Voici un peu de clarté :

En JavaScript, les valeurs suivantes sont considérées comme "falsy":

false
0
'' (chaîne de caractères vide)
null
undefined
NaN
Tout le reste est considéré comme "truthy", ce qui signifie que même un objet vide {} est évalué comme "vrai" dans un contexte booléen.

Donc, si auth est initialisé avec {}, l'expression auth ? true : false évalue toujours à true parce que {} est une valeur truthy. */

  const authBool = auth ? true : false;

  //Pour chaque Context { UserContext, BasketUserContext, ArticleUserContext }, on utilise un state
  /* pour chaque .Provier envoyer le state et son setState*/
  const [userConnected, setUserConnected] = useState(auth);
  const [userLoading, setUserLoading] = useState(authBool);

  const [articleAuth, setArticleAuth] = useState(null);

  const [allBasketUser, setAllBasketUser] = useState(null);

  const items = ["Téléphone", "Lunette", "Ordinateur", "Tablette"];

  useEffect(() => {
    authBool && loadUserFromBDD();

    authBool && loadArticleUserConnected();

    authBool && loadBasketUser();
  }, []);

  //Meilleur façon : chque actualisation du site. recharge nos state du CONTEXT pour ne pas perdre les données déjà stocké
  const loadUserFromBDD = () => {
    axios
      .get(`/user/find/${userConnected.id}`)
      .then((res) => {
        console.log("user : ", res.data);
        setUserConnected(res.data);
        setUserLoading(true);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  const loadArticleUserConnected = () => {
    axios
      .get(`/article/find-article-from-user/${userConnected.id}`)
      .then((res) => {
        setArticleAuth(res.data);
        console.log("Article user : ", res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const loadBasketUser = () => {
    axios
      .get(`/basket/find-basket-from-user/${userConnected.id}`)
      .then((res) => {
        setAllBasketUser(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <div>
      <UserContext.Provider
        value={{ userConnected, setUserConnected, userLoading, setUserLoading }}
      >
        <ArticleUserContext.Provider value={{ articleAuth, setArticleAuth }}>
          <BasketUserContext.Provider
            value={{ allBasketUser, setAllBasketUser }}
          >
            <Routes>
              <Route path="/account" element={<Main />}>
                <Route index element={<Aside items={items} />} />
                <Route path="items" element={<Aside items={items} />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="register" element={<Register />} />{" "}
                {/* register */}
                <Route path="forget" element={<Forget />} />
                <Route path="category/Ordinateur" element={<Pc />} />
                <Route path="category/Lunette" element={<Lunette />} />
                <Route path="category/Tablette" element={<Tablette />} />
                <Route path="category/Téléphone" element={<Phone />} />
                <Route path="panier" element={<Panier />} />
              </Route>

              <Route path="/" element={<Acceuil />}>
                <Route index="home" element={<Home />} />
                {/* computer */}
                <Route path="computer" element={<Computer />} />
                <Route path="computer/macbook" element={<MacCat />} />
                <Route path="computer/asus" element={<AsusCat />} />
                <Route path="computer/lenovo" element={<LenovoCat />} />

                {/* phone */}
                <Route path="phone" element={<SmartPhone />} />
                <Route path="phone/oppo" element={<OppoCat />} />
                <Route path="phone/iphone" element={<IphoneCate />} />
                <Route path="phone/redmi" element={<RedmiCat />} />
                <Route path="phone/samsung" element={<SamsungCat />} />

                {/* les autres simples */}
                <Route path="watch" element={<WatchCat />} />
                <Route path="ipad" element={<IpadCat />} />
                <Route path="airpods" element={<AirPodsCat />} />
                <Route path="accessoire" element={<AccessoireCat />} />

                {/* on doit être connecté pour accéder au Panier*/}
                {userLoading && (
                  <Route path="mon-panier" element={<Basket />} />
                )}
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="register" element={<Register />} />
                <Route path="forget" element={<Forget />} />
              </Route>

              <Route exact path="/dashboard/admin" element={<Dashboard />}>
                <Route index element={<Manager />} />
                <Route exact path="acceuil" element={<Manager />} />
                <Route exact path="users" element={<Users />} />
                <Route path="articles" element={<Articles />} />
                <Route exact path="orders" element={<Commandes />} />
                <Route exact path="orders/:orderId" element={<UseOrder />} />

                <Route path="articles/add" element={<AddArticle />} />
                <Route path="updateArticle" element={<UpdateArticle />} />
                <Route path="updateUser/:idUser" element={<UpdateUser />} />
                <Route path="addUser" element={<AddUser />} />
                <Route path="viewArticle/:id" element={<ViewArticle />} />
              </Route>

              <Route path="pdf" element={<PDF />} />
            </Routes>
          </BasketUserContext.Provider>
        </ArticleUserContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
