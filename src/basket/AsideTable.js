import React ,{useState,useEffect,useContext} from 'react'
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox"
import axios from 'axios'
import { BasketUserContext,UserContext } from '../Context'
import DialogBasket from './DialogBasket'

function AsideTable() {

    const { userConnected, setUserConnected, userLoading, setUserLoading } =  useContext(UserContext)

    //on va utiliser via le context les articles au Panier de l'user connecté.
    const { allBasketUser, setAllBasketUser } = useContext(BasketUserContext);

    const plusUpdateShoppingCart = (basket) => {
     
      /* vu qu'on va ajouter +1 donc < strict */
      basket.qte_article < basket.article.qte_total &&
           axios
             .put("/basket/update-shopping-cart", {
               ...basket,
               id: basket.id ,
               prix_total: (basket.qte_article + 1) * basket.prix_unitaire,
               qte_article: basket.qte_article + 1,
             })
             .then((res) => {

              //à chaque modification , mettre à jour le context BasketAllUserContext
               loadAllBasketsUserConnected()
             })
             .catch((err) => {
               console.log("err : ", err)
             })
    }

  const minusUpdateShoppingCart = (basket) => {
   
    /* vu qu'on va faire -1 , donc > strict */
    basket.qte_article > 1 && axios
       .put("/basket/update-shopping-cart", {
         ...basket,
         id: basket.id,
         prix_total: (basket.qte_article - 1) * basket.prix_unitaire,
         qte_article: basket.qte_article - 1,
       })
       .then((res) => {
         //sur chaque modification mettre à jour le context BasketAllUserContext
         loadAllBasketsUserConnected()
       })
       .catch((err) => {
         console.log("err : ", err);
       })
  }

    const loadAllBasketsUserConnected = () => {
      axios
        .get(`/basket/find-basket-from-user/${userConnected.id}`)
        .then((re) => {
          //mettre à jour le state allBasketUser via le context.
          setAllBasketUser(re.data)
        })
        .catch((error) => {
          console.log("error : ", error)
        })
    }

  return (
    <div className="pt-12">
       
        <div className="bg-white p-4 shadow rounded-xl mb-4">
          <table className="table-fixed w-full">
            <thead>
              <tr className="border-b text-slate-500 border-gray-300">
                <th className="py-3 text-start font-thin"></th>
                <th className="py-3 text-start font-thin">Article</th>
                <th className="py-3 text-start font-thin">Prix</th>
                <th className="py-3 text-start font-thin">Quantité</th>
                <th className="py-3 text-start font-thin">Sous-total</th>
              </tr>
            </thead>
            <tbody>
              {allBasketUser.map((item, index) => (
                <tr className="py-5 border-b border-gray-300">
                  <React.Fragment key={index}>
                    <td className="">
                      <img
                        src="/image/img/ipad/tablette.jpg"
                        alt="Miniature"
                        className="block w-[6rem] h-[6rem] "
                      />
                     
                      <DialogBasket basket={item}/>

                    </td>
                    <td className=" text-blue-400">{item.article.name}</td>
                    <td> {item.article.prix},00 Dhs </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <IndeterminateCheckBoxIcon
                          sx={{ fontSize: 40 }}
                          className="hover:cursor-pointer text-orange-500"
                          onClick={()=>{minusUpdateShoppingCart(item)}}
                        />

                        <p>{item.qte_article}</p>

                        <AddBoxIcon
                          sx={{ fontSize: 40 }}
                          className="hover:cursor-pointer text-orange-500"
                          onClick={()=>plusUpdateShoppingCart(item)}
                        />
                      </div>
                    </td>
                    <td> {item.prix_total},00 Dhs </td>
                  </React.Fragment>
                </tr>
              ))}

              {/* Ajoutez autant de lignes que nécessaire */}
            </tbody>
          </table>
        </div>
     
    </div>
  );
}

export default AsideTable



