import React from "react";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Link from "../src/Link.js";
import ButtonArrow from "../src/ui/ButtonArrow.js";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

function Services({ setTabValue, setItemIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Software, Mobile App & Website Development | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile app and website 
          development services with sleek custom designs - get 
          a free online estimate instantly with our calculator!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | Services"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arc-development-clone.vercel.app/services"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arc-development-clone.vercel.app/services"
        />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: "2em",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/*----- Software Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
              width: matchesSM || "35em",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>.
            </Typography>
            <Button
              className={classes.learnButton}
              variant="outlined"
              component={Link}
              href="/software"
              onClick={() => {
                setTabValue(1);
                setItemIndex(0);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: !matchesSM && "5em",
            }}
          >
            <img
              className={classes.icon}
              src="/assets/customSoftwareIcon.svg"
              alt="Software Development Icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Mobile App Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: !matchesSM && "5em",
              textAlign: matchesSM && "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Mobile App Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Service. Extend Access. Engage Users.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Integrate your web experience or create a standalone app.
            </Typography>
            <Button
              className={classes.learnButton}
              variant="outlined"
              component={Link}
              href="/mobile"
              onClick={() => {
                setTabValue(1);
                setItemIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src="/assets/mobileIcon.svg"
              alt="Mobile App Development Icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Website Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{ marginBottom: "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
              width: matchesSM || "35em",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Website Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Optimized websites for search engines, {matchesXS && <br />}built
              for speed.
            </Typography>
            <Button
              className={classes.learnButton}
              variant="outlined"
              component={Link}
              href="/website"
              onClick={() => {
                setTabValue(1);
                setItemIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: !matchesSM && "5em",
            }}
          >
            <img
              className={classes.icon}
              src="/assets/websiteIcon.svg"
              alt="Website Development Icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
