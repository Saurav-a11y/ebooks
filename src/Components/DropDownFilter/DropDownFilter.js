import React from "react";
import { Button, ClickAwayListener, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const UseStyles = makeStyles({
  dropDownFilter: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
});

export const DropDownFilter = () => {
  const classes = UseStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      
    </div>
  );
};
