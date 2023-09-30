import React ,{useContext,useState,useEffect} from 'react'
import Main from './Main/Main'
import Footer from './Main/Footer'
import {Routes,Route,useParams} from  "react-router-dom"
import Pc from './ArticleCat/Pc'
import Phone from './ArticleCat/Phone'
import Xbox from './ArticleCat/Xbox'
import Tablette from './ArticleCat/Tablette'
import Lunette from './ArticleCat/Lunette'
import Login from "./user/Login";
import Register from "./user/Register";
import Forget from "./user/Forget";
import Welcome from './user/Welcome'
import Logout from './user/Logout'
import Panier from './user/Panier'
import UserContext from './Context'
import Data from './Data'
import Dashboard from './user/admin/Dashboard'
import Aside from './Main/Aside'
import Manager from './user/admin/Manager'
import Orders from './user/admin/Orders'
import Utilisateurs from './user/admin/Utilisateurs'
import Article from './user/admin/Articles'
import AddArticle from "./user/admin/options/AddArticles"
import UpdateArticle from "./user/admin/options/UpdateArticles"
import UpdateUser from "./user/admin/options/UpdateUser"
import ViewArticle from "./user/admin/options/ViewArticles"
import PDF from './Pdf_/PDF'
import AddUser from './user/admin/options/AddUser'
import UseOrder from './UseOrder'

function App() {
 const items = ["Téléphone", "Lunette", "Ordinateur", "Tablette"];


  return (
    <div>
      {/*  <Main /> */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index  element={<Aside items={items} />} />
          <Route path="/items" element={<Aside items={items} />} />
          <Route path="login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="register" element={<Register />} /> {/* register */}
          <Route path="/forget" element={<Forget />} />
          <Route path="/category/Ordinateur" element={<Pc />} />
          <Route path="/category/Lunette" element={<Lunette />} />
          <Route path="category/Tablette" element={<Tablette />} />
          <Route path="/category/Téléphone" element={<Phone />} />
          <Route path="/panier" element={<Panier />} />   
        </Route>

        <Route exact path="/admin" element={<Dashboard/>}>
          <Route index element = {<Manager/>}/>
          <Route exact path="dashboard" element = {<Manager/>}/>
          <Route exact path="utilisateurs" element={<Utilisateurs/>}/>
          <Route exact path="articles" element={<Article/>}/>
          <Route exact path="orders" element={<Orders/>}/>
          <Route exact path="orders/:orderId" element={<UseOrder/>}/>

          <Route path="addArticle" element={<AddArticle/>}/>
          <Route path="updateArticle" element={<UpdateArticle/>}/>
          <Route path="updateUser/:idUser" element={<UpdateUser />}/>
          <Route path="addUser" element={<AddUser />}/>
          <Route path="viewArticle/:id" element={<ViewArticle/>}/>

        </Route>

       <Route path="pdf" element={<PDF/>}/>

      </Routes>
    </div>
  );
}

export default App
