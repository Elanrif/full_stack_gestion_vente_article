import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const ITEM_HEIGHT = 48;

export default function ArticleByCat(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* charger tout les articles d'une categorie */
  const handleDisplayArticles = (category) => {
    props.articles(category);
    handleClose();
  };

/* initialisation de tout les articles */
  const reset = () => {
    props.display();
    handleClose();
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip
          title="filter par association"
          className="hover:cursor-pointer hover:text-blue-500 duration-300"
          arrow
        >
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "40ch" /* agrandir le Menu */,
          },
        }}
      >
        <MenuItem onClick={reset} sx={{ color: "blue" }}>
          <span className="text-blue-400 hover:cursor-pointer duration-300 hover:text-blue-700">
            {" "}
            &nbsp; Réinitialisé ?
          </span>
        </MenuItem>
        {/* listes des associations */}
        {props.categories &&
          props.categories.map((category, index) => (
            <MenuItem
              key={index}
              selected={category.id === 1}
              onClick={() => handleDisplayArticles(category)}
              className="w-10"
            >
              {category.id} - {category.nom}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
