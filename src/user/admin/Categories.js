import React,{useState,useEffect} from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import Card from './Card';
import phone from "../image/phone.png"
import lunette from "../image/lunette Ren.jpg"
import tablette from "../image/Lenovo-Tab-P12-Pro.jpg"
import pc from "../image/Hp23.png"

function Categories() {


   const [state, setstate] = useState();

   useEffect(() =>
    {

    }, []);

  return (
    <div
      className={`mt-5 ps-5 pl-3 ring-black ring-offset-1 ring-1 bg-cyan-50 py-2  capitalize font-bold rounded-xl h-[13rem] w-[25rem] shadow-md shadow-slate-300`}
    >
      <div className="mt-5 flex items-center space-x-4  ms-10 text-xl text-center text-slate-700">
        <TbCategory2 size="32px" /> <h1>Categories</h1>
      </div>
      <div className="mt-10 max-w-sm mx-auto">
        <div className="flex items-end px-5 justify-center space-x-4">
          <Card name="Téléphone" images={phone} />
          <Card name="Oridinateur" images={pc} />
          <Card name="Tablette" images={tablette} />
          <Card name="Lunette" images={lunette} />
        </div>
      </div>
    </div>
  );
}

export default Categories
