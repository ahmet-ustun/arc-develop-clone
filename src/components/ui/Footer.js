import React from "react";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";

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
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justifyContent="center">
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/">
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/services">
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/services/software"
            >
              Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/services/mobile"
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/services/website"
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
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
            >
              Mission
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/about">
              About Us
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about">
              Vision
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about">
              History
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about">
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/contact">
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        className={classes.adornment}
        src={footerAdornment}
        alt="Decorative Black Slash"
      />
    </footer>
  );
}

export default Footer;
