import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Slide,
  Button,
  Typography,
  Card,
  Avatar,
  CardContent,
  IconButton,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../Redux/Cart/cartAction";

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
    overflowX: "hidden",
    overflowY: "auto",
    padding: "30px 15px",
  },
  cartBtn: {
    color: "#fff",
  },
  cartHeaderTitle: {
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
  },
  cartTottalNum: {
    textAlign: "center",
    color: "#bdbdbd",
  },
  cardCartItem: {
    display: "flex",
    alignItems: "center",
    minHeight: 95,
    padding: "0px 16px",
    "& .MuiCardContent-root": {
      padding: 0,
      marginLeft: 30,
      flexGrow: 1,
      display: "flex",
    },
  },
  cartItemGenre: {
    fontSize: 10,
  },
}));

export const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId))
  }

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
        <Slide in={open} direction="left" timeout={{ enter: 700, exit: 500 }}>
          <div className={classes.paper}>
            <Typography className={classes.cartHeaderTitle}>
              {" "}
              Your Cart{" "}
            </Typography>
            {cartItems && cartItems.length > 0 ? (
              <>
                {" "}
                <Typography className={classes.cartTottalNum}>
                  {" "}
                  Total Items:{" "}
                </Typography>
                {cartItems.map((item) => (
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Card className={classes.cardCartItem} key={item.id}>
                        <Avatar variant="rounded" alt="cart-image" src={item.image} />
                        <CardContent>
                          <div>
                            <Typography className={classes.cartItemTitle}>
                              {" "}
                              {item['name ']}
                            </Typography>
                            <Typography className={classes.cartItemGenre}>
                              {" "}
                              {item.genre}
                            </Typography>
                          </div>
                          <div>
                            <Typography>Qty: {item.quantity} </Typography>
                          </div>
                        </CardContent>
                        <IconButton aria-label="delete" onClick={() => deleteItem(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Card>
                    </Grid>
                  </Grid>
                ))}
              </>
            ) : (
              <Typography variant="h4"> Your cart is empty</Typography>
            )}
          </div>
        </Slide>
      </Modal>
    </div>
  );
};
