import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const EmployeeRegistration = ({ color }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (employeeNumber) => {
    navigate(`/employee/${employeeNumber}`);
  };

  return (
    <>
      <Navbar color={color} />
      <div
        style={{
          height: "70vh",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          marginTop="30px"
          onMouseLeave={handleMouseLeave}
        >
          <Typography
            variant="h5"
            onMouseEnter={handleMouseEnter}
            style={{ cursor: "pointer" }}
          >
            Employee Registration
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMouseLeave}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {[...Array(7)].map((_, index) => (
              <MenuItem
                key={index + 1}
                onClick={() => handleMenuClick(index + 1)}
              >
                Employee {index + 1}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
    </>
  );
};

export default EmployeeRegistration;
