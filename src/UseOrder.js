import React, { useState, useEffect, useRef } from "react";
import { useNavigate,useParams, Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UseOrder() {

    //aller chercher cette commande avec l'id du paramètre 
    const {orderId} = useParams() ; 

    console.log(":::::::: useParams :::::::", orderId) 
  const navigate = useNavigate();

  const [usercommande, setUsercommande] = useState();

  const conponentPDF = useRef();

  useEffect(() => {
    commandeUser();
  
  }, []);

  const [pdfCommande, setPdfCommande] = useState(0);

  useEffect(() => {
    console.log("<PDF/> use effect , generate PDF : ", pdfCommande);
    pdfCommande !== 0 && generatePDF();
    pdfCommande !== 0 && notify();
  }, [pdfCommande]);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => console.log("Data saved in PDF"),
  });

  const commandeUser = () => {
    axios
      .get(`http://localhost:8080/commandes/${orderId}`)
      .then((response) => {
        console.log("<panier/> price Total : ", response.data);
        console.log(" commande User : " , response.data)
        setUsercommande(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

 

  const notify = () =>
    toast.success(
      `Pdf télécharger avec succès !`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

  return (
    <React.Fragment>
      <div className="">
        <div className="">
          <div className="flex justify-end mb-3"></div>

          <div ref={conponentPDF} className="px-10">
            <div className="font-black font-serif text-2xl my-2">
              Numero Commande : {`${usercommande && usercommande.id}`}
            </div>
            <div className="my-3">
              <h1>
                Nom :{" "}
                <span className="italic font-mono">
                  {usercommande && usercommande.user.name}
                </span>
              </h1>
              <h1>
                Prenom :{" "}
                <span className="italic font-mono">
                  {usercommande && usercommande.user.prenom}
                </span>
              </h1>
              <h1>
                E-mail :{" "}
                <span className="italic font-mono">
                  {usercommande && usercommande.user.email}
                </span>
              </h1>
            </div>
            <table className="w-full bg-white border">
              <thead>
                <tr className="bg-blue-400 text-white">
                  <th className="py-3">Id</th>
                  <th className="py-3 px-5">Image</th>
                  <th className="border px-5 border-slate-200">
                    Nom<span className="ms-1">Article</span>
                  </th>
                  <th className="px-5 border border-slate-200">Categorie</th>
                  <th className="border border-slate-200">Prix Unitaire</th>
                  <th className="px-3 border border-slate-200">Quantités</th>
                  <th className="px-10 border border-slate-200">Date</th>
                  <th className="border border-slate-200">Heure</th>
                  <th className="border bg-black px-5 text-white  border-slate-200">
                    <div className="flex ps-5 items-center space-x-1">
                      <div className="w-52">
                        Prix Total : {usercommande && usercommande.total}.00 DHS
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {usercommande &&
                  usercommande.articles &&
                  usercommande.articles.map((item, index) => (
                    <tr key={index}>
                      <td className="px-5 border-b border-blue-200">
                        {index + 1}
                      </td>
                      <td className="px-2 text-center border-b border-blue-200">
                        <img src={item.image} className="h-14 w-14" />
                      </td>
                      <td className="px-2 text-center border-b border-blue-200">
                        {item.nom}
                      </td>
                      <td className="px-5 border-b border-blue-200">
                        {item.category.nom}
                      </td>
                      <td className="px-3 border-b border-blue-200">
                        {item.prix}
                        <span className="italic capitalize ms-2">DHS</span>{" "}
                      </td>
                      <td className="px-3 text-center border-b border-blue-200">
                        x {item.qte_client}
                      </td>
                      <td className="px-3 border-b border-blue-200">
                        {item.date.split(" ")[0]}
                      </td>
                      <td className="px-5 border-b border-blue-200">
                        {item.date.split(" ")[1]}
                      </td>
                      <td className="px-5 text-center bg-blue-50 border-b border-blue-200">
                        <span className="italic font-mono "> {item.prix * item.qte_client}.00 DHS</span> 
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="italic mt-5">
              <span className="text-blue-500">Bonjour Mr/Mlle l'Admin</span> ,
              nous sommes ravis de vous voir les plutôt possible.
            </div>
          </div>

          <div className="mt-3 flex items-center space-x-1 ms-12">
            <button
              className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-400 transition-colors"
              onClick={() => setPdfCommande((prev) => prev + 1)}
            >
              télécharger le PDF
            </button>
            <Link
              to="/admin/orders"
              className="bg-black hover:bg-green-400 text-white py-2 rounded-md px-2"
            >
              Retour {"<<"}
            </Link>
          </div>
        </div>

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
    </React.Fragment>
  );
}

export default UseOrder;
