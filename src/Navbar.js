import React,{useState} from 'react' ; 
import logo from "./image/logo.jpg" ; 
import {BsFillPersonFill} from "react-icons/bs" ;
import { SlBasketLoaded } from "react-icons/sl"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { BsArrowBarDown } from "react-icons/bs"; 
import { NavLink,Link } from 'react-router-dom';

function Navbar() {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleClick = () => {
      setIsMenuOpened(!isMenuOpened);
    };


  return (
    <div className="sm:flex  text-md justify-around items-center space-x-3">
      <div className="group">
        <NavLink to="/" className="hover-group:cursor-pointer">
          {" "}
          <img src={logo} className="h-20 font-bold" />
        </NavLink>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <div className="flex items-center justify-between space-x-2">
          <p>Catégories </p>
          <p className="hover:cursor-pointer">
            <BsArrowBarDown size="20px" />
          </p>
        </div>
        <div className="border-l-2 border-slate-400 text-white"> h</div>
        <div className="flex items-center justify-between space-x-5">
          {/* search and text */}
          <form>
            <label>
              <input
                className="focus:outline-none"
                name="search"
                placeholder="vous cherchez quoi ? ..."
              />
            </label>
          </form>
          <AiOutlineSearch
            size="32px"
            className="hover:cursor-pointer hover:bg-orange-400 duration-300 bg-fuchsia-800 rounded-full font-bold text-white p-2"
          />
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <NavLink to="/login">
          <BsFillPersonFill
            size="27px"
            className="hover:cursor-pointer duration-300 hover:text-indigo-800"
          />
        </NavLink>

        <Link to="/panier" className="mt-5 sm:mt-0 flex hover:cursor-pointer duration-300 hover:text-indigo-800 items-center space-x-2 justify-center">
            <div className="relative  flex items-center justify-center">
              <SlBasketLoaded size="27px" />
              <span class="relative -top-3 inline-flex rounded-full h-8 w-8 bg-sky-500 text-center text-white font-mono px-1 pt-1">

                10
              </span>
            </div>
            <p>
              <h1> Mon panier </h1> <p> 10,00 MAD </p>
            </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar
