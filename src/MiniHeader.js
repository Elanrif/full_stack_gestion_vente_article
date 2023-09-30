import React from 'react' ; 
import {BiPhoneCall} from "react-icons/bi" ;
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function MiniHeader() {
  return (
    <div className="sm:flex px-auto sm:ps-0 justify-around items-center py-2.5 bg-fuchsia-200 text-h">
      <div className="flex justify-center items-center space-x-5">
        <div className='hover:cursor-pointer hover:text-orange-600 flex items-center space-x-2'> <BiPhoneCall/> <p>0672983xxx</p></div>
        <div className="border-l-2 border-slate-900 text-fuchsia-200"> h</div>
        <div className='hover:cursor-pointer hover:text-orange-600'> 057-23xxx</div>
        <div className='hidden sm:flex items-center space-x-2'><IoMailUnreadOutline/> <p>shop@gmail.com</p></div>
      </div>
      <div className="flex mt-2 sm:mt-0 justify-center items-center space-x-5">
        <div className='hover:cursor-pointer hover:text-orange-600'> commander </div>
        <div className="border-l-2 border-slate-900 text-fuchsia-200"> h</div>
        <Link to="/login" className='hover:cursor-pointer hover:text-orange-600'> connexion </Link>
      </div>
    </div>
  );
}

export default MiniHeader
