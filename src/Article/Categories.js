import React from 'react'
import Card from '../Card';
import { BiCategoryAlt } from 'react-icons/bi';

function Categories({props}) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-purple-400 text-white font-bold flex justify-between items-center uppercase p-4 text-2xl ">
        <p>catégorie</p>
        <BiCategoryAlt className='hover:cursor-pointer'/>
      </div>

      <div className="border border-slate-700 text-slate-400 ps-4 italic mt-2  py-3 uppercae font-bold uppercase">
        {" "}
        Téléphones et Tablettes
      </div>

      <div className="p-3 grid grid-cols-3 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Categories
