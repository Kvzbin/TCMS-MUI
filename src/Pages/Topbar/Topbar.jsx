import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo.jpg";
import { useLocation } from "react-router-dom";
import { useUser } from "../UserContext/UserContext"; // Import the context
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaUser, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const location = useLocation();
  const username = location.state;
  const { user } = useUser(); // Get user from context
  const userName = user?.username || "User";

  return (
    <>
      <AppBar
        position="static"
        sx={{ padding: { md: "2px 50px", xs: "2px 35px" } }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   gap: "5px",
              // }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
                textAlign: { xs: "center", md: "left" }, // Center text on small screens
              }}
            >
              <img
                src={Logo}
                alt="C-DAC Logo"
                style={{ width: 40, borderRadius: "50%", marginRight: "10px" }}
              />
              <Typography variant="body1" color="inherit" sx={{
                fontSize: { xs: "0.8rem", md: "1.1rem"}, // Smaller font size on small screens
                fontWeight: { xs: "bold", md: "400"}
              }}>
                Training Centre Management System (TCMS)
              </Typography>
            </Box>
            <Box
              className="dashbar-head3 dropdown-container"
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              // }}
              sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
              gap: { xs: "0", md: "5px" }, // Add spacing between elements
            }}
            >
              <Typography className="welcome-message" bold variant="body2" sx={{
                fontSize: { xs: "0.8rem", md: "1.1rem" }, // Smaller font size on small screens
                textAlign: {xs: "center",}
              }}>
                Welcome,<span className="user-name"> {userName}</span>
              </Typography>
              <IconButton>
                <AccountCircleIcon
                  className="dropdown-heading"
                  fontSize="medium"
                  sx={{ color: "GrayText"}}
                />
              </IconButton>
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <FaUser className="icon" />
                  <Link to="/profile"> Profile </Link>
                </div>
                <div className="dropdown-item">
                  <FaTachometerAlt className="icon" />
                  <Link to="/dashboard"> Dashboard </Link>
                </div>
                <hr />
                <div className="dropdown-item">
                  <FaSignOutAlt className="icon" />
                  <Link to="/">Logout</Link>
                </div>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Topbar;
