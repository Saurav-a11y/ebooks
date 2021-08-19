import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookList } from "../../Components/BookList/BookList";
import { Cart } from "../../Components/Cart/Cart";
import { DropDownFilter } from "../../Components/DropDownFilter/DropDownFilter";
import { TextInput } from "../../Components/TextInput/TextInput";
import { fetchBook } from "../../Redux/Book/bookAction";
import CancelIcon from "@material-ui/icons/Cancel";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  homeComp: {
    paddingTop: 90,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  filterDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  filterName: {
    fontWeight: 600,
    marginRight: 10,
  },
  genre: {
    fontSize: 14,
    border: "1px solid #bdbdbd",
    borderRadius: 12,
    padding: "0px 10px",
    position: "relative",
  },
  cancelIcon: {
    fontSize: 16,
    position: "absolute",
    top: -4,
    right: -6,
    color: "#343434",
    cursor: "pointer",
  },
  loader: {
    margin: "auto",
  },
});

export const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchItem, setSearchItem] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const { isFetching } = useSelector((state) => state.bookReducer);

  const onChange = (e) => {
    // search book from api
    // console.log(("show value", e.target.value));
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    // fetch book list from redux-action
    dispatch(fetchBook());
  }, []);

  return (
    <div>
      <Container className={classes.homeComp} maxWidth="lg">
        <TextInput onChange={onChange} />
        {isFetching ? (
          <CircularProgress className={classes.loader} disableShrink />
        ) : (
          <>
            <div className={classes.filterDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography className={classes.filterName}>
                  {" "}
                  -Filterd by:{" "}
                </Typography>
                {selectedGenre && (
                  <div style={{ position: "relative" }}>
                    <Typography className={classes.genre}>
                      {selectedGenre}
                    </Typography>
                    <CancelIcon
                      className={classes.cancelIcon}
                      onClick={() => setSelectedGenre("")}
                    />
                  </div>
                )}
              </div>
              <DropDownFilter
                getGenre={(genre) => {
                  setSelectedGenre(genre);
                }}
              />
            </div>
            <BookList searchItem={searchItem} selectedGenre={selectedGenre} />
          </>
        )}
      </Container>
    </div>
  );
};
