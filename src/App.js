import React, {useState, useEffect } from "react";
import Main from "./Main/Main";
import Footer from "./Main/Footer";
import { Routes, Route, useParams } from "react-router-dom";
import Pc from "./ArticleCat/Pc";
import Phone from "./ArticleCat/Phone";
import Xbox from "./ArticleCat/Xbox";
import Tablette from "./ArticleCat/Tablette";
import Lunette from "./ArticleCat/Lunette";
import Login from "./user/Login";
import Register from "./user/Register";
import Forget from "./user/Forget";
import Welcome from "./user/Welcome";
import Logout from "./user/Logout";
import Panier from "./user/Panier";
import UserContexte from "./Context";
import Data from "./Data";
import Dashboard from "./user/admin/Dashboard";
import Aside from "./Main/Aside";
import Manager from "./user/admin/Manager";
import Orders from "./user/admin/Orders";
import Utilisateurs from "./user/admin/Utilisateurs";
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
import Mac_cat from "./section/pc/category/Mac/Mac_cat";
import Asus_cat from "./section/pc/category/Asus/Asus_cat";
import Lenovo_cat from "./section/pc/category/Lenovo/Lenovo_cat";
import SmartPhone from "./section/phone/SmartPhone"
import Redmi_cat from "./section/phone/category/redmi/Redmi_cat";
import Samsung_cat from "./section/phone/category/samsung/Samsung_cat";
import Oppo_cat from "./section/phone/category/oppo/Oppo_cat";
import Iphone_cate from "./section/phone/category/iphone/Iphone_cate";
import IpadCat from "./section/iPad/IpadCat"
import AirPodsCat from "./section/airPods/AirPodCat"
import AccessoireCat from "./section/accessoire/AccessoireCat"
import WatchCat from "./section/watch/WatchCat";
import Users from "./user/admin/users/Users";
import { UserContext } from "./Context";
import Commandes from "./user/admin/commandes/Commandes";

function App() {

    const auth = sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : {};
  //aussi initialisé userLoading selon la valeur de auth.
  const authBool = auth ? true : false; // ici on inialise par {} et pas par false le auth.

  //on passe les 2 dans Login et Register apres avec le context dans les formulaire de LOGIN et REGISTER
  const [userConnected, setUserConnected] = useState(auth); // useState({})
  const [userLoading, setUserLoading] = useState(authBool); // useState(null)

  const items = ["Téléphone", "Lunette", "Ordinateur", "Tablette"];

  return (
    <div>
      <UserContext.Provider
        value={{ userConnected, setUserConnected, userLoading, setUserLoading }}
      >
        <Routes>
          <Route path="/account" element={<Main />}>
            <Route index element={<Aside items={items} />} />
            <Route path="items" element={<Aside items={items} />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="register" element={<Register />} /> {/* register */}
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
            <Route path="computer/macbook" element={<Mac_cat />} />
            <Route path="computer/asus" element={<Asus_cat />} />
            <Route path="computer/lenovo" element={<Lenovo_cat />} />

            {/* phone */}
            <Route path="phone" element={<SmartPhone />} />
            <Route path="phone/oppo" element={<Oppo_cat />} />
            <Route path="phone/iphone" element={<Iphone_cate />} />
            <Route path="phone/redmi" element={<Redmi_cat />} />
            <Route path="phone/samsung" element={<Samsung_cat />} />

            {/* les autres simples */}
            <Route path="watch" element={<WatchCat />} />
            <Route path="ipad" element={<IpadCat />} />
            <Route path="airpods" element={<AirPodsCat />} />
            <Route path="accessoire" element={<AccessoireCat />} />
            <Route path="watch" element={<WatchCat />} />

            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
            <Route path="forget" element={<Forget />} />
          </Route>

          <Route exact path="/admin" element={<Dashboard />}>
            <Route index element={<Manager />} />
            <Route exact path="dashboard" element={<Manager />} />
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
