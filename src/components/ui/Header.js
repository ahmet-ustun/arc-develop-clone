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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

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
  indicator: { display: 'none' },
  button: {
    ...theme.typography.estimate,
    background: theme.palette.common.orange,
    opacity: 1,
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
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      background: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    background: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    background: theme.palette.common.orange,
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);

  const [tabValue, setTabValue] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (event, value) => {
    console.log(event);
    setTabValue(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItem = (index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setItemIndex(index);
  };

  const siteRoutes = [
    { name: "Home", path: "/", activeIndex: 0 },
    {
      name: "Services",
      path: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHasPopup: anchorEl ? "true" : undefined,
      onMouseEnter: handleClick,
    },
    { name: "The Revolution", path: "/revolution", activeIndex: 2 },
    { name: "About Us", path: "/about", activeIndex: 3 },
    { name: "Contact Us", path: "/contact", activeIndex: 4 },
  ];

  const menuItems = [
    { name: "Services", path: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Software Development",
      path: "/services/software",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      path: "/services/mobile",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      path: "/services/website",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  useEffect(() => {
    [...menuItems, ...siteRoutes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.path}`:
          if (route.activeIndex !== tabValue) {
            setTabValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== itemIndex) {
              setItemIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          setTabValue(5);
          break;
        default:
          break;
      }
    });
  }, [tabValue, itemIndex, siteRoutes, menuItems]);

  const siteTabs = (
    <React.Fragment>
      <Tabs
        classes={{ root: classes.tabContainer, indicator: classes.indicator }}
        value={tabValue}
        onChange={handleChange}
      >
        {siteRoutes.map((siteRoute, index) => (
          <Tab
            className={classes.tab}
            key={`${siteRoute.name}-${index}`}
            label={siteRoute.name}
            component={Link}
            to={siteRoute.path}
            aria-owns={siteRoute.ariaOwns}
            aria-haspopup={siteRoute.ariaHasPopup}
            onMouseEnter={siteRoute.onMouseEnter}
            disableRipple
          />
        ))}
        <Tab
          className={classes.button}
          label="Free Estimate"
          component={Link}
          to="/estimate"
        />
      </Tabs>
      <Menu
        id="simple-menu"
        classes={{ paper: classes.menu }}
        anchorEl={anchorEl}
        open={openMenu}
        elevation={0}
        keepMounted
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem
            classes={{ root: classes.menuItem }}
            key={`${menuItem.name}-${index}`}
            component={Link}
            to={menuItem.path}
            selected={index === itemIndex && tabValue === 1}
            onClick={() => {
              handleMenuItem(index);
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

  const siteDrawer = (
    <React.Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        <List disablePadding>
          {siteRoutes.map((siteRoute, index) => (
            <ListItem
              key={`${siteRoute.name}-${index}`}
              divider
              button
              component={Link}
              to={siteRoute.path}
              selected={tabValue === siteRoute.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setTabValue(siteRoute.activeIndex);
              }}
            >
              <ListItemText
                className={
                  tabValue === siteRoute.activeIndex
                    ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                    : classes.drawerItem
                }
                disableTypography
              >
                {siteRoute.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            className={classes.drawerItemEstimate}
            divider
            button
            component={Link}
            to="/estimate"
            selected={tabValue === 5}
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(5);
            }}
          >
            <ListItemText
              className={
                tabValue === 5
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
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
            {matches ? siteDrawer : siteTabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
