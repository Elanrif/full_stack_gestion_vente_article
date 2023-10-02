import React from "react";
import { Link } from "react-router-dom";
import Mac from "./Mac";
import Asus from "./Asus";
import Lenovo from "./Lenovo";

export default function Computer() {
  return (
    <>
      <Mac />
      <div className="grid mt-5 lg:grid-cols-2 gap-3 grid-cols-1">
        <Asus />
        <Lenovo />
      </div>
    </>
  );
}
