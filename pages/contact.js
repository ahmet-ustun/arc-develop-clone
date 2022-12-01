import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import Link from "../src/Link.js";
import ButtonArrow from "../src/ui/ButtonArrow.js";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: 'url("/assets/background.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: 'url("/assets/mobileBackground.jpg")',
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    padding: "0 0.3em",
    marginTop: "5em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

function ContactUs({ setTabValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    color: "",
  });

  const clearInformation = () => {
    setName("");
    setEmail("");
    setPhone("");
    setText("");
  };

  const renderButton = (text) => (
    <>
      {text}
      <img
        src="/assets/send.svg"
        alt="Paper Airplane"
        style={{ marginLeft: "0.5em" }}
      />
    </>
  );

  const handleChange = (event) => {
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        emailRegex.test(event.target.value)
          ? setEmailHelper("")
          : setEmailHelper("Invalid Email");
        break;
      default:
        setPhone(event.target.value);
        phoneRegex.test(event.target.value)
          ? setPhoneHelper("")
          : setPhoneHelper("Invalid Phone");
        break;
    }
  };

  const handleConfirm = () => {
    setIsLoading(true);

    axios
      .get(
        "https://us-central1-arc-development-0.cloudfunctions.net/sendMail",
        {
          params: {
            name,
            email,
            phone,
            text,
          },
        }
      )
      .then((response) => {
        setIsOpen(false);
        setIsLoading(false);
        clearInformation();
        setAlert({
          open: true,
          message: "Message sent successfully 🎉",
          color: "#4BB543",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setAlert({
          open: true,
          message: "An error occurred, try again!",
          color: "#FF3232",
        });
      });
  };

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us - Email & Phone | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the software, mobile app 
          or website design and development process. Send us a 
          message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | Contact Us"
        />
        <meta property="og:url" key="og:url" content="www.google.com/contact" />
        <link rel="canonical" key="canonical" href="www.google.com/contact" />
      </Head>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginTop: matchesMD && "2em",
          marginBottom: matchesMD && "2em",
        }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ width: matchesSM ? 295 : 345 }}
          >
            <Grid item>
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="Phone Icon"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:+359 88 233 0606"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +359 88 233 0606
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="Email Icon"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:ahmetustunt@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    ahmetustunt@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField
                  id="name"
                  label="Name"
                  value={name}
                  fullWidth
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  label="Email"
                  value={email}
                  error={!!emailHelper}
                  helperText={emailHelper}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="phone"
                  label="Phone"
                  value={phone}
                  error={!!phoneHelper}
                  helperText={phoneHelper}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item style={{ width: "96.5%" }}>
                <TextField
                  id="text"
                  className={classes.message}
                  value={text}
                  fullWidth
                  placeholder="Tell us more about your project"
                  multiline
                  minRows={10}
                  InputProps={{ disableUnderline: true }}
                  onChange={(event) => setText(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                disabled={
                  !name ||
                  !email ||
                  !phone ||
                  !text ||
                  !!emailHelper ||
                  !!phoneHelper
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setIsOpen(true)}
              >
                {renderButton("Send Message")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={isOpen}
        style={{ zIndex: 1310 }}
        fullScreen={matchesSM}
        PaperProps={{ style: { padding: "0.8em" } }}
        onClose={() => setIsOpen(false)}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                id="name"
                label="Name"
                style={{ borderBottom: "2px solid #97A2AA" }}
                value={name}
                disabled
                fullWidth
                InputProps={{ disableUnderline: true }}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                id="email"
                label="Email"
                style={{ borderBottom: "2px solid #97A2AA" }}
                value={email}
                error={!!emailHelper}
                helperText={emailHelper}
                disabled
                fullWidth
                InputProps={{ disableUnderline: true }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="phone"
                label="Phone"
                style={{ borderBottom: "2px solid #97A2AA" }}
                value={phone}
                error={!!phoneHelper}
                helperText={phoneHelper}
                disabled
                fullWidth
                InputProps={{ disableUnderline: true }}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              style={{
                width: matchesXS ? "96.5%" : matchesSM ? "98%" : "96.5%",
              }}
            >
              <TextField
                id="text"
                className={classes.message}
                style={{ borderColor: "#97A2AA" }}
                value={text}
                disabled
                fullWidth
                multiline
                minRows={10}
                InputProps={{ disableUnderline: true }}
                onChange={(event) => setText(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{
              margin: "2em auto 0.8em",
              width: matchesSM ? 295 : 345,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Button color="primary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendButton}
                style={{ width: 145 }}
                disabled={isLoading}
                onClick={handleConfirm}
              >
                {isLoading ? (
                  <CircularProgress size={30} />
                ) : (
                  renderButton("Confirm")
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
            display: "block",
            textAlign: "center",
          },
        }}
        onClose={() => setAlert({ open: false, message: "", color: "" })}
      />
      <Grid
        item
        container
        className={classes.background}
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent={matchesMD ? "center" : "space-around"}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br />
                Visible Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                gutterBottom
              >
                Take advantage of the 21st century.
              </Typography>
              <Grid
                item
                container
                justifyContent={matchesMD ? "center" : undefined}
              >
                <Button
                  className={classes.learnButton}
                  variant="outlined"
                  component={Link}
                  href="/revolution"
                  onClick={() => setTabValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            href="/estimate"
            onClick={() => setTabValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactUs;
