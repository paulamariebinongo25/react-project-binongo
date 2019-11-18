import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import { makeStyles, createStyles, useTheme } from "@material-ui/styles";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#000",
      color: "#fff"
    },
    menuBtn: {
      color: "#fff",
      marginRight: 8
    }
  })
);

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton>
          <MenuIcon className={classes.menuBtn} />
        </IconButton>
        <Typography variant="h5">Logo</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
