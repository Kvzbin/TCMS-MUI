import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

function About({ color }) {
  return (
    <>
      <Navbar color={color} />
      <Container>
        <Grid
          container
          sx={{
            padding: "20px 0",
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              paddingBottom: "10px",
              textAlign: "center",
              width: "100%",
            }}
          >
            About Us
          </Typography>
          <Grid item xs={12} md={12} mb="40px">
            <img
              style={{
                width: "17rem",
                height: "9rem",
                borderRadius: "15px",
                float: "left",
                marginRight: "30px",
                marginBottom: "15px",
                transition: "transform 0.3s ease", // Smoother and quicker transition
              }}
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGl0fGVufDB8fDB8fHww"
              alt="img-1"
            />
            <Typography
              variant="body2"
              textAlign="justify"
              lineHeight={1.5}
              sx={{}}
            >
              Centre for Development of Advanced Computing (C-DAC) is the
              premier R&D organization of the Ministry of Electronics and
              Information Technology (MeitY) for carrying out R&D in IT,
              Electronics and associated areas. Different areas of C-DAC, had
              originated at different times, many of which came out as a result
              of identification of opportunities.
              <br />
              C-DAC has today emerged as a premier R&D organization in IT&E
              (Information Technologies and Electronics) in the country working
              on strengthening national technological capabilities in the
              context of global developments in the field and responding to
              change in the market need in selected foundation areas.
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <img
              style={{
                width: "17rem",
                height: "9rem",
                float: "right",
                borderRadius: "15px",
                marginLeft: "30px",
                marginBottom: "15px",
              }}
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2glMjBpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="img-2"
            />
            <Typography variant="body2" textAlign="justify" lineHeight={1.5}>
              Centre for Development of Advanced Computing (C-DAC) is the
              premier R&D organization of the Ministry of Electronics and
              Information Technology (MeitY) for carrying out R&D in IT,
              Electronics and associated areas. Different areas of C-DAC, had
              originated at different times, many of which came out as a result
              of identification of opportunities.
              <br />
              C-DAC's Education and Training programmes are aimed at creating
              skilled manpower in the country by providing quality training
              programmes in the field of Electronics and ICT. This activity
              started almost two decades ago with a humble beginning of training
              about 20 students per year, but has today grown to an extent of
              training more than 5000 students per year.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;
