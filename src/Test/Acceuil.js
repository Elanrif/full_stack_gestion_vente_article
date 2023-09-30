import React from 'react'

function Acceuil() {

    
    const data = [
      {
        color: "bg-slate-300",
        nom: "John Doe",
        age: 30,
        adresse: {
          rue: "123 Rue des Fleurs",
          ville: "Paris",
          pays: "France",
        },
        commandes: [
          {
            id: "001",
            produit: "Ordinateur portable",
            quantite: 2,
          },
          {
            id: "002",
            produit: "Smartphone",
            quantite: 1,
          },
        ],
      },
      {
        color: "bg-cyan-300",
        nom: "Jane Smith",
        age: 35,
        adresse: {
          rue: "456 Rue du Soleil",
          ville: "New York",
          pays: "États-Unis",
        },
        commandes: [
          {
            id: "003",
            produit: "Appareil photo",
            quantite: 1,
          },
          {
            id: "004",
            produit: "Casque audio",
            quantite: 3,
          },
        ],
      },
      {
        color: "bg-orange-300",
        nom: "Alice Johnson",
        age: 28,
        adresse: {
          rue: "789 Rue des Étoiles",
          ville: "Los Angeles",
          pays: "États-Unis",
        },
        commandes: [
          {
            id: "005",
            produit: "Livre",
            quantite: 5,
          },
        ],
      },
      {
        color : "bg-pink-300",
        nom: "Thomas Müller",
        age: 29,
        adresse: {
          rue: "123 Straße",
          ville: "Berlin",
          pays: "Allemagne",
        },
        commandes: [
          {
            id: "008",
            produit: "Chaussures",
            quantite: 2,
          },
        ],
      },
      {
        color: "bg-blue-300",
        nom: "Sophie Dubois",
        age: 33,
        adresse: {
          rue: "789 Rue de la Montagne",
          ville: "Paris",
          pays: "France",
        },
        commandes: [
          {
            id: "009",
            produit: "Sac à dos",
            quantite: 1,
          },
          {
            id: "010",
            produit: "Montre",
            quantite: 1,
          },
        ],
      },
    ];

  return (
    <div className="max-w-6xl mx-auto">
      <fieldset className="border py-7">
        <legend>Bonjour</legend>

        {data.map((item,index)=>{
            return (
              <ul
                key={index}
                className={`font-mono font-bold text-center my-4 py-3 ${item.color}`}
              >
                <li> {item.nom} </li>
                <li> {item.adresse.rue}</li>
                <div className="border border-pink-400 py-3">
                  {item.commandes.map((article, id) => (
                    <React.Fragment key={id}>
                      <li>ID : {article.id}</li>
                      <li>produit : {article.produit}</li>
                      <li>quantité : {article.quantite}</li>
                    </React.Fragment >
                  ))}
                </div>
                <li> {item.adresse.ville}</li>
                <li> {item.adresse.pays}</li>
              </ul>
            );
        })}



      {/*   <ul className="text-center bg-pink-300 my-4 py-3">
          <li> hello </li>
        </ul>

        <ul className="text-center bg-orange-300 my-4 py-3">
          <li> hello </li>
        </ul> */}


      </fieldset>
    </div>
  );
}

export default Acceuil
