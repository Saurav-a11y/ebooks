import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    cardContent: {
        "& div": {
            display: "flex"
        }
    },
    price: {

    }
})

export const BookCardItem = ({book}) => {
    const classes = useStyles()
    console.log("show book name", book.name);
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="book-item"
                 image={book.image}   
                 />
                <CardContent className={classes.cardContent}>
                <div className={classes.name}>
                        <Typography>Name:</Typography>
                    <Typography> {`${book.name} `} </Typography>
                    </div>
                    <div className={classes.price}>
                        <Typography>Price:</Typography>
                    <Typography> {`${book.price} `} </Typography>
                    </div>
                    <div className={classes.author}>
                        <Typography>Author:</Typography>
                    <Typography> {`${book.author} `} </Typography>
                    </div>
                    <div className={classes.stock}>
                        <Typography>Stock:</Typography>
                    <Typography> {`${book.stock} `} </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Add to Cart</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
