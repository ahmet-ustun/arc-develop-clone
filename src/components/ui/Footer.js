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

function Footer(props) {
  const classes = useStyles();

  const { tabValue, setTabValue, itemIndex, setItemIndex } = props;

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justifyContent="center">
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
      <img
        className={classes.adornment}
        src={footerAdornment}
        alt="Decorative Black Slash"
      />
    </footer>
  );
}

export default Footer;
