import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../SidebarLeft/Sidebar";

function Profile() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Container maxWidth="md">
        <Box
          sx={{
            padding: "20px 30px",
            margin: "40px 20px",
            // boxShadow: "2",
          }}
        >
          <Grid container spacing={1}>
            <Box sx={{
              boxShadow: '3',
              width: '30%',
              marginRight: '20px',
            }}>
              <Grid
                item
                xs={12}
                md={3}
                style={{
                  // border: "2px solid black",
                  boxShadow: "2",
                  borderRadius: "5px",
                  padding: "70px 30px",
                }}
              >
                profile
              </Grid>
            </Box>

            <Box sx={{
              boxShadow: '3',
              width: '60%'
            }}>
              <Grid
                item
                xs={12}
                sm={9}
                style={{
                  // border: "2px solid black",
                  boxShadow: "2",
                  borderRadius: "5px",
                  padding: "70px 30px",
                }}
              >
                profile 2
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
