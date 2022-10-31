import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import Lottie from "react-lottie";

import integrationAnimation from "../animations/integrationAnimation/data.json";

import prevArrow from "../assets/backArrow.svg";
import nextArrow from "../assets/forwardArrow.svg";
import magnifying from "../assets/analytics.svg";
import globeGreen from "../assets/ecommerce.svg";
import megaphone from "../assets/outreach.svg";
import seoContest from "../assets/seo.svg";

import CallToAction from "./ui/CallToAction.js";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3em",
      paddingRight: "3em",
    },
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

function WebsiteDevelopment({ setTabValue, setItemIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent={matchesMD && "center"}
        style={{ marginTop: "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "-3.5em", marginRight: "1em" }}
          >
            <IconButton
              style={{ background: "transparent" }}
              component={Link}
              to="/services/mobile"
              onClick={() => {
                setTabValue(1);
                setItemIndex(2);
              }}
            >
              <img src={prevArrow} alt="Back to Mobile App Development" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container className={classes.heading} direction="column">
          <Grid item>
            <Typography
              variant="h2"
              align={matchesMD ? "center" : "left"}
              gutterBottom
            >
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ background: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => {
                setTabValue(1);
                setItemIndex(0);
              }}
            >
              <img src={nextArrow} alt="Forward to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container className={classes.rowContainer} alignItems="center">
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={magnifying}
                alt="Magnifying Glass"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.paragraphContainer}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WebsiteDevelopment;
