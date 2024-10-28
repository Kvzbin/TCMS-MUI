// Sidebar.js
import React, { useState } from "react";
import {
  Box,
  Drawer,
  MenuItem,
  Select,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
  Person,
  Event,
  Schedule,
  LibraryBooks,
  ExitToApp,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ darkMode, sidebarColor }) => {
  const [role, setRole] = useState("admin");
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openAttendance, setOpenAttendance] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };

  const handleAttendanceClick = () => {
    setOpenAttendance(!openAttendance);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: open ? 240 : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? ({xs: 230,md: 260}) : 0,
            boxSizing: "border-box",
            backgroundColor: darkMode ? "#292828" : sidebarColor,
            color: "inherit",
            padding: "15px 10px", //sure sidebarColor is passed properly
            marginTop: {xs: "6.4rem",sm: "4.7rem" , md: "4.3rem"},
            overflowY: "auto", // Make the drawer scrollable if content overflows
            height: {xs: "calc(100vh - 40px)", md: "calc(100vh - 64px)"}, // Full height minus Navbar height
            // Custom scrollbar styling
            scrollbarWidth: "inherit", // For Firefox browsers
            scrollbarColor: `${darkMode ? "#888" : "#1976d2"} ${
              darkMode ? "#333" : "#f4f4f4"
            }`, // thumb and track colors for Firefox
            "&::-webkit-scrollbar": {
              width: "5px", // Width of the scrollbar in Chrome/Safari
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: darkMode ? "#333" : "#f4f4f4", // Track color
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: darkMode ? "#888" : "#1976d2", // Thumb color
              borderRadius: "10px", // Rounded thumb for modern design
              border: `2px solid ${darkMode ? "#333" : "#f4f4f4"}`, // Padding around thumb for better contrast
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: darkMode ? "#aaa" : "#1565c0", // Darker color on hover
            },
          },
        }}
      >
        <Box sx={{ overflow: "auto", height: "100%" }}>
          <Box
            sx={{
              p: "0 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Typography color="inherit" variant="h6">
              Profile
            </Typography>
          </Box>
          <Box sx={{ m: "10px 15px" }}>
            <Select
              value={role}
              onChange={handleRoleChange}
              fullWidth
              size="small"
              color="info"
            >
              <MenuItem value="admin" component={Link} to="/dashboard/admin">Admin</MenuItem>
              <MenuItem value="employee" component={Link} to="/dashboard/employee">Employee</MenuItem>
            </Select>
          </Box>
          <Divider />
          <List>
            <ListItem className="sidebar-data" onClick={handleProfileClick}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
              {openProfile ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              className="sidebar-data"
              in={openProfile}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemText primary="Profile Security" />
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemText primary="Change Password" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem className="sidebar-data" onClick={handleAttendanceClick}>
              <ListItemIcon>
                <Event />
              </ListItemIcon>
              <ListItemText primary="Attendance" />
              {openAttendance ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              className="sidebar-data"
              in={openAttendance}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4, fontSize: ".7em" }}>
                  <ListItemText primary="Faculty Attendence" />
                </ListItem>
                <ListItem sx={{ pl: 4, fontSize: ".7em" }}>
                  <ListItemText primary="Guest Attendence" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem className="sidebar-data">
              <ListItemIcon>
                <Schedule />
              </ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem className="sidebar-data">
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Leave" />
            </ListItem>
            <ListItem className="sidebar-data">
              <ListItemIcon>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        sx={{
          position: "absolute",
          top: {xs: "8%",sm: "6.4%",md:"5.5%"},
          left: {xs: "2%", md: "17px"},
          transform: "translateY(-50%)",
          // zIndex: 1000, // Ensure it stays on top of other elements
        }}
        color="inherit"
        onClick={toggleDrawer}
      >
        <IconButton>{open ? <CloseIcon /> : <MenuIcon />}</IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
