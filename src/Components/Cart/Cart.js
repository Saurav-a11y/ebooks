import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Slide, Button, Typography} from '@material-ui/core';

// import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        justifyContent: "flex-end",
      },
  paper: {
    width: "45vw",
    backgroundColor: "#FAFAFA",
    boxShadow: theme.shadows[5],
    paddingBottom: 30,
    position: "relative",
    overflow:"auto"
  },
  cartBtn: {
    color: "#fff"
  }
}));

export const Cart = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen} className={classes.cartBtn}>
      Show Cart Items
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Slide in={open} direction="left" timeout={{ enter: 700, exit: 500,}}>
          <div className={classes.paper}>
            <Typography className={classes.cartHeaderTitle}> Your Cart </Typography>
          </div>
        </Slide>
      </Modal>
    </div>
  );
}