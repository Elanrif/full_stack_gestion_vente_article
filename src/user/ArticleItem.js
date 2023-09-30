import React ,{useState,useEffect} from 'react'
import Chart from './Chart';
import {AiFillDelete} from "react-icons/ai"
import axios from "axios"
function ArticleItem({art,auth,changeState}) {

  const [login, setLogin] = useState(auth);

  useEffect(() => {

    //changeState()
  }, []);

  const deleteOneArticle = () => {
   
      axios
        .delete(
          `http://localhost:8080/users/deleteArticle/${auth.id}/${art.id}`
        )
        .then((response) => {
          sessionStorage.setItem("auth", JSON.stringify(response.data));
          setLogin(response.data);
          console.log(" supprimé dans le panier avec succès ");

          //cette fonction viens du parent Panier , et on va changer le state labàs ici , pour qu 'il met a jour l'utilisateur labas 
           changeState();
        })
        .catch((error) => {
          console.log(error.message);
        });

         
  };



  return (
    <div className="flex items-center border-b-2 border-slate-300 justify-between">
      <Chart article={art} updateUser ={changeState} />
      <div>
        <h1 className="font-black font-mono">{art.prix} DHS</h1>
        <button className="mt-7 hover:cursor-pointer hover:text-red-500">
          <AiFillDelete size="20px" onClick={deleteOneArticle} />
        </button>
      </div>
    </div>
  );
}

export default ArticleItem
