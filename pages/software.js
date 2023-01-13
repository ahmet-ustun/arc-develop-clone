import React from "react";
import Lottie from "react-lottie";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import documentAnimation from "../src/animations/documentsAnimation/data.js";
import scalableAnimation from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import experienceAnimation from "../src/animations/uxAnimation/data.js";

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
  itemContainer: {
    maxWidth: "40em",
  },
}));

function SoftwareDevelopment({ setTabValue, setItemIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scalableOptions = {
    loop: true,
    autoplay: true,
    animationData: scalableAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const experienceOptions = {
    loop: true,
    autoplay: true,
    animationData: experienceAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Software Design & Development - Free Estimate | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with 
          gorgeous designs from scratch - let us optimize your 
          business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | Services > Software Development"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arc-development-clone.vercel.app/software"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arc-development-clone.vercel.app/software"
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
              href="/services"
              onClick={() => {
                setTabValue(1);
              }}
            >
              <img src="/assets/backArrow.svg" alt="Back to Services Page" />
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
              Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "left"}
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ background: "transparent" }}
              component={Link}
              href="/mobile"
              onClick={() => {
                setTabValue(1);
                setItemIndex(1);
              }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to Mobile App Development"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent="center"
        style={{
          marginTop: "15em",
          marginBottom: "20em",
        }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Save Energy
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="Save Energy Icon" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em", margin: matchesSM && "10em auto" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Save Time
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="Save Time Icon" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="Save Money Icon" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent={matchesMD ? "center" : "space-between"}
        style={{ display: matchesMD && "grid" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD && "15em" }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "left"}
                gutterBottom
              >
                Digital Documents
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM && "2em" }}>
            <Lottie
              options={documentOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column-reverse" : "row"}
          md
        >
          <Grid item md style={{ marginTop: matchesSM && "2em" }}>
            <Lottie
              options={scalableOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "left"}
                gutterBottom
              >
                Scalable
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ margin: "20em auto" }}
      >
        <Grid
          item
          container
          direction={matchesSM ? "column-reverse" : "column"}
          alignItems="center"
        >
          <Grid item style={{ marginTop: matchesSM && "2em" }}>
            <img
              src="/assets/root.svg"
              alt="Tree with Roots"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent={matchesMD ? "center" : "space-between"}
        style={{ marginBottom: "20em", display: matchesMD && "grid" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD && "15em" }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "left"}
                gutterBottom
              >
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM && "2em" }}>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column-reverse" : "row"}
          md
        >
          <Grid item md style={{ marginTop: matchesSM && "2em" }}>
            <Lottie
              options={experienceOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "left"}
                gutterBottom
              >
                User Experience
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
}

export default SoftwareDevelopment;
