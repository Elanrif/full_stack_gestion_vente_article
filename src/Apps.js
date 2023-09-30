import "./App.css";
import MiniHeader from "./MiniHeader";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Forget from "./user/Forget";
import Panier from "./Panier";
import Main from "./Main";
import Categories from "./Article/Categories";
import Men from "./Men";
import Dash from "./Test/Dash";
import Acceuil from "./Test/Acceuil";

function Apps() {
  return (
    <>
      <MiniHeader />
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/category/phone" element={<Categories catego="phone" />} />
        <Route path="/category/pc" element={<Categories catego="pc" />} />
        <Route
          path="/category/lunette"
          element={<Categories catego="lunette" />}
        />
        <Route path="/category/xbox" element={<Categories catego="xbox" />} />
      </Routes>

      <Routes path="/test">
        <Route path="/udemy" element={<Acceuil />}>
          <Route index path="start" element={<Dash />} />
          <Route />
        </Route>
      </Routes>

      
    </>
  );
}

export default Apps;
