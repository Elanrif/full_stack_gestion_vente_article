import React, { useState, useEffect } from "react";
import Section from "../Main/Section";
import axios from "axios";

function Phone() {
  const items = ["Téléphone", "Lunette", "Jeu Xbox", "Ordinateur", "Tablette"];


  const [data, setData] = useState();

  const [user,setUser] = useState() ; 

  useEffect(() => {

    const data = sessionStorage.getItem("auth") 
    setUser(JSON.parse(data)) ; 

    datas();
  }, []);

  const datas = () => {
    axios
      .get("http://localhost:8080/articles/AllNotSellByCateogry/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      
      {data && <Section itemes={items} name={items[0]} articles={data} />}
    </div>
  );
}

export default Phone;
