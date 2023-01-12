import React from "react";
import Lottie from "react-lottie";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

import Link from "../src/Link.js";
import CallToAction from "../src/ui/CallToAction.js";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3em",
      paddingRight: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
}));

function MobileAppDevelopment({ setTabValue, setItemIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Mobile App Design & Development - Free Estimate | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile applications, made easy. Our cutting-edge 
          mobile app development process let us build beautifully 
          designed, carefully crafted apps for both iOS and Android."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | Services > Mobile App Development"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arc-development-clone.vercel.app/mobile"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arc-development-clone.vercel.app/mobile"
        />
      </Head>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent={matchesMD ? "center" : undefined}
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
              href="/software"
              onClick={() => {
                setTabValue(1);
                setItemIndex(1);
              }}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to Software Development"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container className={classes.heading} direction="column">
          <Grid item>
            <Typography
              variant="h1"
              align={matchesMD ? "center" : "left"}
              style={{ fontSize: matchesXS && "2.25em" }}
              gutterBottom
            >
              Mobile App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ background: "transparent" }}
              component={Link}
              href="/website"
              onClick={() => {
                setTabValue(1);
                setItemIndex(3);
              }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to Website Development"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesSM ? "column" : "row"}
        style={{ margin: "15em auto" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : "left"}
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "left"}
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "left"}
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{
              maxWidth: matchesMD ? "15em" : "20em",
              height: matchesMD && "20em",
            }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : "left"}
              gutterBottom
            >
              Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "left"}
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "left"}
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "15em", display: matchesMD && "grid" }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Service
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKnife.svg" alt="Swiss Army Knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{ margin: matchesMD && "10em auto" }}
          md
        >
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              alt="Tear-One-Off Sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Engage Users
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/increaseEngagement.svg" alt="App Notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
}

export default MobileAppDevelopment;
