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
import { addToCart, deleteCartItem, removeItemCart } from "../../Redux/Cart/cartAction";
import { totalAmount, totalPrice } from "../../Redux/Cart/CartFunction";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
      alignItems: "center",
      // justifyContent: "space-around"
    },
    
  },

  cartItemGenre: {
    fontSize: 10,
  },
  cartItemTitleComp: {
    flexGrow: 1,
    minWidth: "40%",
  },
  cartPrice: {
    flexGrow: 2,
  },
  cartQtyComp: {
    flexGrow: 3,
    display: "flex",
  },
  cartTotalPrice: {
    flexGrow: 5,
  },
  arrow: {
    cursor: "pointer",
    marginLeft: 10,
    padding: 0
  },
  totalAmt: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end"
  },
  stockDetails: {
    flexGrow: 4,
    "& .MuiTypography-root" : {
      fontSize: 12,
      color: "#f44336"
      

    }
  }
}));

export const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
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
                  Total Items: {cartItems.length}
                </Typography>
                {cartItems.map((item) => (
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Card className={classes.cardCartItem} key={item.id}>
                        <Avatar
                          variant="rounded"
                          alt="cart-image"
                          src={item.image}
                        />
                        <CardContent>
                          <div className={classes.cartItemTitleComp}>
                            <Typography className={classes.cartItemTitle}>
                              {" "}
                              {item["name "]}
                            </Typography>
                            <Typography className={classes.cartItemGenre}>
                              {" "}
                              {item.genre}
                            </Typography>
                          </div>

                         
                          <div className={classes.cartQtyComp}>
                            <Typography>Qty:</Typography>
                            <IconButton className={classes.arrow} onClick={() => dispatch(removeItemCart(item))}>
                              <ArrowBackIosIcon />
                            </IconButton>
                            <Typography >
                              {" "}
                              {item.quantity}{" "}
                            </Typography>
                            
                            <IconButton className={classes.arrow} onClick={() => dispatch(addToCart(item))}>
                              <ArrowForwardIosIcon />
                            </IconButton>
                          </div>
                          <div className={classes.stockDetails}>
                            {item.stock < item.quantity &&  
                              <Typography>Stock limit exceed</Typography>

                            }
                          </div>
                          <div className={classes.cartTotalPrice}>
                            <Typography>
                              {" "}
                              Rs: {totalPrice(item.price, item.quantity)}{" "}
                            </Typography>
                          </div>
                        </CardContent>
                        <IconButton
                          aria-label="delete"
                          onClick={() => deleteItem(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Card>
                    </Grid>
                  </Grid>
                ))}
                <div className={classes.totalAmt}>
                  <Typography>Total Amount</Typography>
                  <Typography> {
                    `Rs: ${totalAmount(cartItems)}`
                    }  </Typography>
                </div>
              
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
