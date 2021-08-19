import { Grid, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookCardItem } from "../BookCardItem/BookCardtem";
import { addToCart } from "../../Redux/Cart/cartAction";

const useStyles = makeStyles({
  bookListComp: {
    paddingTop: 16,
  },
  snackbar: {
    "& .MuiPaper-root": {
      backgroundColor: "transparent"
    }
   
  }
});
export const BookList = ({ searchItem, selectedGenre }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [addCart, setAddCart] = useState([])
  const [open, setOpen] = useState({
    open: false,
    msg: "",
    color: ""
  })
  const [addedGenres, setAddedGenres] = useState([])

  const { books } = useSelector((state) => state.bookReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);

  let data = books

  if(searchItem !== "") {
    data = data.filter((book) =>
    book["name "].toLowerCase().includes(searchItem.toLowerCase()))
  }
  if(selectedGenre !== "") {
    data = data.filter((book) =>
    book.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
  }
   console.log("show search item", cartItems);
    

    const handleClick = (book) => {
      //  setAddCart((prevState) => [...prevState, book]) 
      let bookGenres = [];
            if (book.genre && book.genre !== "(no genres listed)") {
              bookGenres = book.genre.split('|').filter(g => !addedGenres.includes(g));
            }
            
            const newAddedgenre = [...addedGenres, ...bookGenres]
            console.log("genres", newAddedgenre);
      if(newAddedgenre && newAddedgenre.length > 5) {
        // alert("canot add")
        setOpen({
          open: true,
          msg: `Cannot add more than 5 genres`,
          color: "#f44336"
        })
      } else {
         dispatch(addToCart(book))
        setOpen({
          open: true,
          msg: `Items added to your cart`,
          color: "#4caf50"
        })
      setAddedGenres(newAddedgenre)
      }

      
  };
  console.log("new added genresss ", addedGenres);
console.log("show book ", addCart);

const handleCloseSnackbar = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen({
    open: false,
    msg: ``
  })
};

  return (
    <div className={classes.bookListComp}>
      <Grid container spacing={3}>
        {books && books.length !== 0
          ? data.map((book) => (
              <Grid item xs={3} key={book.id}>
                <BookCardItem book={book} handleClick={handleClick} />
              </Grid>
            ))
          : ""}
      </Grid>
      <Snackbar 
      style={{backgroundColor: open.color}} 
      anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
         open={open.open} message={open.msg}   onClose={handleCloseSnackbar} className={classes.snackbar} autoHideDuration={1000}/>
    </div>
  );
};
