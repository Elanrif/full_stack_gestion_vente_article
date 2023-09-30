import React,{useState,useEffect} from "react";
import { FaEye } from "react-icons/fa";
import { LuFolderEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios"
import ReactPaginate from "react-paginate";

function Articles() {

  const [articles, setArticles] = useState()
  const [pageable, setPageable] = useState({
    totalPages : null,
    totalElements : null,
  })

  //on veut changer useEffect apres cette modification , pas a chaque fois lorsque on a monté le composant

  //nombre total des pages de l'entités
  const [count, setCount] = useState()

  //la page sélectionner
  const [selected, setSelected] = useState()

  useEffect(() => {
  
    initialPages()
  }, [])

   useEffect(() => {
     selectedPages();
   }, [count]);


  const initialPages = ()=>{

        axios
          .get("http://localhost:8080/articles", {
            params: {
              page: 0,
              size: 10,
            },
          })
          .then((response) => {
            console.log("Liste des articles :", response.data.content);
            setArticles(response.data.content);
            setPageable({
            totalPages: response.data.totalPages,
            totalElements: response.data.totalElements,
          });
    
          console.log(" number pages : ", pageable.totalPages, " number of elements ", pageable.totalElements)

          setCount(response.data.totalPages);

          })
          .catch((error) => {
            console.log("Erreur :", error.message);
          });
  }



   const selectedPages = (page) => {
     axios
       .get("http://localhost:8080/articles/admin", {
         params: {
           page: page,/* notre state */
           size: 8,
         },
       })
       .then((response) => {
         console.log("Liste des articles :", response.data.content);
         setArticles(response.data.content);
         setPageable({
           totalPages: response.data.totalPages,
           totalElements: response.data.totalElements,
         });

         console.log("button selectionné :" , selected)  ; 
       })
       .catch((error) => {
         console.log("Erreur :", error.message);
       });
   };

  const handlePageClick = (e)=>{

    //on modifie notre state , qui prendra a chaque fois la valeur selectionner
    setSelected(e.selected) 
    console.log("page click : ",e.selected)
    selectedPages(e.selected) ; 

    console.log("handlePageClick:: numéro cliqué --> ",e.selected)
  }

  return (
    <div className="min-w-6xl mx-auto">
      <div className="mb-5 mt-7">
        <h1 className="mb-5 text-blue-700"> Admin {">"} Articles</h1>
           <div className="my-3">
          <span className="italic font-semibold text-slate-500">Nombre{"s"} totales d'articles : {pageable.totalElements}</span>
        </div>
        <button className="hover:bg-blue-400 hover:cursor-not-allowed opacity-50 hover:text-white duration-500 bg-green-400 text-white  rounded-lg px-3 py-2 font-semibold uppercase">
          Ajouter
        </button>

        <div className="my-2">
         {
          pageable.totalPages &&  <ReactPaginate
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
            pageLinkClassName={"rounded px-3 hover:px-3 hover:bg-slate-300 py-1"}
            previousClassName={"text-blue-500 hover:bg-slate-300 hover:rounded-xl hover:text-black  px-2 py-1 cursor-pointer"}
            previousLinkClassName={"rounded px-2 py-1"}
            nextClassName={"text-blue-500 hover:bg-slate-300 hover:rounded-xl hover:text-black  px-2 py-1 cursor-pointer"}
            nextLinkClassName={"rounded px-2 py-1"}
            breakClassName={"px-2"}
            breakLinkClassName={""}
            activeClassName={"bg-blue-500 text-white px-2 py-1 rounded"}
          />
         }
        </div>
      </div>

      <table class="mb-5 btable-auto border-spacing-4 border-collapse bg-white border-purple-700  sm:block hidden">
        <thead>
          <tr className="bg-blue-400 text-white italic">
            <th className="py-5">Id</th>
             <th className="px-5 border border-slate-200">Image</th>
            <th className="border border-slate-200">Type</th>
            <th className="px-5 border border-slate-200">Categorie</th>
            <th className="border border-slate-200">Prix</th>
            <th className="px-5 text-center border bg-blue-300">Qte Restant</th>
            <th className="px-5 text-center  border border-slate-200">Qte Total</th>
            <th className="px-14 border border-slate-200">Date</th>
            <th className="border border-slate-200">Heure</th>
            <th className="border border-slate-200">Options</th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((item, index) => (
              <tr>
                <td className="px-10 border-b border-blue-200">{index + 1}</td>
                 <td className="text-center border-b border-blue-200">
                  <img src={item.image} className="mx-auto h-14 w-14" />
                </td>
                <td className="px-2 border-b border-blue-200">{item.nom}</td>
                <td className="px-5 border-b border-blue-200">
                  {item.category.nom}
                </td>
                <td className="px-10 border-b border-blue-200">
                  {item.prix}
                  <span className="italic capitalize ms-2">DHS</span>{" "}
                </td>
                  <td className="px-3 bg-cyan-50 text-center font-semibold border-b border-blue-200">
                  {  item.qte_art - item.qte_client}
                </td>
                <td className="px-3 text-center font-semibold border-b border-blue-200">
                  {item.qte_art}
                </td>
                <td className="px-5 border-b border-blue-200">
                  {item.date.split(" ")[0]}
                </td>
                <td className="px-5 border-b border-blue-200">
                  {item.date.split(" ")[1]}
                </td>
                <td className="">
                  <div className="group hover:cursor-not-allowed px-5 hover:text-white duratio-300  opacity-100 hover:bg-pink-100 bg-white flex space-x-3 p-3 rounded-xl">
                    <button className="group-hover:cursor-not-allowed px-3 hover:text-blue-700">
                      <FaEye size="24px" />
                    </button>
                    <button className="group-hover:cursor-not-allowed px-3 hover:text-blue-700">
                      <LuFolderEdit size="24px" />
                    </button>
                    <button className="group-hover:cursor-not-allowed px-3 hover:text-red-500">
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

export default Articles;
