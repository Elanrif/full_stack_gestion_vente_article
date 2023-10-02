import React, { useState, useContext, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Acceuil() {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
}

export default Acceuil;
