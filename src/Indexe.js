import React, { useState ,useEffect } from "react";
import App from "./App";
import axios from "axios";
import { UserContext } from "./Context";

function Indexe() {
 
  const [auth, setAuth] = useState();

  /* const data = () =>
    axios.get("http://localhost:8080/users/connected")
    .then((response) => {
      const userData = response.data; // Supposons que userData est une collection de tableaux

      setAuth([ userData]);
    }); */

    const data = () => {
      axios
        .get("http://localhost:8080/users/connected")
        .then((response) => {
          const data = response.data;
          setAuth(data);

        
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

  /*   useEffect(() => {
      data();
    }, []); */ //ne rien pas mette pour éviter que ça soit boucler tout le temps 



  return (
    <UserContext.Provider value={auth}>
      <App />
    </UserContext.Provider>
  );
}

export default Indexe;
