import React,{useState,useEffect,useContext} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { UserContext } from "../Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const regions = [
  "Tanger-Tétouan-Al Hoceïma",
  "Fès-Meknès",
  "Rabat-Salé-Kénitra",
  "Béni Mellal-Khénifra",
  "Casablanca-Settat",
  "Marrakech-Safi",
  "Guelmim-Oued Noun",
  "Laâyoune-Sakia El Hamra",
  "Dakhla-Oued Ed-Dahab",
];

const villes = [
  "Casablanca",
  "Rabat",
  "Fès",
  "Marrakech",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kenitra",
  "Tetouan",
  "Safi",
  "Mohammedia",
];




function getStylesRegion(region, regionName, theme) {
  return {
    fontWeight:
      regionName.indexOf(region) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getStylesVille(ville, villeName, theme) {
  return {
    fontWeight:
      villeName.indexOf(ville) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Form() {

      const theme = useTheme();

      const [personName, setPersonName] = React.useState([])
      const [regionName, setRegionName] = React.useState("")
      const [villeName, setVilleName] = React.useState("")

      const { userConnected, setUserConnected } = useContext(UserContext);

      const [auth,setAuth] = useState(
        {
            id : userConnected.id , 
            firstName : userConnected.firstName,
            lastName : userConnected.lastName,
            phone : userConnected.phone,
            anotherPhone : userConnected.anotherPhone , 
            adresse : userConnected.adresse,
            region : userConnected.region,
            ville:userConnected.ville
        }
      )


    const handleChangeVille = (e)=>{

        const target = e.target ; 
        const {name,value} = target ; 

        setVilleName(value)
    }

     const handleChangeRegion = (e) => {
       const target = e.target;
       const { name, value } = target;

       setRegionName(value);
     };


     const handleSubmit = (e)=>{
       
        e.preventDefault();
       
        axios
          .put("/user/update-from-basket", {
            ...auth,
            region: regionName ==="" ? userConnected.regionName : regionName,
            ville: villeName === "" ? userConnected.villeName : villeName,
          })
          .then((res) => {
           //modifier le context pour que tout les composant prends en considération l'info
            setUserConnected(res.data)
            successToast()

          })
          .catch((err) => {
            console.log("err : ", err)
            errorToast()
          });
     }

    const handleChangeAuth = (e)=>{

        const {target} = e 
        const {name,value} = target  

        setAuth((prev)=>({
            ...prev,
            [name] : value
        }))
    }

    const successToast = ()=>toast.success("mise à jour effectué avec succès !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })

     const errorToast = () =>
       toast.error("Oups on a pas réussi a faire la mise à jour. ", {
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
    <>
      <form onSubmit={handleSubmit}>
        {/* la balise form et le boutton d'envoie doivent être a l'extérieur du Box. pour que ça marche */}
        <Box component="form" className="" noValidate autoComplete="off">
          <div className="py-3 mb-5 space-x-5">
            <TextField
              required
              id="outlined-required"
              label="Nom"
              name="firstName"
              onChange={handleChangeAuth}
              defaultValue={`${auth.firstName}`}
              className="w-[30rem]"
              color="warning"
            />

            <TextField
              required
              id="outlined-required"
              label="Prenom"
              name="lastName"
              onChange={handleChangeAuth}
              defaultValue={`${auth.lastName}`}
              className="w-[30rem]"
              color="warning"
            />
          </div>
          <div className=" my-5 space-x-5 ">
            <TextField
              required
              id="outlined-required"
              label="Adresse"
              name="adresse"
              onChange={handleChangeAuth}
              defaultValue={`${
                auth.adresse ? auth.adresse : "Entrez votre adresse"
              }`}
              className="w-[61.4rem]"
              color="warning"
            />
          </div>

          <div className="py-3 mb-5 space-x-5">
            <TextField
              required
              id="outlined-required"
              name="phone"
              label="Télephone mobile"
              onChange={handleChangeAuth}
              defaultValue={`${auth.phone}`}
              className="w-[30rem]"
              color="warning"
            />

            <TextField
              required
              id="outlined-required"
              name="anotherPhone"
              onChange={handleChangeAuth}
              label="Télephone mobile supplémentaire"
              defaultValue={`${
                auth.anotherPhone
                  ? auth.anotherPhone
                  : "Ajouter un autre numéro"
              }`}
              className="w-[30rem]"
              color="warning"
            />
          </div>

          <div className=" my-5 space-x-5 ">
            <FormControl sx={{ m: 1, width: "30rem" }}>
              <InputLabel id="demo-multiple-name-label">Région</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                /* multiple */
                value={regionName}
                onChange={handleChangeRegion}
                input={<OutlinedInput label="Region" />}
                MenuProps={MenuProps}
              >
                {/* Élément spécial représentant la valeur par défaut */}
                {auth.region && (
                  <MenuItem
                    value={`${auth.region}`}
                    style={getStylesVille(`${auth.region}`, villeName, theme)}
                  >
                    -- {auth.region} --
                  </MenuItem>
                )}

                {regions.map((region) => (
                  <MenuItem
                    key={region}
                    value={region}
                    style={getStylesRegion(region, regionName, theme)}
                  >
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: "30rem" }}>
              <InputLabel id="demo-multiple-name-label2">Ville</InputLabel>
              <Select
                labelId="demo-multiple-name-label2"
                id="demo-multiple-name2"
                /* multiligne */
                value={villeName}
                onChange={handleChangeVille}
                input={<OutlinedInput label="ville" />}
                MenuProps={MenuProps}
              >
                {auth.ville && (
                  <MenuItem
                    value={`${auth.ville}`}
                    style={getStylesVille(`${auth.ville}`, villeName, theme)}
                  >
                    -- {auth.ville} --
                  </MenuItem>
                )}

                {villes.map((ville) => (
                  <MenuItem
                    key={ville}
                    value={ville}
                    style={getStylesVille(ville, villeName, theme)}
                  >
                    {ville}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Box>
        <div>
          <button className="px-3 py-2 rounded-lg text-white  bg-orange-500 ms-3">
            Mettre à jour
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
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
    </>
  );
}
