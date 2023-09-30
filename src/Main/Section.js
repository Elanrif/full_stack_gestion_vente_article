import React from 'react'
import Card from './Card'

function Section({ itemes, name, articles }) {
  /*   const items = [
        "Téléphone","Lunette","Jeu Xbox","Ordinateur","Tablette"
    ] */

  const type = () => {
    if (name === itemes[0]) return itemes[0];

    if (name === itemes[1]) return itemes[1];

    if (name === itemes[2]) return itemes[2];

    if (name === itemes[3]) return itemes[3];

    if (name === itemes[4]) return itemes[4];

    return "Nos meilleures ventes";
  };


  return (
    <div>
      <div className="my-10 text-center">
        <h1 className="text-5xl my-5 font-black capitalize">{type()} </h1>
        <p className="my-5 text-xl">
          Découvrez les promotions de nos best-sellers permanents
        </p>
      </div>

      <div className="p-4 max-w-[87rem] mx-auto bg-gray-100 ">
        {/* <div className="flex text-black text-xl justify-center space-x-3 md:space-x-10">
          {itemes.map((item, index) => (
            <div
              key={index}
              className="hover:cursor-pointer hover:border-b-4 border-black"
            >
              {item}
            </div>
          ))}
        </div> */}

        {/* on va mapper , chaque article  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-4 ps-24">
          {articles&& articles.map((item, index) => (
            <Card article={item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section
