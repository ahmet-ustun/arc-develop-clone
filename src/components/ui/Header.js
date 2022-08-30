import React, { useState, useEffect } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "25px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    background: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const handleChange = (event, value) => {
    setTabValue(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
    setIsMenuOpen(true);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const handleMenuItem = (event, index) => {
    setAnchorEl(null);
    setIsMenuOpen(false);
    setItemIndex(index);
  };

  const menuItems = [
    { name: "Services", path: "/services" },
    { name: "Software Development", path: "/services/software" },
    { name: "Mobile App Development", path: "/services/mobile" },
    { name: "Website Development", path: "/services/website" },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (tabValue !== 0) {
          setTabValue(0);
        }
        break;
      case "/services":
        if (tabValue !== 1) {
          setTabValue(1);
          setItemIndex(0);
        }
        break;
      case "/services/software":
        if (tabValue !== 1) {
          setTabValue(1);
          setItemIndex(1);
        }
        break;
      case "/services/mobile":
        if (tabValue !== 1) {
          setTabValue(1);
          setItemIndex(2);
        }
        break;
      case "/services/website":
        if (tabValue !== 1) {
          setTabValue(1);
          setItemIndex(3);
        }
        break;
      case "/revolution":
        if (tabValue !== 2) {
          setTabValue(2);
        }
        break;
      case "/about":
        if (tabValue !== 3) {
          setTabValue(3);
        }
        break;
      case "/contact":
        if (tabValue !== 4) {
          setTabValue(4);
        }
        break;
      case "/estimate":
        if (tabValue !== 5) {
          setTabValue(5);
        }
        break;
      default:
        break;
    }
  }, [tabValue]);

  const siteTabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={tabValue}
        onChange={handleChange}
      >
        <Tab
          className={classes.tab}
          label="Home"
          component={Link}
          to="/"
          disableRipple
        />
        <Tab
          className={classes.tab}
          label="Services"
          component={Link}
          to="/services"
          disableRipple
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseEnter={handleClick}
        />
        <Tab
          className={classes.tab}
          label="The Revolution"
          component={Link}
          to="/revolution"
          disableRipple
        />
        <Tab
          className={classes.tab}
          label="About Us"
          component={Link}
          to="/about"
          disableRipple
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="/contact"
          disableRipple
        />
      </Tabs>
      <Button className={classes.button} variant="contained" color="secondary">
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        classes={{ paper: classes.menu }}
        anchorEl={anchorEl}
        open={isMenuOpen}
        elevation={0}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem
            classes={{ root: classes.menuItem }}
            key={menuItem.name}
            component={Link}
            to={menuItem.path}
            selected={index === itemIndex && tabValue === 1}
            onClick={(event) => {
              handleMenuItem(event, index);
              setTabValue(1);
              handleClose();
            }}
          >
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              disableRipple
              onClick={() => setTabValue(0)}
            >
              <img className={classes.logo} src={logo} alt="Company Logo" />
            </Button>
            {matches ? null : siteTabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
