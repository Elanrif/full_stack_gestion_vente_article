import React, { useState, useEffect, useContext } from "react";
import Bar from "./Bar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext,BasketUserContext } from "../Context";
import BackDrop from "../section/BackDrop";

function Logout() {

  const { userConnected, setUserConnected, userLoading, setUserLoading } =  useContext(UserContext);

  const {allBasketUser, setAllBasketUser} = useContext(BasketUserContext);

  const navigate = useNavigate();

  useEffect(() => {
   setTimeout(() =>{

    handleLogout()
  },3000)
  
  }, []);

  const handleLogout = () => {

    setUserConnected(null)
    setUserLoading(false)
    setAllBasketUser(null)
    sessionStorage.removeItem("auth")

    navigate("/login");

  }


    return (
      <div className="">
        {userLoading ?
        <><Bar />
        <div className="mt-5 w-[500px] mx-auto  p-3">
          <div className="mt-[5rem]">
            <h2 className="text-3xl text-center font-thin my-5">Vous allez être déconnecté dans quelque seconde...</h2>
            <h1 className="my-4 font-extralight text-center text-slate-800">
              Nous sommes triste de vous voir partir !
            </h1>
            <p className="my-10 text-lg font-extralight text-center text-blue-700">
              On espère vous revoir le plutôt possible 
            </p>
          
          </div>
        </div>
        <BackDrop />
        </>
        :
        <> 
            {navigate("/login")}
            <div className="text-center mt-[12rem] ">VEUILLEZ VOUS CONNECTEZ ! </div>
            <BackDrop/>
        </>
        }
      </div>
    );
  
}

export default Logout;
