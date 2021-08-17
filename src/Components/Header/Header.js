import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "red",
  },
  appToolBar: {
    
    justifyContent: "center"
  },
  
});

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar aria-label="navbar" className={classes.appToolBar}>
        <Typography className={classes.title}>E-Books</Typography>
      </Toolbar>
    </AppBar>
  );
};
