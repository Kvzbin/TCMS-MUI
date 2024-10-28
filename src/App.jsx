import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuestRegistration from "./Pages/GuestRegistration/GuestRegistration";
import EmployeeRegistration from "./Pages/EmployeeRegistration/EmployeeRegistration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import SettingsSidebar from "./Pages/SettingsSidebar/SettingsSidebar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Otp from "./Pages/OTP/Otp";
import { UserProvider } from "./Pages/UserContext/UserContext";
import Profile from "./Pages/Profile/Profile";
import Admin from "./Pages/Admin/Admin";
import Employee from "./Pages/Employee/Employee";

function App() {
  const [headerColor, setHeaderColor] = useState("#ffffff");
  const [footerColor, setFooterColor] = useState("#ffffff");
  const [sidebarColor, setSidebarColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(14);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: headerColor, // Primary color used for AppBar
      },
    },
    typography: {
      fontSize,
    },
  });

  const handleHeaderColorChange = (newColor) => {
    setHeaderColor(newColor);
  };

  const handleFooterColorChange = (newColor) => {
    setFooterColor(newColor);
  };

  const handleSidebarColorChange = (newColor) => {
    setSidebarColor(newColor);
  };

  const handleFontSizeChange = (action) => {
    if (action === "increase") {
      setFontSize((prevSize) => Math.min(prevSize + 1, 16));
    } else if (action === "decrease") {
      setFontSize((prevSize) => Math.max(prevSize - 1, 12)); // Prevent going below 12px
    } else {
      setFontSize(14); // Reset to default
    }
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <Router>
            {/* <Navbar color={headerColor}/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route
                path="/dashboard/admin"
                element={
                  <Admin darkMode={darkMode} sidebarColor={sidebarColor} />
                }
              ></Route>
              <Route
                path="/dashboard/employee"
                element={
                  <Employee darkMode={darkMode} sidebarColor={sidebarColor} />
                }
              ></Route>
              <Route
                path="/dashboard"
                element={
                  <Dashboard darkMode={darkMode} sidebarColor={sidebarColor} />
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/guest-registration"
                element={<GuestRegistration />}
              />
              <Route
                path="/employee-registration"
                element={<EmployeeRegistration />}
              />
            </Routes>
            <Footer color={footerColor} darkMode={darkMode} />
            <SettingsSidebar
              onHeaderColorChange={handleHeaderColorChange}
              onFooterColorChange={handleFooterColorChange}
              onSidebarColorChange={handleSidebarColorChange}
              onFontSizeChange={handleFontSizeChange}
              onToggleDarkMode={handleToggleDarkMode}
            />
          </Router>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
