import React,{useState,useContext,useEffect} from 'react'
import {FcCdLogo} from "react-icons/fc"
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { HiUserPlus } from "react-icons/hi2";
import { GrUserAdmin } from "react-icons/gr";
import {NavLink, Link,useNavigate } from 'react-router-dom';
import BackDrop from '../section/BackDrop';
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ArticleUserContext ,BasketUserContext, UserContext } from '../Context';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: -2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

 function IconChart() {

  const navigate = useNavigate() 
  const { userConnected, setUserConnected, userLoading, setUserLoading } = useContext(UserContext)
  const { articleAuth, setArticleAuth } = useContext(ArticleUserContext)
  const { allBasketUser , setAllBasketUser } = useContext(BasketUserContext)

  /* ? pour éviter d'avoir des erreurs dans le cas ou allBasketUser n'existe pas , car on l'a initialisé à null dans APP.js */
  const basket_count = allBasketUser?.reduce(
    (acc, basket) => acc + basket.qte_article, 0
  )
  console.log("allBasketUser : ")

  return (
    <IconButton aria-label="cart" onClick={() => navigate("/mon-panier")}>
      <StyledBadge badgeContent={basket_count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

 function AccountMenu() {

  const { userConnected, setUserConnected, userLoading, setUserLoading } = useContext(UserContext) 

  const navigate = useNavigate() 

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>
          <IconChart/>
          </Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 40,
              height: 40,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {(userLoading && userConnected) && (
          <> {console.log(" auth : " , userConnected)}
            {userConnected.admin && (
              <MenuItem onClick={()=> {navigate("/dashboard/admin"); handleClose();}}>
                <Avatar /> Admin
              </MenuItem>
            )}
            <MenuItem onClick={()=> {navigate("/user"); handleClose()}}>
              <Avatar /> Mon compte
            </MenuItem>
          </>
        )}
        <Divider />
        {userLoading === false && (
          <>
            <MenuItem onClick={() => navigate("/register")}>
              <ListItemIcon>
                <HiUserPlus size="24px" />
              </ListItemIcon>
              S'inscrire
            </MenuItem>
            <MenuItem onClick={() => navigate("/login")}>
              <ListItemIcon>
                <GrUserAdmin size="24px" />
              </ListItemIcon>
              Se connecter
            </MenuItem>
          </>
        )}
        {userLoading && (
          <MenuItem onClick={()=>navigate("/logout")}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Déconnecter
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}

function Header() {

    const category =  [
        {nom : "Magasin",
         lien : "/magasin"},
        {
          nom: "Ordinateur",
          lien: "/computer",
        },
        {
          nom: "iPad",
          lien: "/ipad",
        },
        {
          nom: "Téléphone",
          lien: "phone",
        },
        {
          nom: "Montre",
          lien: "watch",
        },
        {
          nom: "AirPods",
          lien: "airpods",
        },
        {
          nom: "Accessoire",
          lien: "accessoire",
        },
      ]

  return (
    <div className="sticky top-0 z-10 text-xs font-semibold py-5 bg-gray-50 text-slate-800 flex space-x-7 items-center justify-center">
      <Link to="/">
        <FcCdLogo size="25px" />
      </Link>

      {category.map((item, index) => (
        <React.Fragment key={index}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? console.log(" link is pending")
                : isActive
                ? " text-blue-500"
                : " "
            }
            to={`${item.lien}`}
            key={index}
          >
            {item.nom}
          </NavLink>
        </React.Fragment>
      ))}
      <AccountMenu />
    </div>
  );
}

export default Header
