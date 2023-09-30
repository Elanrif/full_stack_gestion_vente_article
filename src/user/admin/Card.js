import React from 'react'

function Card({ name, images }) {
  return (
    <div className="bg-white w-24  rounded-lg h-16">
      <img src={images} className='h-12 w-16'/>
      <p className="italic mt-4 font-normal font-mono text-slate-500">{name}</p>
    </div>
  );
}

export default Card
