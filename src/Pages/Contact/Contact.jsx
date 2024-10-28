import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import GroupsIcon from "@mui/icons-material/Groups";
import Navbar from "../../Components/Navbar/Navbar";

function Contact({ color }) {
  return (
    <>
      <Navbar color={color} />
      <Container>
        <Paper
          square={false}
          elevation={6}
          style={{
            padding: "35px 20px",
            maxWidth: "280px",
            margin: "60px auto",
          }}
        >
          <Grid container spacing={1} flexDirection="column">
            <Typography variant="h5" textAlign="center">
              Contact Us
            </Typography>
            {/* first row */}
            <Grid item xs={12}>
              <Box className="c-item">
                <LocationOnIcon fontSize="medium" />
                <Box className="child-data">
                  <Typography className="child" variant="body1">
                    Location :
                  </Typography>
                  <Typography className="child" variant="caption">
                    Plot no, 20 FC-33 Institutional Area, Jasola,
                    <br /> New Delhi, Delhi 110025
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* sec row */}
            <Grid item xs={12} sm={12}>
              <Box className="c-item duck">
                <MailIcon fontSize="small" />
                <Box className="duck-1">
                  <Typography variant="body1">Email :</Typography>
                  <Typography variant="caption">
                    support [at] tcms [dot] com
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* // third row */}
            <Grid item xs={12} sm={12}>
              <Box className="c-item duck">
                <CallIcon fontSize="small" />
                <Box className="duck-1">
                  <Typography variant="body1">Call :</Typography>
                  <Typography variant="caption">011-2651 0221</Typography>
                </Box>
              </Box>
            </Grid>
            {/* // forth row */}
            <Grid item xs={12} md={12}>
              <Box className="c-item duck">
                <GroupsIcon fontSize="small" />
                <Box className="duck-1">
                  <Typography variant="body1">Open Hours :</Typography>
                  <Typography variant="caption">
                    Mon-Sat: 09AM - 05:30PM
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Contact;
