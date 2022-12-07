import React from "react";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

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

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Website Design & Development - Free Estimate | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch 
          to be blazing fast website development. Optimized 
          code, server-side rendering and perfect responsive design."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | Services > Website Development"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arc-development-clone.vercel.app/website"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arc-development-clone.vercel.app/website"
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
              href="/mobile"
              onClick={() => {
                setTabValue(1);
                setItemIndex(2);
              }}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to Mobile App Development"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container className={classes.heading} direction="column">
          <Grid item>
            <Typography
              variant="h1"
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
              href="/services"
              onClick={() => {
                setTabValue(1);
                setItemIndex(0);
              }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to Services Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "left"}
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/knowledge.svg"
                alt="Magnifying Glass"
                style={{ marginLeft: matchesSM || "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : "left"}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/ecommerce.svg" alt="Globe with Dollar Signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM || "1em" }}
        >
          <Typography
            variant="body1"
            align={matchesSM ? "center" : "left"}
            paragraph
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : "left"}
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "left"}
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/outreach.svg"
                alt="Yellow Megaphone"
                style={{ marginLeft: matchesSM || "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM || "1em" }}
        >
          <Typography variant="body1" align={matchesSM ? "center" : "left"}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/seo.svg" alt="SEO Contest Winner" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM || "1em" }}
        >
          <Typography
            variant="body1"
            align={matchesSM ? "center" : "left"}
            paragraph
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : "left"}
            paragraph
          >
            If you’re like us, probably never.
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : "left"}
            paragraph
          >
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
}

export default WebsiteDevelopment;
