import React from 'react';
import {LuTimer} from "react-icons/lu" ; 
import { BsPhoneFlip } from "react-icons/bs"; 
import { AiOutlineMail } from "react-icons/ai"; 

function Time() {
  return (
    <div className="flex mx-auto max-w-6xl border-2 shadow-lg shadow-cyan-400 border-slate-100 items-center justify-evenly mb-5 space-x-3 py-8">
      <div className="flex justify-center space-x-5 items-center">
        <LuTimer size="50px" className='text-orange-400'/>
        <div className="">
          <h1 className="text-purple-400 font-bold font-mono text-lg">
            {" "}
            Lun - Ven / 90:00 - 18:00{" "}
          </h1>
          <p>Jours / heures de travail</p>
        </div>
      </div>

     <div className="flex justify-center space-x-5 items-center">
          <BsPhoneFlip size="50px" className='text-orange-400'/>
        <div>
          <h1 className="text-purple-400 font-bold font-mono text-lg">
            05 22 97 62 000
          </h1>
          <p>Allo Elnar vente</p>
        </div>
      </div>

        <div className="flex justify-center space-x-5 items-center">
          <AiOutlineMail size="50px" className='text-orange-400'/>
         <div>
          <h1 className="text-purple-400 font-bold font-mono text-lg">
            contact@elnar.fr
          </h1>
          <p>contactez-nous par e-mail</p>
        </div>
      </div>
    </div>
  );
}

export default Time
