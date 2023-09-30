import React from 'react'

function Data() {


    const data = (
      <table class="table-auto border-spacing-4 border-collapse bg-white border-purple-700  sm:block hidden">
        <thead>
          <tr className="bg-blue-400 text-white italic">
            <th className="py-5">Id</th>
            <th className="border border-slate-200">Type</th>
            <th className="px-5 border border-slate-200">Categorie</th>
            <th className="border border-slate-200">Prix</th>
            <th className="px-3 border border-slate-200">Quantités</th>
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
                <td className="px-2 border-b border-blue-200">{item.nom}</td>
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
                <td className="">
                  <div className="px-5 hover:text-white duratio-300 hover:bg-pink-300 bg-white flex space-x-3 p-3 rounded-xl">
                    <button className="px-3 hover:text-blue-700">
                      <FaEye size="24px" />
                    </button>
                    <button className="px-3 hover:text-blue-700">
                      <LuFolderEdit size="24px" />
                    </button>
                    <button className="px-3 hover:text-red-500">
                      <AiOutlineDelete size="24px" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );

    
  return (
   <>
   </>
  );
}

export default Data
