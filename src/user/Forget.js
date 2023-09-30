import React ,{useState,useEffect} from "react";
import Bar from "./Bar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Forget() {

  const navigate = useNavigate() ; 

  const [login, setLogin] = useState({email : ""})

  useEffect(() => {
  
  }, [])

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login.email === "" ? notify() : postLogin();
  };


  const postLogin = () => {
    console.log("postLogin : ", login);
    axios
      .get(`http://localhost:8080/users/forgot/${login.email}` )
      .then((response) => {
        //parfois si l'email est vrai et mot de passe faux,
        //il trouve que response est vrai et essayer de le connecter
        //ce qui est faux, donc on évite çela
        if (response.data) {
          setLogin(response.data);

          sessionStorage.setItem("auth", JSON.stringify(response.data));

          console.log("<Forget/> user : ", JSON.parse(sessionStorage.getItem("auth")));

          navigate("/welcome");
        }

        console.log(" Email n'exist pas ");
        errorForgot();
        setLogin((prevState) => ({
          ...prevState,
          email: "",
        }));
      })
      .catch((error) => {
        errorForgot();
        console.log("error : ", error);
        setLogin((prevState) => ({
          ...prevState,
          email: "",
        }));
      });
  };

  const notify = () =>
    toast.warn("Veuillez saisir votre email ! ", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });


     const errorForgot = () =>
       toast.error("Ooups L'adresse email entrer n'existe pas !", {
         position: "top-left",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
       });


  return (
    <div className="">
      <Bar />
      <div className="mt-5 w-[500px] mx-auto  p-3">
        <div className="mt-5">
          <h1 className="uppercase font-mono font-semibond text-2xl font-bold">
            Mot de passe oublié
          </h1>

          <p>Assistance relative au mot de passe </p>

          <p>Saisir l'adresse e-mail de votre compte !</p>

          <form method="post" onSubmit={handleSubmit}>
            <div className="mt-10 relative">
              <input
                id="email"
                name="email"
                type="email"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="john@doe.com"
                value={login.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Address email*
              </label>
            </div>
            <div className="flex w-[500px] justify-between items-center my-4">
              <p className="text-white"> hidden</p>
              <p className="hover:cursor-pointer text-white hover:text-orange-700">
                Mot de passe oublié ?
              </p>
            </div>

            <div className="flex items-center justify-center mt-3">
              <button
                className={`upperase hover:cursor-not-allowed hover:bg-slate-600
             font-mono bg-black px-10 py-2 uppercase text-lg text-white font-semibold
             ${
               login.email === ""
                 ? "hover:cursor-not-allowed"
                 : "hover:cursor-pointer"
             }`}
              >
                valider
              </button>
            </div>
          </form>

          <div className="text-center mt-5 hover:cursor-pointer hover:text-blue-500">
            <Link to="/register">
              {" "}
              <p> Vous n'êtes membre ? , S'INSCRIRE</p>
            </Link>
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default Forget;
