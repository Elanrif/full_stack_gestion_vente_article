import React from "react";
import Slider from "react-slick";
import {BiCartAdd} from "react-icons/bi" ;
import Card from "./Card";
import CategoryItem from "./CategoryItem";
import Time from "./Time";/* 
import xbox from "/image/jeux_video/xbox Manette.jpg" ;  */

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="relative bg-pink-300 border-top border-pink-300">
        <div className="h-[500px] bg-pink-100 flex justify-evenly items-center">
          <div className="hidden ms-7 sm:block sm:w-[500px] bg-pink-300">
            <Slider {...settings}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Slider>
          </div>
          <div className=" bg-pink-800 max-w-[400px] text-white">
            "Chères clientes, nous avons le plaisir de vous informer de notre
            projet de gestion des ventes, conçu pour vous faciliter la vie lors
            de vos achats. Avec notre système amélioré, vous bénéficierez d'une
            navigation simplifiée, de promotions personnalisées et d'un service
            clientèle dédié. Profitez dès maintenant d'une expérience d'achat
            encore plus agréable.
          </div>
        </div>
        {/*  <div className="absolute top-2 max-w-[400px] py-1  mx-auto border-slate-800">
          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>
        </div> */}
      </div>

      <CategoryItem />

      <Time />
    </div>
  );
};

export default Main;
