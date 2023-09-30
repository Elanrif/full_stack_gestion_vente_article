import React, { useEffect,useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../Context";


function Welcome() {

 const [user, setUser] = useState()
  
  useEffect(() => {

    const connected = sessionStorage.getItem("auth");

    const auth = JSON.parse(connected) 
   
    setUser(auth) 
  
    notify() 
  }, [])

  const notify = () =>
    toast.success("Connecté avec Succès !", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });



  return (
    <React.Fragment>
      <div className="flex items-center jusitfy-center min-h-[40rem]">
        <div className="max-w-6xl mx-auto text-2xl">
          <img src="/image/welcome/welcome.jpg" />
          <h1 className="mt-5 text-center">
            Mr/Mll
            <span className="text-blue-300 font-semibold font-mono">
              : {user && user.name } { user && user.prenom}
            </span>
          </h1>
          <div className="my-3 text-slate-400">
            Commencer a faire vos achats , au plus vite pour trouver des
            produits des
            <span className="text-pink-400 font-semibold">
              meilleurs qualités
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
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
    </React.Fragment>
  );
}

export default Welcome;
