import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { BookCardItem } from "../BookCardItem/BookCardtem";

const useStyles = makeStyles({
  bookListComp: {
    paddingTop: 16,
  },
});
export const BookList = ({ searchItem }) => {
  const classes = useStyles();
  const { books } = useSelector((state) => state.bookReducer);

  let data;

  if (searchItem === "") {
    data = books;
  } else {
    data = books.filter((book) =>
      book["name "].toLowerCase().includes(searchItem.toLowerCase())
    );
  }

  return (
    <div className={classes.bookListComp}>
      <Grid container spacing={3}>
        {books && books.length !== 0
          ? data.map((book) => (
              <Grid item xs={3}>
                <BookCardItem book={book} key={book.id} />
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
};
