import { AppBar, makeStyles, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Cart } from "../Cart/Cart";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#2196f3",
  },
  appToolBar: {
    
    justifyContent: "space-between"
  },
  
  title: {
    margin: "auto"
  }
});

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)


  const modalOpen = () => {
    setOpen(true)
  }

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar aria-label="navbar" className={classes.appToolBar}>
        <Typography className={classes.title}>E-Books</Typography>
        <div>
        {/* <Button type="button" className={classes.cartBtn} onClick={modalOpen}>Show Cart Items</Button> */}
        <Cart openModal={open} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
