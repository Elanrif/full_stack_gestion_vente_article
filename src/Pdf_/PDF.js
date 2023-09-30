import React, { useState, useEffect, useRef } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PDF() {

  const navigate = useNavigate() ; 

  const auth = JSON.parse(sessionStorage.getItem("auth"));  ; 

  const [priceTT, setPriceTT] = useState()
  
    const [commande, setCommande] = useState({
      qteCmd: null,
      total : null,
      user: null,
      articles : null ,
    });

    const [onclik, setOnclik] = useState(0);


      console.log("auth user in PDF  : ", auth )

  const conponentPDF = useRef();

  
  useEffect(() => {
    
    totalPrice() ; 
    notify(); 
  }, []);

 const [pdfCommande, setPdfCommande] = useState(0) ; 

  useEffect(()=>{
    console.log("<PDF/> use effect , generate PDF : ",pdfCommande) ; 
  pdfCommande !== 0 && generatePDF();
  pdfCommande !== 0 && update() ; 

  },[pdfCommande])

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => console.log("Data saved in PDF"),
  });


    const totalPrice = () => {
      axios
        .get(`http://localhost:8080/users/total/${auth.id}`)
        .then((response) => {
          console.log("<panier/> price Total : ", response.data);
          setPriceTT(response.data);

          console.log("<totalPrice/> Qte client : " , response.data.qte_client)
        })
        .catch((error) => {
          console.log(error.message);
        });
    };



    useEffect(() => {
      console.log("commande autre : ", commande);

      //comme ça ce useEffect ne s'executera pas , est c'est vérifié
     onclik !== 0 && commandes();
    }, [onclik]);

    /*   L'important on ne peut pas dans useEffect avoir le setState, et state. modifier le 
  on aura tojours le state avant modification. Pour cela on fait de cette façon.
  SOLUTION : LES SÉPARER */

  const qt_total =
    auth &&
    auth.articles &&
    auth.articles.reduce((count, item) => count + item.qte_client, 0);


    const update = () => {
      //setState
      setCommande({
        qteCmd: qt_total,
        total : priceTT,
        user: auth,
        articles : auth.articles
      });

      //mettre a jou useEffect
      setOnclik((prev) => prev + 1);

      console.log("::::: setCommande : ", {
        qteCmd: qt_total,
        total : priceTT,
        user: auth,
        articles : auth.articles
      });
    };

    const commandes = () => {
      // generatePDF();

      console.log(" commandes : "  , commande) 

      axios
        .post("http://localhost:8080/commandes", commande)
        .then((response) => {
          sessionStorage.clear();
          // console.log("clear session : ", sessionStorage.getItem("auth"));
          sessionStorage.setItem("auth", JSON.stringify(response.data.user));

          console.log("Commande return  : ", response.data);
        //  navigate("/panier")
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    const notify = () =>
      toast.success(
        `Le montant de : , vous sera retiré de votre compte. veuillez maintenant télécharger le pdf`,
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
            <div className="font-black font-serif text-2xl my-2">Facture : </div>
            <div className="my-3">
              <h1>
                Nom : <span className="italic font-mono">{auth.name}</span>
              </h1>
              <h1>
                Prenom : <span className="italic font-mono">{auth.prenom}</span>
              </h1>
              <h1>
                E-mail : <span className="italic font-mono">{auth.email}</span>
              </h1>
            </div>
            <table className="w-full bg-white border">
              <thead>
                <tr className="bg-blue-400 text-white">
                  <th className="py-3">Id</th>
                  <th className="py-3 px-5">Image</th>
                  <th className="border px-5 border-slate-200">Nom<span className="ms-1">Article</span></th>
                  <th className="px-5 border border-slate-200">Categorie</th>
                  <th className="border border-slate-200">Prix Unitaire</th>
                  <th className="px-3 border border-slate-200">Quantités</th>
                  <th className="px-8 border border-slate-200">Date</th>
                  <th className="border border-slate-200">Heure</th>
                  <th className="border bg-black text-white  border-slate-200">
                    <div className="flex ps-5 items-center space-x-1">
                      <div className="w-32">Prix Total : {priceTT}.00 dhs</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {auth &&
                  auth.articles &&
                  auth.articles.map((item, index) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="italic mt-5">
              <span className="text-blue-500">Merci cordialement !</span> , nous
              sommes ravis de vous voir les plutôt possible.
            </div>
          </div>

          <div className="mt-3 flex items-center space-x-1 ms-12">
            <button
              className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-400 transition-colors"
              onClick={()=>setPdfCommande(prev=>(prev+1))}
            >
             télécharger le PDF
            </button>
            <Link
              to="/panier"
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

export default PDF;
