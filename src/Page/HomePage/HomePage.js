import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BookList } from "../../Components/BookList/BookList";
import { Cart } from "../../Components/Cart/Cart";
import { DropDownFilter } from "../../Components/DropDownFilter/DropDownFilter";
import { fetchBook } from "../../Components/Redux/Book/bookAction";
import { TextInput } from "../../Components/TextInput/TextInput";

const useStyles = makeStyles({
  homeComp: {
    paddingTop: 20,
    height: "100vh",
    display: "flex",
    flexDirection: 'column'
  },
});


export const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [searchItem, setSearchItem] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")

  const onChange = (e) => { // search book from api
    // console.log(("show value", e.target.value));
    setSearchItem(e.target.value)
  }

  useEffect(() => { // fetch book list from redux-action 
    dispatch(fetchBook()) 
  }, [])



  return (
    <div>
      <Container className={classes.homeComp} maxWidth="lg">
        <TextInput onChange={onChange} />
          <DropDownFilter getGenre={(genre) => 
          {
            setSelectedGenre(genre)
          }
          } />
            <BookList searchItem={searchItem} selectedGenre={selectedGenre} />
          
            {/* <Cart /> */}
        
      </Container>
    </div>
  );
};
