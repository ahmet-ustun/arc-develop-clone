import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useScrollTrigger } from "@material-ui/core";
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
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  logo: {
    height: "8em",
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
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
    setIsOpen(true);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

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
              onClick={() => setValue(0)}
            >
              <img className={classes.logo} src={logo} alt="Company Logo" />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={value}
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
                onMouseOver={handleClick}
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
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={isOpen}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem component={Link} to="/software" onClick={handleClose}>
                Software Development
              </MenuItem>
              <MenuItem component={Link} to="/mobile" onClick={handleClose}>
                Mobile App Development
              </MenuItem>
              <MenuItem component={Link} to="/website" onClick={handleClose}>
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
