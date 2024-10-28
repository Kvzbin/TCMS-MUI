import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  Box,
  Button,
  Switch,
  Typography,
  Grid,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import "./SettingSidebar.css";

function SettingsSidebar({
  onHeaderColorChange,
  onFooterColorChange,
  onSidebarColorChange,
  onFontSizeChange,
  onToggleDarkMode,
}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleColorChange = (section, color) => {
    if (section === "header") {
      onHeaderColorChange(color);
    } else if (section === "footer") {
      onFooterColorChange(color);
    } else if (section === "sidebar") {
      onSidebarColorChange(color);
    }
  };

  return (
    <>
      <IconButton
        className="settings-icon"
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          bottom: 55,
          right: 55,
          zIndex: 1000,
          color: "grey",
          transition: "transform 0.3s ease",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
        }}
      >
        <SettingsIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: 270, padding: 2.5 },
        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom>
            Theme Settings
          </Typography>

          {/* Header Color Picker */}
          <Typography variant="subtitle2">Change Header Color</Typography>
          <Grid className="setting-grid" container spacing={2}>
            {["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6"].map(
              (color, index) => (
                <Grid item xs={2} key={index}>
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      backgroundColor: color,
                      borderRadius: "50%",
                      border: "2px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => handleColorChange("header", color)}
                  />
                </Grid>
              )
            )}
          </Grid>
          {/* <Divider /> */}
          {/* Footer Color Picker */}
          <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
            Change Footer Color
          </Typography>
          <Grid className="setting-grid" container spacing={2}>
            {["#F6FF33", "#7D33FF", "#FF8C33", "#33FFD7", "#3339FF"].map(
              (color, index) => (
                <Grid item xs={2} key={index}>
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      backgroundColor: color,
                      borderRadius: "50%",
                      border: "2px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => handleColorChange("footer", color)}
                  />
                </Grid>
              )
            )}
          </Grid>
          {/* <Divider /> */}
          {/* Sidebar Color Picker */}
          <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
            Change Sidebar Color
          </Typography>
          <Grid className="setting-grid" container spacing={2}>
            {["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6"].map(
              (color, index) => (
                <Grid item xs={2} key={index}>
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      backgroundColor: color,
                      borderRadius: "50%",
                      border: "2px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => handleColorChange("sidebar", color)}
                  />
                </Grid>
              )
            )}
          </Grid>
          {/* <Divider /> */}
          {/* Font Size Buttons */}
          <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
            Adjust Font Size
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px 0",
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => onFontSizeChange("decrease")}
            >
              A-
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => onFontSizeChange("reset")}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => onFontSizeChange("increase")}
            >
              A+
            </Button>
          </Box>

          {/* Dark Mode Switch */}
          <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
            Toggle Dark Mode
          </Typography>
          <Switch onChange={onToggleDarkMode} />
        </Box>
      </Drawer>
    </>
  );
}

export default SettingsSidebar;
