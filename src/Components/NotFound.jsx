import React from "react";

import { Paper, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "center",
    display: "flex",
    marginRight: 50,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  }
}));
const NotFound = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">ERROR 404: Page Not Found!</Typography>
    </Paper>
  );
};

export default NotFound;
