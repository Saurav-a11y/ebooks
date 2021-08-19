import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import {convertToNrs} from '../../utils'


const useStyles = makeStyles({
  cardContent: {
    "& div": {
      display: "flex",
    },
  },
  price: {},
});

export const BookCardItem = ({ book, handleClick }) => {
  const classes = useStyles();
  

  return (
    <Card>
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
          <Typography> {`${book.published_date} `} </Typography>
        </div>
      </CardContent>
      <CardActions >
        <Button onClick={() => handleClick(book)}  variant="outlined" disabled={book.stock === 0 ? true: false}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
