import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

function Pdf2() {
  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);

  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:8080/articles/all")
        .then((res) => setUserdata(res.data))
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  return (
    <React.Fragment>
      <div className="">
        <div className="">
          <div className="flex justify-end mb-3"></div>

          <div ref={conponentPDF} className="px-10">
            <table className="w-full bg-white border border-purple-700">
              <thead>
                <tr className="bg-blue-400 text-white">
                  <th className="py-3">Id</th>
                  <th className="border border-slate-200">Type</th>
                  <th className="px-5 border border-slate-200">Categorie</th>
                  <th className="border border-slate-200">Prix</th>
                  <th className="px-3 border border-slate-200">Quantités</th>
                  <th className="px-14 border border-slate-200">Date</th>
                  <th className="border border-slate-200">Heure</th>
                </tr>
              </thead>
              <tbody>
                {userData &&
                  userData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-10 border-b border-blue-200">
                        {index + 1}
                      </td>
                      <td className="px-2 border-b border-blue-200">
                        {item.nom}
                      </td>
                      <td className="px-5 border-b border-blue-200">
                        {item.category.nom}
                      </td>
                      <td className="px-10 border-b border-blue-200">
                        {item.prix}
                        <span className="italic capitalize ms-2">DHS</span>{" "}
                      </td>
                      <td className="px-3 text-center font-black border-b border-blue-200">
                        {item.qte_art}
                      </td>
                      <td className="px-5 border-b border-blue-200">
                        {item.date.split("T")[0]}
                      </td>
                      <td className="px-5 border-b border-blue-200">
                        {item.date.split("T")[1].split("+")[0].split(".")[0]}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 ms-12">
            <button
              className="bg-cyan-300 text-white py-2 px-4 rounded-md hover:bg-cyan-400 transition-colors"
              onClick={generatePDF}
            >
              PDF
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Pdf2;
