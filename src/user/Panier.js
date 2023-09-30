import React ,{useState,useEffect} from 'react'
import ListCommande from './ListCommande'
import Total from './Total'
import axios from "axios"
import {Link} from "react-router-dom"
import { FaRegFilePdf } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Panier() {

  const user = JSON.parse(sessionStorage.getItem("auth"));


  const [total, setTotal] = useState(false);

  /* sur totalPrice, dans le lien on a 'auth.id', le problème que total n'afficher pas le total  , car au monté du composant auth était a null ,[auth,setAuth] = useState()*/
  const [auth, setAuth] = useState(user);

  //pour total price, il sera lui aussi mis a jour dans le state en meme temps qu'on update le USER
  const [priceTT, setPriceTT] = useState("***************");

  //s'executera pas automatiquement même pour une 1er fois c'est non.
  // il change en fonction de total
  useEffect(() => {
    // setAuth(JSON.parse(user));

    if (auth) {
      updateSession();
      totalPrice();
    }
  }, [total]); //lancer le useEffect en fonction du state total

  //l'enfant qui va changer cet état
  const reloadUser = () => {
    console.log("reload : ", total);
    setTotal(!total);
  };


  //je met a jour la session en fonction de state TOTAL
  const updateSession = () => {
    // console.log(" avant axios AUTH : ", auth);

    axios
      .post("http://localhost:8080/users/login", auth)
      .then((response) => {
         sessionStorage.clear();
         console.log("clear session : ", JSON.parse(sessionStorage.getItem("auth")));
      
         sessionStorage.setItem("auth", JSON.stringify(response.data));


        // console.log("user new session : ", sessionStorage.getItem("auth"));
        const donne = sessionStorage.getItem("auth");
        //modifier aussi l'état
        setAuth(JSON.parse(donne));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const totalPrice = () => {
    axios
      .get(`http://localhost:8080/users/total/${auth.id}`)
      .then((response) => {
        console.log("<panier/> price Total : ", response.data);
        setPriceTT(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };



  if (auth != null) {
    return (
      <div className="mx-auto my-7 max-w-[87rem] ">
        <Link to="/pdf" className='w-[14rem] flex items-center mb-3 py-3 px-2 rounded-lg hover:bg-slate-50'> <span className='italic font-mono'>Télecharger pdf {">"} </span> <FaRegFilePdf size="30px" className='text-red-800 ms-4'/></Link>
        <div className="block lg:flex justify-between space-x-3">
          <div className="">
           
            <ListCommande user={auth} changeState={reloadUser} />
          </div>
          <div className="hidden lg:block">
            <Total user={auth} priceTt={priceTT} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="max-w-6xl mx-auto py-[10rem] ">
          
          <div className="italic text-center text-blue-700 font-black font-mono">
                     
            VEUILLEZ D'ABORD VOUS CONNECTEZ !
   
              <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ToastContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Panier
