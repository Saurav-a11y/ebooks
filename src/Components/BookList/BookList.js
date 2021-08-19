import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookCardItem } from "../BookCardItem/BookCardtem";
import { addToCart } from "../../Redux/Cart/cartAction";

const useStyles = makeStyles({
  bookListComp: {
    paddingTop: 16,
  },
});
export const BookList = ({ searchItem, selectedGenre }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [addCart, setAddCart] = useState([])

  console.log("get selcted genre", selectedGenre);
  const { books } = useSelector((state) => state.bookReducer);

  let data = books

  if(searchItem !== "") {
    data = data.filter((book) =>
    book["name "].toLowerCase().includes(searchItem.toLowerCase()))
  }
  if(selectedGenre !== "") {
    data = data.filter((book) =>
    book.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
  }
   console.log("show search item", searchItem);
    

    const handleClick = (book) => {
      //  setAddCart((prevState) => [...prevState, book]) 
      dispatch(addToCart(book))

  };
console.log("show book ", addCart);
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
    </div>
  );
};
