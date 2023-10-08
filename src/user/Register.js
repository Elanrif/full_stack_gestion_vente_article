import React,{useState,useEffect,useContext} from "react";
import Bar from "./Bar";
import axios from "axios"
import { NavLink,Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../Context";

function Register() {

  const { userConnected, setUserConnected, userLoading, setUserLoading } = useContext(UserContext)

  const navigate = useNavigate();

  const [login, setLogin] = useState(
    {
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      phone : "",
      password_confirm : ""
    }
  );

  const [user, setUser] = useState()

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name ;


    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault()

    if(login.password != login.password_confirm)
    {
     error_password();

     setLogin((prevState)=>({
      ...prevState,
      password : "",
      password_confirm : "", 
     }))
    }
    else {

      login.firstName === "" || login.lastName === "" || login.email === "" || login.password ==="" || login.phone === "" ? notify() : postUser()
    }
  
   
  };


  const postUser = ()=>{
    
   
    setUser({
      firstName : login.firstName  ,
      lastName : login.lastName,
      email : login.email,
      phone : login.phone,
      password : login.password
    })


    axios
      .post("/user/register", {
        firstName: login.firstName,
        lastName: login.lastName,
        email: login.email,
        password: login.password,
        phone: login.phone
      })
      .then((res) => {

          sessionStorage.setItem("auth", JSON.stringify(res.data));
          setUserConnected(res.data);
          setUserLoading(true);

          setLogin((prevState) => ({
          ...prevState,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          password_confirm: "",
        }));

        navigate("/welcome");
      })
      .catch((error) => {
        console.log("error : ", error.message);
        notifyError();
        setLogin((prevState) => ({
          ...prevState,
          firstName: "",
          lastName: "",
          email: "",
          phone : "",
          password: "",
          password_confirm: "",
        }));
      });
  }


   const error_password = () =>
     toast.error("Votre mot de passe ne correspond pas !", {
       position: "top-left",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });


   const notify = () =>
     toast.warn("Veuillez s'il vous plaît remplir tout les champs !", {
       position: "top-left",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });

     const notifyError = () =>
       toast.error("Oops ! verifier à nouveau vos informations ", {
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
    <div className="mb-5">
      <Bar />
      <div className="mt-5 w-[500px] mx-auto  p-3">
        <div>
          <h1 className="uppercase mb-4 font-mono font-semibond text-2xl font-bold">
            créer un compte
          </h1>
          {/* <p className="my-10">
            Créez un compte pour libérer tous les privilèges offerts par The
            Ones. Si vous vous inscrivez pour la première fois, vous pouvez
            demander un cadeau de bienvenue exclusif.
          </p> */}

          <form method="post" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                onChange={handleChange}
                id="name"
                name="firstName"
                type="text"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="john@doe.com"
                value={login.name}
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Nom*
              </label>
            </div>

            <div className="mt-10 relative">
              <input
                onChange={handleChange}
                id="prenom"
                name="lastName"
                type="text"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="john@doe.com"
                value={login.prenom}
              />
              <label
                htmlFor="prenom"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                prénom*
              </label>
            </div>

            <div className="mt-10 relative">
              <input
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="john@doe.com"
                required
                value={login.email}
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Address email
              </label>
            </div>

            <div className="mt-10 relative">
              <input
                onChange={handleChange}
                id="phone"
                name="phone"
                type="text"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="john@doe.com"
                value={login.prenom}
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Num Téléphone
              </label>
            </div>

            <div className="mt-10 relative">
              <input
                onChange={handleChange}
                id="password"
                type="password"
                name="password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="Password"
                value={login.password}
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Mot de passe
              </label>
            </div>

            <div className="mt-10 relative">
              <input
                onChange={handleChange}
                id="password_confirm"
                name="password_confirm"
                type="password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="john@doe.com"
                value={login.password_confirm}
              />
              <label
                htmlFor="password_confirm"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Confirmer le mot de passe
              </label>
            </div>

            <div className="flex items-center justify-center mt-10">
              <button
                className={`upperase hover:cursor-not-allowed hover:bg-slate-600
             font-mono bg-black px-10 py-2 uppercase text-lg text-white font-semibold
             ${
               login.name === "" ||
               login.prenom === "" ||
               login.email === "" ||
               login.password === ""
                 ? "hover:cursor-not-allowed"
                 : "hover:cursor-pointer"
             }`}
              >
                créer un compte
              </button>
            </div>
          </form>

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

          {/* <ToastContainer
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
          /> */}

          <div className="text-center mt-5 hover:cursor-pointer hover:text-blue-500">
            <Link to="/login">
              {" "}
              <p> Déjà membre ? SE CONNECTER </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
