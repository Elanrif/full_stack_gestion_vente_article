import React,{useState,useEffect} from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { TbSitemap } from "react-icons/tb";
import axios from "axios";

function Items() {

const [count, setCount] = useState();

useEffect(() => {
  getData();
}, []);

const getData = () => {
  axios
    .get("http://localhost:8080/articles/all")
    .then((response) => {
      setCount(response.data.length);
    })
    .catch((e) => {
      console.log("error : ", e.mesasge);
    });
};



  return (
    <div
      className={`mt-5 ring-black ring-offset-1 ring-2 ps-5 pl-3 bg-blue-50 py-2  capitalize font-bold rounded-xl h-[13rem]  shadow-md shadow-slate-300`}
    >
      <div className="mt-5 flex items-center space-x-4  ms-10 text-xl text-center text-slate-700">
        <TbSitemap size="32px" /> <h1> Articles</h1>
      </div>
      <div className="mt-10 max-w-sm mx-auto">
        <div className="flex place-items-end text-blue-900 justify-center space-x-4">
          <p className="text-5xl">{count && count} </p>
          <p className="text-slate-400 italic text-md"> utilisateurs</p>
        </div>
      </div>
    </div>
  );
}

export default Items
