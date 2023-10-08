import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  return (
    <div className="h-[7rem] bg-white">
      <div className="max-w-[64rem] pt-7 mx-auto">
        <div className="flex items-center space-x-2">
          <ShoppingCartIcon sx={{ fontSize: 60 }} className="text-orange-500" />
          <p className="text-2xl uppercase font-light">Mon Panier</p>
        </div>
      </div>
    </div>
  );
}


