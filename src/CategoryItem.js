import React from 'react' ;
import lunette from "./image/lunette.png";
import computer from "./image/personal computer.jpg";
import smartphone from "./image/phone.jpg";
import xbox from "./image/xbox.jpg";
import { Link } from 'react-router-dom';


function CategoryItem() {

    const category = [
      {
        titre: "Téléphones & Tablettes",
        image: <img src={smartphone} className='h-60 w-64'/>,
        link : "phone"
      },
      {
        titre: "Ordinateur & Informatique",
        image: <img src={computer} className='h-60 w-64'/>,
        link : "pc"
      },
      {
        titre: "Jeux vidéo & Xbox",
        image: <img src={xbox} className='h-60 w-64'/>,
        link : "xbox"
      },
      {
        titre: "Lunette & accessoire",
        image: <img src={lunette} className='h-60 w-64'/>,
        link : "lunette"
      },
    ];
  return (
    <div className="border pb-4 my-10 max-w-6xl mx-auto border-slate-200 p-2">
      <h1 className="text-xl mb-3 font-mono font-bold">
        {" "}
        Découvrer nos catégories
      </h1>
      <div className="flex items-center jusitfy-between">
        <div className="grid grid-cols-4">
          {category.map((item, index) => (
            <Link to={`/category/${item.link}`} key = {index} className="text-center hover:cursor-pointer border hover:bg-purple-100 duration-300 border-slate-300">
              <h1 className="text-purple-700 capitalize mb-5 pt-3 text-lg font-mono">
                {item.titre}
              </h1>
               {item.image}
            </Link>
          ))}

        
        </div>
      </div>
    </div>
  );
}

export default CategoryItem
