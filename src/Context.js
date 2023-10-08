import React ,{createContext} from "react"

export  const UserContext = createContext(null)

/* listes des articls selon la category */
export const  ArticleContext = createContext(null)

/* les articles de l'user connecté */
export const ArticleUserContext = createContext(null) 

/* lisete des article au Panier */
export const BasketUserContext = createContext(null)