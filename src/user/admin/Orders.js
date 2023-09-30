import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { LuFolderEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Orders() {
  const [commandes, setCommandes] = useState();
  const [pageable, setPageable] = useState({
    totalPages: null,
    totalElements: null,
  });

  //on veut changer useEffect apres cette modification , pas a chaque fois lorsque on a monté le composant

  //nombre total des pages de l'entités
  const [count, setCount] = useState();

  const [cmd, setCmd] = useState(0)
  //la page sélectionner
  const [selected, setSelected] = useState();

  useEffect(() => {
    initialPages();
  }, []);



  useEffect(() => {

   cmd != 0 && selectedPages();
   selectedPages()  ;
  }, [count,cmd]);

  const initialPages = () => {
    axios
      .get("http://localhost:8080/commandes/admin", {
        params: {
          page: 0,
          size: 10,
        },
      })
      .then((response) => {
        console.log("Liste des commandes :", response.data.content);
        setCommandes(response.data.content);
        setPageable({
          totalPages: response.data.totalPages,
          totalElements: response.data.totalElements,
        });

        console.log(
          " number pages : ",
          pageable.totalPages,
          " number of elements ",
          pageable.totalElements
        );

        setCount(response.data.totalPages);
      })
      .catch((error) => {
        console.log("Erreur :", error.message);
      });
  };

  const selectedPages = (page) => {
    axios
      .get("http://localhost:8080/commandes/admin", {
        params: {
          page: page /* notre state */,
          size: 8,
        },
      })
      .then((response) => {
        console.log("Liste des Commandes :", response.data.content);
        setCommandes(response.data.content);
        setPageable({
          totalPages: response.data.totalPages,
          totalElements: response.data.totalElements,
        });

        console.log("button selectionné :", selected);
      })
      .catch((error) => {
        console.log("Erreur :", error.message);
      });
  };

  const handlePageClick = (e) => {
    //on modifie notre state , qui prendra a chaque fois la valeur selectionner
    setSelected(e.selected);
    console.log("page click : ", e.selected);
    selectedPages(e.selected);

    console.log("handlePageClick:: numéro cliqué --> ", e.selected);
  };

   const notify = () =>
     toast.success("Commande supprimée avec succès !", {
       position: "top-left",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });

  const deleteCommande = (id)=>{

    axios
    .delete(`http://localhost:8080/commandes/${id}`)
    .then((response)=>{

      setCmd((prev)=>prev+1)
      notify() ; 


    })
    .catch((error)=>{
      console.log("erreur : " , error.message) 
    })
    ;

    console.log("id :  " , id) ; 

  }
  return (
    <div className="min-w-6xl mx-auto">
      <div className="mb-5 mt-7">
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <h1 className="mb-5 text-blue-700"> Admin {">"} Commandes</h1>
        <div className="my-3">
          <span className="italic font-semibold text-slate-500">
            Nombre{"s"} totales de commandes : {pageable.totalElements}
          </span>
        </div>
        <button className="hover:bg-blue-300 opactity-20 hover:cursor-not-allowed hover:text-white duration-500 bg-green-300 text-white  rounded-lg px-3 py-2 font-semibold uppercase">
          Ajouter
        </button>

        <div className="my-2">
          {pageable.totalPages && (
            <ReactPaginate
              previousLabel={"Précédent"}
              nextLabel={"Suivant"}
              breakLabel={"..."}
              pageCount={pageable.totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={
                "border py-1 max-w-[32rem] rounded-xl bg-white flex justify-center items-center space-x-2"
              }
              pageClassName={"text-blue-500 py-1 cursor-pointer"}
              pageLinkClassName={
                "rounded px-3 hover:px-3 hover:bg-slate-300 py-1"
              }
              previousClassName={
                "text-blue-500 hover:bg-slate-300 hover:rounded-xl hover:text-black  px-2 py-1 cursor-pointer"
              }
              previousLinkClassName={"rounded px-2 py-1"}
              nextClassName={
                "text-blue-500 hover:bg-slate-300 hover:rounded-xl hover:text-black  px-2 py-1 cursor-pointer"
              }
              nextLinkClassName={"rounded px-2 py-1"}
              breakClassName={"px-2"}
              breakLinkClassName={""}
              activeClassName={"bg-blue-500 text-white px-2 py-1 rounded"}
            />
          )}
        </div>
      </div>

      <table class="table-auto border-spacing-4 border-collapse bg-white border-purple-700  sm:block hidden">
        <thead>
          <tr className="bg-blue-400 text-white italic">
            <th className="py-5">Id</th>
            <th className="border px-10 border-slate-200">nom</th>
            <th className="px-5 border border-slate-200">prenom</th>
            <th className="border border-slate-200">email</th>
            <th className="px-0 border border-slate-200">qte_commander</th>
            <th className="px-5 text-center bg-blue-300 border border-slate-200">
              Prix_total
            </th>
            <th className="px-14 border border-slate-200">Date</th>
            <th className="border border-slate-200">Heure</th>
            <th className="border border-slate-200">Options</th>
          </tr>
        </thead>
        <tbody>
          {commandes &&
            commandes.map((item, index) => (
              <tr>
                <td className="px-10 border-b border-blue-200">{index + 1}</td>
                <td className="px-2 border-b border-blue-200">
                  {item.user.name}
                </td>
                <td className="px-5 border-b border-blue-200">
                  {item.user.prenom}
                </td>
                <td className="px-2  border-b border-blue-200">
                  {item.user.email}
                </td>
                <td className="px-0 text-center font-semibold border-b border-blue-200">
                  {item.qteCmd}
                </td>
                <td className="px-2 text-center font-semibold border-b border-blue-200">
                  {item.total},00Dhs
                </td>
                <td className="px-5 border-b border-blue-200">
                  {item.dateCmd.split(" ")[0]}
                </td>
                <td className="px-5 border-b border-blue-200">
                  {item.dateCmd.split(" ")[1]}
                </td>
                <td className="opacity-100 w-[3rem]">
                  <div className="px-5 hover:text-white duratio-300 hover:bg-pink-300 bg-white flex space-x-1 p-2  rounded-xl">
                    <Link
                      to={`/admin/orders/${item.id}`}
                      className="px-1 hover:text-blue-700"
                    >
                      <FaEye size="24px" />
                    </Link>
                    <button className="px-1 hover:cursor-not-allowed hover:text-blue-200">
                      <LuFolderEdit size="24px" />
                    </button>
                    <button className="px-1 hover:cursor-not-allowed hover:text-red-200">
                      <AiOutlineDelete size="24px" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
