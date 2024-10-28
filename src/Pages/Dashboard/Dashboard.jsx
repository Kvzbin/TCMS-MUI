import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../SidebarLeft/Sidebar";

const Dashboard = ({ sidebarColor, darkMode }) => {
  return (
    <>
      <Topbar />
      <Sidebar darkMode={darkMode} sidebarColor={sidebarColor} />
      <div style={{
        height: '69vh',
      }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <Typography variant="h5">Welcome to the Dashboard!</Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
