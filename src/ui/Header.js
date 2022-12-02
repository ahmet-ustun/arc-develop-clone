import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
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
import Hidden from "@material-ui/core/Hidden";

import MenuIcon from "@material-ui/icons/Menu";

import Link from "../Link.js";

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
    textTransform: "none",
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
    color: "white",
  },
  indicator: { display: "none" },
  button: {
    ...theme.typography.estimate,
    background: theme.palette.common.orange,
    opacity: 1,
    borderRadius: "50px",
    marginLeft: "25px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    background: theme.palette.common.blue,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: "white",
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
    color: "white",
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { tabValue, setTabValue, itemIndex, setItemIndex } = props;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
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
      onMouseEnter: (event) => handleClick(event),
    },
    { name: "The Revolution", path: "/revolution", activeIndex: 2 },
    { name: "About Us", path: "/about", activeIndex: 3 },
    { name: "Contact Us", path: "/contact", activeIndex: 4 },
  ];

  const menuItems = [
    { name: "Services", path: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Software Development",
      path: "/software",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      path: "/mobile",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      path: "/website",
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
  }, [tabValue, setTabValue, itemIndex, setItemIndex, siteRoutes, menuItems]);

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
            href={siteRoute.path}
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
          href="/estimate"
        />
      </Tabs>
      <Menu
        id="simple-menu"
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1305 }}
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
            href={menuItem.path}
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
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {siteRoutes.map((siteRoute, index) => (
            <ListItem
              key={`${siteRoute.name}-${index}`}
              divider
              button
              component={Link}
              href={siteRoute.path}
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
            href="/estimate"
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
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              href="/"
              disableRipple
              style={{ textDecoration: "none" }}
              onClick={() => setTabValue(0)}
            >
              <svg
                id="Layer_1"
                className={classes.logo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>
                  {
                    ".st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway;font-weight:300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}"
                  }
                </style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(261.994 65.233)"
                  className="st1 st2"
                  fontSize="57"
                >
                  Arc
                </text>
                <text
                  transform="translate(17.692 112.015)"
                  className="st1 st2"
                  fontSize="54"
                >
                  Development
                </text>
                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </svg>
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
