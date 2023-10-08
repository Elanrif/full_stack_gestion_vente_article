import React, { useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { RxUpdate } from "react-icons/rx";
import DeleteArticle from "./DeleteArticle";
import { FcInfo } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticleFilter from "./ArticleFilter";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { UserContext } from "../../../Context";
import ArticleByCat from "./ArticleByCat";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
/* les valeurs de l'id de column , ET de la function createData doivent avoir les mêmes noms correspondantes, 
sinon ça ne marchera pas. */
const columns = [
  { id: "key", label: "#", minWidth: null },
  { id: "image", label: "Image", minWidth: 10 },
  { id: "name", label: "Nom article", minWidth: 10 },
  { id: "prix", label: "prix", minWidth: null },
  { id: "total", label: "Quantité", minWidth: null },
  { id: "remaining", label: "Qte Rest", minWidth: null },
  { id: "date", label: "date", minWidth: null },
  { id: "option", label: "OPTION", minWidth: null },
  /*   { id: "update", label: "", minWidth: null },
  { id: "view", label: "", minWidth: null }, */
];

const handleClickTable = (e) => {
  console.log("vous avez supprimer : ", e);
};

/*<DeleteUser membre ={"Elanrif"}/>  */
const opt = (e) => (
  <div className="flex items-center">
    <DeleteArticle user={e} />

    <button>
      <Link to={`/dashboard/admin/user/update/${e.id}`}>
        <BootstrapTooltip title="Modifier">
          <div className="group w-[3rem] flex items-center justify-center">
            <RxUpdate
              size="1.3rem"
              className="text-blue-700 group-hover:text-cyan-500 duration-300"
            />
          </div>
        </BootstrapTooltip>
      </Link>
    </button>

    <button onClick={() => handleClickTable(e)}>
      <BootstrapTooltip title="Information">
        <div className="group flex items-center justify-center">
          <FcInfo
            size="1.3rem"
            className="text-blue-700 group-hover:text-blue-500 duration-300"
          />
        </div>
      </BootstrapTooltip>
    </button>
  </div>
);

function createData(key, image,name, prix, total, remaining, date, option) {
  return { key, image,name, prix, total, remaining, date,  option };
}

export default function Articles() {

  const { userConnected } = useContext(UserContext);

  const [articles, setArticles] = React.useState([]);
  const [categories,setCategories] = React.useState([]) ;
  const [search, setSearch] = useState({
    response: "",
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    findAllArticles()
    findAllCategories()
  }, []);

  const findAllArticles = () => {
    axios
      .get("/article/find-all")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

    /* filter ceux qui ont des articles.  */
     const findAllCategories = () => {
       axios
         .get("/category/find-all")
         .then((response) => {
           // on va filter par ceux qui ont des events

           const filteredData = response.data.filter(
             (item) => item.articles.length > 0
           );
           // .length , car !=null , est faux : null # [] (tableau  vide.)

           setCategories(filteredData);
           console.log(" FILTER category : ", filteredData);
         })
         .catch((error) => {
           console.log(error);
         });
     };

     /*à chaque fois on va cliquer sur ArticleByCat une categorie, on va retourner une liste d'article par category */
     const handleDisplayArticles = (category) => {
       setArticles(category.articles);
     };

  const rows = articles
    /* .sort((a, b) => b.id - a.id) ; pour éviter qu'après le filtre il fait le triage à cause de ça on verra pas nos filtre */
    .map((item, index) =>
      createData(
        index + 1,
        item.image,
        item.name.slice(0, 60),
        item.prix,
        item.total,
        item.remaining,
        item.date,
        opt(item)
      )
    );

  const handlChange = (e) => {
    const { name, value } = e.target;

    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));

    axios
      .get("/article/findByNameContainingOrDescpContaining", {
        params: {
          name: `${value}`,
        },
      })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sortByDateAsc = () => {
    axios
    .get("/article/findAllByOrderByDateAsc")
    .then((response) => {
      setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sortByDateDesc = () => {
    axios
    .get("/article/findAllByOrderByDateDesc")
    .then((response) => {
      setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sortByNameAsc = () => {
    axios
    .get("/article/findAllByOrderByNameAsc")
    .then((response) => {
      setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sortByNameDesc = () => {
    axios
    .get("/article/findAllByOrderByNameDesc")
    .then((response) => {
      setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="ms-3 mt-4 text-md uppercase text-2xl font-black text-slate-500">
            liste des Articles
          </h1>
          <Link to="/dashboard/admin/association/save">
            <button
              className="px-2 py-1 my-3 ms-3 capitalize text-white rounded-lg hover:bg-blue-400 bg-blue-400 duration-300 ease-in-out"
              disabled
            >
              ajouter
            </button>
          </Link>
        </div>

        <div className="flex items-center space-x-1">
          <ArticleFilter
            sortByDateAsc={sortByDateAsc}
            sortByDateDesc={sortByDateDesc}
            sortByNameAsc={sortByNameAsc}
            sortByNameDesc={sortByNameDesc}
          />
          <ArticleByCat
            categories={categories && categories} /* liste des categories filter qui ont des articles va être passé comme params a handleDisplayArticles */
            articles={handleDisplayArticles} /* retourne une article selon la category,il prendra un paramètre category */
            display={findAllArticles} /* tout les articles , pour le boutton Reset sur ArticleByCat */
          />
        </div>

        <div className="me-4">
          <form className="relative group">
            {" "}
            <SearchRoundedIcon className="absolute group-hover:text-blue-500 duration-300 text-slate-500 top-3 left-3" />
            <input
              className="w-[20rem] ps-12  bg-slate-50 focus:bg-white border ring-offset-blue-400 px-3 py-2 rounded-xl focus:ring-1 ring-offset-1 focus:outline-none duration-300"
              placeholder="Rechercher par Nom/Description..."
              value={search.data}
              name="response"
              onChange={handlChange}
            />
          </form>
        </div>
      </div>

      <TableContainer className="border-2 border-slate-200">
        <Table>
          <TableHead>
            <TableRow className="bg-slate-50">
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="text-center"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {" "}
                    {/* key= {row.code} */}
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={index} /* key={column.id} */
                          align={column.align}
                          className="min-w-[1rem] text-center"
                        >
                          {column.id === "image" ? (
                            <img
                              /*  src={value} */
                              src={
                                value != null
                                  ? `data:image/jpeg;base64,${value}`
                                  : `/image/users/images.png`
                              }
                              /*  src={`data:image/jpeg;base64,${value}`} */
                              alt="Image"
                              className="w-20  h-16"
                            />
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                          <div></div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[8, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
