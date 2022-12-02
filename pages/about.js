import React from "react";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";

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
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

function AboutUs({ setTabValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">About Us - History & Team | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="We provide the fastest, most modern, affordable and 
          aesthetic software design and development services in the 
          Midwest. Get a free online estimate for your future project now!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | About Us"
        />
        <meta property="og:url" key="og:url" content="www.google.com/about" />
        <link rel="canonical" key="canonical" href="www.google.com/about" />
      </Head>
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h1" align={matchesMD ? "center" : "left"}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
        justifyContent="center"
      >
        <Typography
          variant="h4"
          className={classes.missionStatement}
          align="center"
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            style={{ maxWidth: "35em" }}
            lg
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : "left"}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                style={{ fontWeight: 700, fontStyle: "italic" }}
                paragraph
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src="/assets/history.svg"
              alt="Quill Pen on Book"
              style={{ maxHeight: matchesSM ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "15em" }}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" paragraph>
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            src="/assets/founder.jpg"
            alt="Zachary Reece"
            className={classes.avatar}
          />
        </Grid>
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item style={{ maxWidth: "45em", padding: "1.25em" }} lg>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed. I'm currently
                teaching a course about building responsive modern user
                interfaces on Udemy.com as well as beginning work on my first
                machine learning mobile application.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD && "2.5em" }}
            lg
          >
            <Grid item>
              <img
                src="/assets/yearbook.svg"
                alt="Founder's Yearbook"
                style={{ maxWidth: matchesSM && 300 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                A page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item style={{ maxWidth: "45em", padding: "1.25em" }} lg>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed. I'm currently
                teaching a course about building responsive modern user
                interfaces on Udemy.com as well as beginning work on my first
                machine learning mobile application.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : "flex-end"}
            lg
          >
            <Grid item>
              <img
                src="/assets/puppy.svg"
                alt="Founder's Puppy"
                style={{ maxWidth: matchesSM && 300 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                My little Dapple Dachshund, Sterling
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

export default AboutUs;
