import React from "react";

import PropTypes from "prop-types";

import {
  GridListTile,
  GridList,
  GridListTileBar,
  ListSubheader,
  IconButton
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";

import { makeStyles } from "@material-ui/core/styles";

import Logo from "../assets/Logo.png";

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: "inline-flex",
  //   padding: 0,
  //   justifyContent: "center",
  //   flexWrap: "wrap"
  // },
  // container: {
  //   flexGrow: 1,
  //   overflow: "hidden",
  //   padding: 20,
  //   display: "block"
  // },
  // paper: {
  //   maxWidth: 400,
  //   margin: `${theme.spacing(1)}px auto`,
  //   padding: theme.spacing(2),
  //   display: "flex"
  // },
  // text: {
  //   marginLeft: 20
  // },
  gridList: {
    width: 500,
    height: 450,
    overflow: "hidden"
  },
  gridListTile: {
    listStyle: "none",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#000"
  },
  icon: {
    color: "#FFF"
  },
  listText: {
    color: "#FFF",
    textAlign: "center",
    justifyContent: "center"
  }
  // },
  // img: {
  //   margin: 30,
  //   padding: 50
  // }
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
    cols: 1
  },
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
    cols: 3
  },
  {
    img: Logo,
    title: "Image",
    author: "author",
    cols: 5
  }
];

const Works = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridListTile className={classes.gridListTile}>
        <ListSubheader component="div" className={classes.listText}>
          December
        </ListSubheader>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </GridListTile>
    </div>
  );
};

export default Works;
