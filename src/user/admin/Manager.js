import React from 'react'
import User from './User';
import Items from './Items';
import Commandes from './Commandes'
import Categories from './Categories';
import {Link} from "react-router-dom"

function Manager() {
  return (
    <div className="ms-[10rem]">
      <div className="text-center mt-10">
        <h1 className="my-3 italic font-semibold text-2xl text-blue-800">
          {" "}
          <span className='normal font-bold'> TABLEAU DE BORDS {">"} </span> GESTION DE VENTE{" "}
        </h1>
        <h1 className="text-extalight text-start italic max-w-4xl">
          Nous vous souhaitons la bienvenue dans votre espace d'administration.
          C'est un plaisir de vous avoir ici pour gérer et superviser notre
          plateforme 🎉🎊.
        </h1>
      </div>
      <div className=" grid grid-cols-3 gap-x-16 gap-y-5 mx-auto  min-w-[60rem]">
        <Link to="/admin/utilisateurs">
          <User />
        </Link>
        <Link to="/admin/articles">
          <Items />
        </Link>
        <Link to="/admin/orders">
          <Commandes />
        </Link>
        <Link to="/items">
          <Categories />
        </Link>
      </div>
    </div>
  );
}

export default Manager
