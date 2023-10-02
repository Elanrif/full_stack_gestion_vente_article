import React,{useState,useEffect,useContext} from 'react'


  const items = [
    {
      color: "Blanc",
      background: "bg-slate-200",
      ring: "ring-offset-2 ring-1 ring-slate-800",
    },
    {
      color: "Noir",
      background: "bg-black",
      ring: "ring-offset-2 ring-1 ring-black",
    },
    {
      color: "Awesome Mauve",
      background: "bg-purple-300",
      ring: "ring-offset-2 ring-1 ring-purple-600",
    },
    {
      color: "Awesome grafit",
      background: "bg-pink-300",
      ring: "ring-offset-2 ring-1 ring-pink-600",
    },
  ];

export default function Carde() {

 const [onClik, setOnClik] = useState(false);

 const [color, setColor] = useState({
        couleur: "Blanc",
        ring: "ring-offset-2 ring-1 ring-slate-800",
      });

const handleClick = (e) => {
         setColor({
           couleur: e.color,
           ring: e.ring,
         });

       };


  return (
    <div className="w-[20rem] text-center rounded-2xl bg-slate-50 border h-[37rem]">
      <h1 className="mt-5 text-slate-800 text-start text-2xl capitalize font-normal ps-3">
        Oppo A5s
      </h1>
      <div>
        <img
          src="/image/img/pc/lenovo.jpg"
          className="mt-5 block h-[13rem] w-full"
        />
      </div>

      <div className="my-3">
        <p> Couleur : Noire </p>
        <div className="flex items-center my-5 space-x-5 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={`${item.background} ${
                item.ring === color.ring && color.ring
              } rounded-full hover:cursor-pointer w-5 h-5`}
            ></div>
          ))}
        </div>

        <div className="border w-[14rem] mx-auto text-white bg-orange-400 px-3 mb-3 py-1">
          Reste : 2 
        </div>

        <div className="border w-[14rem] mx-auto border-black rounded-3xl px-3 py-2">
          stockage : 160 Go
        </div>

        <p className="mt-5 text-2xl font-bold"> 2000.00 DHS</p>
      </div>

      <div
        className={`w-[12rem] mx-auto  rounded-xl p-2 hover:cursor-pointer bg-black text-white hover:bg-blue-700`}
      >
        <p className={` ${onClik && "text-white"}`}>
          {onClik ? "ajouté avec succès" : " Ajouter au Panier"}
        </p>
      </div>
    </div>
  );
}

