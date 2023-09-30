import React from 'react'
import phone from "./image/apple.jpg"
import lunette from "./image/lunette.jpg"
import tablette from "./image/tablette.jpg"
import xbox from "./image/xbox.jpg"
import pc from "./image/ordinateur.jpg"
import {Link} from "react-router-dom"

function Items() {

     const items = [
       { image: <img className='h-24 w-24' src={phone}/>, name: "Téléphone" },
       { image: <img className='h-24 w-24' src={lunette}/>, name: "Lunette" },
       { image: <img className='h-24 w-24' src={tablette}/>, name: "Tablette" },
       { image: <img className='h-24 w-24' src={pc}/>, name: "Ordinateur" },
      
     ];
  return (
    <div className='mt-10 mb-3'>
      <h1 className='text-center font-bold text-4xl font-serif'>Profiter de nos offres a durée limitée </h1>

      <div className='max-w-6xl mx-auto mt-10 flex items-center justify-center space-x-16'>
        {items.map((item,index)=>(
            <Link to={`/category/${item.name}`} key={index} className='group hover:cursor-pointer'>
                <div  className='p-3 group-hover:scale-125 duration-300'> {item.image} </div>
                <p className='text-center duration-300 group-hover:text-cyan-600 mt-2 group-hover:uppercase font-semibold capitalize '>{item.name}</p>
            </Link>
        ))}

      </div>
    </div>
  )
}

export default Items
