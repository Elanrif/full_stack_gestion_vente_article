import React from 'react'

function Recap() {
  return (
    <div className="px-5 bg-orange-50 ">
      <h1 className="uppercase py-4 font-mono text-2xl font-semibold">
        {" "}
        récaputulatif de la commande
      </h1>
      <div className="my-4 py-5">
        <div className="flex border-b py-4 border-slate-400 justify-between items-center">
          <h1 className='text-xl font-mono '> 5 Article  </h1>
          <p>Livraison gratuite</p>
        </div>
       
        
        <div className="flex border-b py-4 border-slate-400 justify-between items-center">
          <h1 className="text-xl uppercase font-mono">total</h1>
          <p className='font-bold text-xl font-mono'>1.322,80 DHS</p>
        </div>

        <div className='w-[200px] py-5 mx-auto hover:cursor-pointer duration-300'>
          <p className="bg-red-400 hover:bg-red-300 text-center py-2 text-white uppercase font-mono text-lg">
           
            COMMANDER
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recap
