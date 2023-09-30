import React from 'react';
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md"; 

function Info() {
  return (
    <div className='bg-slate-50 mb-7'>
        
      <h2 className="text-white bg-purple-600">
        Livraison prévue le : <span className="text-white"> ven.jui.16</span>
      </h2>
      <div className="flex justify-start items-center py-3">
        <img
          className="h-36 w-36"
          src="/image/pc/asus-rog-strix-g15-g513ic.jpg"
        />
        <div className="flex w-full items-center justify-around">
          <div className="w-52">
            <h1>
              Apple Smart Keyboard Folio pour iPad Pro 11'' bonjour tout le
              monde{" "}
            </h1>
            <p className="font-bold text-3xl font-mono">23222 DHS </p>
          </div>
          <div>
            <div className="flex items-center border border-slate-300 p-2 rounded-xl space-x-3 justify-center">
              <AiFillMinusCircle
                size="25px"
                className="hover:cursor-pointer text-orange-300 hover:text-orange-500 duration-300"
              />
              <div className="font-semibold font-mono text-lg">1112</div>
              <AiFillPlusCircle
                size="25px"
                className="hover:cursor-pointer text-orange-300 hover:text-orange-500 duration-300"
              />
            </div>
          </div>
          <div className="flex group items-center space-x-3 text-cyan-700 font-black font-mono text-xl">
            <p>2323 DHS </p>{" "}
            <MdDeleteSweep
              size="27px"
              className="hover:text-red-500 text-black group-hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info
