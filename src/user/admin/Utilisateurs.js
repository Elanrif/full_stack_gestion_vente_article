import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { LuFolderEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import {Link} from "react-router-dom"
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Utilisateurs() {

  const [users, setUsers] = useState();
  const [pageable, setPageable] = useState({
    totalPages: null,
    totalElements: null,
  });

  //on veut changer useEffect apres cette modification , pas a chaque fois lorsque on a monté le composant

  //nombre total des pages de l'entités
  const [count, setCount] = useState();

  //la page sélectionner
  const [selected, setSelected] = useState();
  const[bu,setBu] = useState(false) ; /* bu : buttonUpdate */

  useEffect(() => {
    initialPages();
  }, []);

  useEffect(() => {
    selectedPages();
  }, [count,bu]);

  const initialPages = () => {
    axios
      .get("http://localhost:8080/users/admin", {
        params: {
          page: 0,
          size: 10,
        },
      })
      .then((response) => {
        console.log("Liste des utilisateurs :", response.data.content);
        setUsers(response.data.content);
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
      .get("http://localhost:8080/users/admin", {
        params: {
          page: page /* notre state */,
          size: 8,
        },
      })
      .then((response) => {
        console.log("Liste des utilisateurs :", response.data.content);
        setUsers(response.data.content);
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


  const [show, setShow] = useState(false)

  const deleteUser = (id)=>{

    console.log(" id User in delete : ", id)

    const confirmed = window.confirm("êtes vous sûr de supprimer l'utilisateur ? ");

    if (confirmed) {
      
      axios.delete(`http://localhost:8080/users/${id}`).then((response) => {
      
      setBu(!bu) 

      notify();

      })
      .catch((error)=>{
        console.log("erreur : ", error.message)
      });
    }
    else{
      Notnotify();
    }


  }

    const notify = () =>
      toast.success("L'utilisateur a été supprimé avec succès!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  
      const Notnotify = () =>
        toast.info("Vous avez annulé la suppression !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

  return (
    <div className="min-w-6xl mx-auto">
      <div className="mb-5 mt-2">
        <h1 className="text-blue-700"> Admin {">"} Utilisateurs</h1>
        <div className="mt-3 mb-5">
          <span className="italic font-semibold text-slate-500">
            Nombre{"s"} totales d'utilisateurs : {pageable.totalElements}
          </span>
        </div>
        <Link  to="/admin/addUser" className="hover:bg-green-500  hover:text-white duration-500 bg-blue-600 text-white  rounded-lg px-3 py-2 font-semibold uppercase">
          Ajouter
        </Link>

        <div className="mt-5 mb-5">
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
            <th className="border border-slate-200">Nom</th>
            <th className="px-5 border border-slate-200">Prenom</th>
            <th className="border border-slate-200">E-mail</th>
            <th className="px-3 border border-slate-200">Mot de passe</th>
            <th className="px-3 border border-slate-200">Options</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, index) => (
              <tr>
                <td className="px-10 border-b border-blue-200">{index + 1}</td>
                <td className="px-2 border-b border-blue-200">{item.name}</td>
                <td className="px-5 border-b border-blue-200">{item.prenom}</td>
                <td className="px-10 border-b border-blue-200">{item.email}</td>
                <td className="px-10 border-b border-blue-200">
                  {show ? item.password : "***************"}
                </td>

                <td className="">
                  <div className="px-5 hover:text-white duratio-300 hover:bg-pink-300 bg-white flex space-x-3 p-3 rounded-xl">
                    <button className="px-3 hover:text-blue-700">
                      <FaEye size="24px" onClick={() => setShow(!show)} />
                    </button>
                    <Link
                      to={`/admin/updateUser/${item.id}`}
                      className="px-3 hover:text-blue-700"
                    >
                      <LuFolderEdit size="24px" />
                    </Link>
                    <button className="px-3 hover:text-red-500">
                      <AiOutlineDelete
                        size="24px"
                        onClick={() => deleteUser(item.id)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

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


    </div>
  );
}

export default Utilisateurs;
