import React,{useState} from 'react'
import Commande from './panier/Commande';
import Recap from './panier/Recap';

function Panier() {

    const [Panier, setPanier] = useState(false)

  return (
    <div className="mx-20 flex">
      <div className=" w-full">
        <Commande />
      </div>
      <div className=" w-[800px]">
        <Recap />
      </div>
    </div>
  );
}

export default Panier
