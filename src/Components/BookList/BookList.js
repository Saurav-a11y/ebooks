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
export const BookList = () => {
  const classes = useStyles();
  const { books } = useSelector((state) => state.bookReducer);
  console.log("show books", books);
  return (
    <div className={classes.bookListComp}>
      <Grid container spacing={3}>
        {books && books.length !== 0
          ? books.slice(0, 5).map((book) => (
              <Grid item xs={3}>
                <BookCardItem book={book} />
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
};
