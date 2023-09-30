import React ,{useContext,useState,useEffect} from 'react'
import Main from './Main/Main'
import Footer from './Main/Footer'
import {Routes,Route} from  "react-router-dom"
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

function App() {


const auth = useContext(UserContext)

  return (
    <div>
     bnjour
    </div>
  );
}

export default App
