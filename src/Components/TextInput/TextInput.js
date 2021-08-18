import { TextField, Input } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  textInput: {
    border: "1px solid #bdbdbd",
    borderRadius: 8,
    minHeight: 45
  },
  searchIcon: {
      color: "#bdbdbd",
      padding: "0px 10px 0px 20px"
  }
});

export const TextInput = ({onChange}) => {
  const classes = useStyles();
  return (
    <form>
      {/* <TextField id="search" label="search" type="text" variant="outlined" fullWidth className={classes.textInput}/> */}
      <Input
        id="search"
        name="search"
        disableUnderline
        fullWidth
        className={classes.textInput}
        placeholder="Search your favorite book"
        type="text"
        startAdornment= {
            <SearchIcon className={classes.searchIcon} />
        }
        onChange={(e) => onChange(e)}
      />
    </form>
  );
};
