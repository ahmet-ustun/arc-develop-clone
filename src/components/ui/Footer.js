import React from "react";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebookLogo from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.svg";
import instagramLogo from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.blue,
    width: "100%",
    position: "relative",
    zIndex: 1305,
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  logo: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const { setTabValue, setItemIndex } = props;

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justifyContent="center"
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => setTabValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services"
                onClick={() => {
                  setTabValue(1);
                  setItemIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services/software"
                onClick={() => {
                  setTabValue(1);
                  setItemIndex(1);
                }}
              >
                Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services/mobile"
                onClick={() => {
                  setTabValue(1);
                  setItemIndex(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services/website"
                onClick={() => {
                  setTabValue(1);
                  setItemIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setTabValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setTabValue(2)}
              >
                Mission
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setTabValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setTabValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setTabValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setTabValue(3)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setTabValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setTabValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
                onClick={() => setTabValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        src={footerAdornment}
        alt="Decorative Black Slash"
      />
      <Grid
        container
        className={classes.socialContainer}
        justifyContent="flex-end"
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className={classes.logo}
            src={facebookLogo}
            alt="Facebook Logo"
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={classes.logo} src={twitterLogo} alt="Twitter Logo" />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className={classes.logo}
            src={instagramLogo}
            alt="Instagram Logo"
          />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
