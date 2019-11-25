import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import BuildIcon from "@material-ui/icons/Build";

import { Link } from "react-router-dom";

import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      marginTop: 50
      //   backgroundColor: "#EC0D0D"
    },
    listItem: {
      marginBottom: 50
    },
    listItemText: {
      color: "#FFF",
      // color: "#000",
      textDecoration: "none",
      alignItems: "center",
      "&:hover": {
        color: "#A10606"
      }
    },
    listItemIcon: {
      color: "#EC0D0D",
      alignItems: "center",
      "&:hover": {
        color: "#A10606"
      }
    },
    drawerBackground: {
      // backgroundColor:
      backgroundColor: "#000",
      display: "flex",
      height: "100vh"
    }
  })
);

const SideBar = props => {
  const classes = useStyles();

  return (
    //   {/* {["Home", "About", "Works", "Services"].map(text => ( */}
    //     //

    //     <ListItem button key={text}>
    <div className={classes.drawerBackground}>
      <List className={classes.list}>
        <ListItem className={classes.listItem} component={Link} to="/">
          <ListItemIcon className={classes.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Home" />
          {/* {index % 2 === 0 ? <HomeIcon /> : <AccountBoxIcon />} */}
        </ListItem>
        <ListItem className={classes.listItem} component={Link} to="/about">
          <ListItemIcon className={classes.listItemIcon}>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="About" />
        </ListItem>
        <ListItem className={classes.listItem} component={Link} to="/works">
          <ListItemIcon className={classes.listItemIcon}>
            <LaptopMacIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Works" />
        </ListItem>
        <ListItem className={classes.listItem} component={Link} to="/services">
          <ListItemIcon className={classes.listItemIcon}>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Services" />
        </ListItem>
      </List>

      {/* ))} */}
    </div>
  );
};

export default SideBar;
