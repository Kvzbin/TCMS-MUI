import {
  AppBar,
  Typography,
  Box,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  MenuList,
} from "@mui/material";
import Logo from "../../assets/Logo.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drop from "./Drop";
import "./Navbar.css";

function Navbar({ color }) {
  const [anchor, setAnchor] = useState(null);

  const openMenu = (e) => {
    setAnchor(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ padding: "2px 10px", backgroundColor: color }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={Logo}
              alt="C-DAC Logo"
              style={{ width: 45, borderRadius: "50%", marginRight: "10px" }}
            />
            <Typography
              variant="body1"
              component="div"
              color="inherit"
              sx={{ flexGrow: 1 }}
            >
              Training Centre Management System (TCMS)
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button color="inherit" className="nav-right-btn" size="small">
              <Link style={{ color: "inherit" }} to="/">
                Home
              </Link>
            </Button>
            <Drop />
            <Button color="inherit" className="nav-right-btn" size="small">
              <Link style={{ color: "inherit" }} to="/about-us">
                About Us
              </Link>
            </Button>
            <Button color="inherit" className="nav-right-btn" size="small">
              <Link style={{ color: "inherit" }} to="/contact-us">
                Contact Us
              </Link>
            </Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchor}
              open={Boolean(anchor)}
              onClose={closeMenu}
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
              }}
            >
              <MenuList className="burger">
                <MenuItem>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/guest-registration">Guest Registration</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/employee-registration">Employee Registration</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/about-us">About Us</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/contact-us">Contact Us</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { AppBar, Toolbar, Box, Typography, Button, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [anchor, setAnchor] = useState(null); // State for mobile menu

//   // Handlers for opening and closing mobile menu
//   const openMenu = (event) => {
//     setAnchor(event.currentTarget);
//   };

//   const closeMenu = () => {
//     setAnchor(null);
//   };

//   return (
//     <AppBar position="static" sx={{ padding: "2px 10px", backgroundColor: "#3f51b5" }}>
//       <Toolbar>
//         {/* Logo and Title */}
//         <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//           <img
//             src={"path-to-logo.png"} // Replace with actual logo path
//             alt="Logo"
//             style={{ width: 45, borderRadius: "50%", marginRight: "10px" }}
//           />
//           <Typography
//             variant="body1"
//             component="div"
//             color="inherit"
//             sx={{ flexGrow: 1 }}
//           >
//             Training Centre Management System (TCMS)
//           </Typography>
//         </Box>

//         {/* Navigation for Medium and Larger Screens */}
//         <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
//           <Button color="inherit" size="small">
//             <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
//               Home
//             </Link>
//           </Button>
//           <Button color="inherit" size="small">
//             <Link style={{ color: "inherit", textDecoration: "none" }} to="/about-us">
//               About Us
//             </Link>
//           </Button>
//           <Button color="inherit" size="small">
//             <Link style={{ color: "inherit", textDecoration: "none" }} to="/contact-us">
//               Contact Us
//             </Link>
//           </Button>
//         </Box>

//         {/* Burger Menu for Small Screens */}
//         <Box sx={{ display: { xs: "flex", md: "none" } }}>
//           <IconButton
//             size="large"
//             edge="end"
//             color="inherit"
//             onClick={openMenu}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchor}
//             open={Boolean(anchor)}
//             onClose={closeMenu}
//             sx={{ display: { xs: "block", md: "none" }, position: "absolute" }}
//           >
//             <MenuList>
//               <MenuItem onClick={closeMenu}>
//                 <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
//               </MenuItem>
//               <Drop />
//               <MenuItem onClick={closeMenu}>
//                 <Link to="/about-us" style={{ textDecoration: "none", color: "inherit" }}>About Us</Link>
//               </MenuItem>
//               <MenuItem onClick={closeMenu}>
//                 <Link to="/contact-us" style={{ textDecoration: "none", color: "inherit" }}>Contact Us</Link>
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
