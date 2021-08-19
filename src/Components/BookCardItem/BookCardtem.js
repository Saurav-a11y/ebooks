import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { convertToNrs } from "../../utils";

const useStyles = makeStyles({
  card: {
    minHeight: 600,
  },
  cardContent: {
    "& div": {
      display: "flex",
      marginBottom: 10,
      "& .MuiTypography-root": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        "&:first-child": {
          fontWeight: 600,
          marginRight: 10,
        },
      },
    },
  },
  cardActions: {
    justifyContent: "center",
    "& .MuiButtonBase-root": {
      backgroundColor: "#2196f3",
      color: "#fff",
      
    },
  },
});

export const BookCardItem = ({ book, handleClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia component="img" alt="book-item" image={book.image} />
      <CardContent className={classes.cardContent}>
        <div className={classes.name}>
          <Typography>Name:</Typography>
          <Typography> {`${book["name "]} `} </Typography>
        </div>
        <div className={classes.price}>
          <Typography>Price:</Typography>
          <Typography> {`Rs: ${convertToNrs(book.price)} `} </Typography>
        </div>
        <div className={classes.author}>
          <Typography>Author:</Typography>
          <Typography> {`${book.author} `} </Typography>
        </div>
        <div className={classes.stock}>
          <Typography>Stock:</Typography>
          <Typography> {`${book.stock} `} </Typography>
        </div>
        <div className={classes.genre}>
          <Typography>Genre:</Typography>
          <Typography> {`${book.genre} `} </Typography>
        </div>
        <div className={classes.pubDate}>
          <Typography>Published Date:</Typography>
          <Typography>
            {" "}
            {`${new Date(book.published_date).toLocaleDateString()} `}{" "}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          onClick={() => handleClick(book)}
          disabled={book.stock === 0 ? true : false}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
