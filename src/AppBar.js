import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Typography from "@material-ui/core/Typography";
import { Tab, Tabs } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { useStyles } from "./Theme";

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AppBar2 = ({
  title,
  showTabs,
  mobileOpen,
  setMobileOpen,
  dark,
  setDark,
  index,
  setIndex,
}) => {
  const handleTabChange = (event, newValue) => {
    setIndex(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.flex}>
          {title}
        </Typography>
        <IconButton
          color="inherit"
          aria-label="use dark theme"
          onClick={() => setDark(!dark)}
        >
          {dark ? <Brightness3Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
      {showTabs ? (
        <Tabs
          value={index}
          onChange={handleTabChange}
          variant="fullWidth"
          aria-label="course information"
        >
          <Tab label="Course Info" {...allyProps(0)} />
          <Tab label="Meeting Sections" {...allyProps(1)} />
        </Tabs>
      ) : null}
    </AppBar>
  );
};

export { AppBar2 as AppBar };
