import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../SidebarLeft/Sidebar";

const Employee = ({ sidebarColor, darkMode }) => {
  return (
    <>
      <Topbar />
      <Sidebar darkMode={darkMode} sidebarColor={sidebarColor} />
      <div style={{
        height: "69vh",
      }}>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <Typography variant="h5">Welcome to the Employee Page</Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Employee;
