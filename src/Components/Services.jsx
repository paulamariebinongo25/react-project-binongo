import React from "react";

import {
  Paper,
  Grid,
  Avatar,
  Typography,
  Toolbar,
  GridList,
  GridListTile
} from "@material-ui/core";

// import tileData from "./tileData";

import Logo from "../assets/Logo.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "inline-flex",
    padding: 0,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  container: {
    flexGrow: 1,
    overflow: "hidden",
    padding: 20,
    display: "block"
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    display: "flex"
  },
  text: {
    marginLeft: 20
  },
  gridRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "333"
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

const tileData = [
  {
    img: Logo,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: Logo,
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: Logo,
    title: "Image",
    author: "author",
    cols: 3
  },
  {
    img: Logo,
    title: "Image",
    author: "author",
    cols: 4
  },
  {
    img: Logo,
    title: "Image",
    author: "author",
    cols: 6
  },
  {
    img: Logo,
    title: "Image",
    author: "author",
    cols: 5
  }
];

const message = "Hello, welcome to my React Project!";

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
           k */}
          </Grid>
        </Paper>
        {/* <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper> */}
      </div>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper>
        {/* <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper> */}
      </div>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper>
        {/* <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Toolbar>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.text}>
                  {message}
                </Typography>
              </Grid>
            </Toolbar>
          </Grid>
        </Paper> */}
      </div>
    </div>
  );
};

export default Services;
