import React from "react";
import { Button, ClickAwayListener, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

const UseStyles = makeStyles({
  dropDownFilter: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
});

export const DropDownFilter = ({getGenre}) => {
  const classes = UseStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {genres} = useSelector((state) => state.bookReducer)

  console.log("show book ", genres);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const selectGenre = (genre) => {
  //   console.log(genre)
  // }

  return (
    <div className={classes.dropDownFilter}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
      >
        Filter by:
      </Button>
      
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          
        >
          {
            genres.map(g => 
           <MenuItem onClick={() => getGenre(g)}> {g} </MenuItem>
              
              )
          }
         
        </Menu>
      
    </div>
  );
};
