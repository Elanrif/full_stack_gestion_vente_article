import React ,{useState,useEffect} from 'react'
import Items from "./Items";
import Slides from "./Slides";
import Section from "./Section";
import axios from "axios";

function Aside({items}) {

const [data, setData] = useState();

useEffect(() => {
  Allarticles();
}, []);

const Allarticles  = () => {
  axios
    .get("http://localhost:8080/articles/AllNotSell")
    .then((response) => {
      console.log("phone : ", response.data);
      setData(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

  return (
    <div>
      <Items />
      <Slides />
      <Section itemes={items} articles={data}/>
    </div>
  );
}

export default Aside
