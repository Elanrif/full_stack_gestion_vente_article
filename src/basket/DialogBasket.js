import  React ,{useState,useEffect,useContext} from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import DeleteIcon from "@mui/icons-material/Delete"
import Slide from "@mui/material/Slide"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import {MdOutlineDeleteOutline} from "react-icons/md"
import { BasketUserContext, UserContext } from "../Context"
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});

export default function DialogBasket({basket}) {

  const [open, setOpen] = React.useState(false)

  const { userConnected, setUserConnected, userLoading, setUserLoading } = useContext(UserContext);

    //on va utiliser via le context les articles au Panier de l'user connecté.
  const { allBasketUser, setAllBasketUser } = useContext(BasketUserContext);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

   const loadBasketUser = () => {
     axios
       .get(`/basket/find-basket-from-user/${userConnected.id}`)
       .then((res) => {
         setAllBasketUser(res.data);
       })
       .catch((err) => {
         console.log("err: ", err);
       });
   };



  const handleDeleteBasket = ()=>{

        axios.delete(`/basket/delete/${basket.id}`)
        .then((res)=>{

           //faire une alert 
           console.log("article id : ", basket.id , " supprimé avec succès !")
           handleClose()
           
           loadBasketUser()
           
        })
        .catch((err)=>{
          console.error("err : " , err) 
        })

  }

  return (
    <div>
      <div
        className="text-orange-500 hover:cursor-pointer max-w-[12rem] 
                      hover:rounded-lg mb-3 hover:bg-orange-200 font-semibold 
                      flex items-center justify-center"
        onClick={handleClickOpen}
      >
        <MdOutlineDeleteOutline size="24px" />
        <div className="uppercase px-3 py-2  ">supprimer</div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={20}
      >
        <DialogTitle>{"Rétirer du Panier"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Voulez-vous vraiment supprimer cet article du Panier ?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="my-1 mb-3 items-center justify-start flex">
          <Button
            variant="outlined"
            startIcon={<FavoriteBorderIcon />}
            onClick={handleClose}
          >
            Garder pour plus tard
          </Button>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            className="bg-orange-500"
            color="error"
            onClick={handleDeleteBasket}
          >
            Rétirer l'article
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
