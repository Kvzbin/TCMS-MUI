import { Box, Typography } from "@mui/material";
import React from "react";

function Footer({ color , darkMode }) {
    const  year = new Date().getFullYear();


  return (
    <>
      <Box 
      // sx={{
      //   position: 'fixed',
      //   bottom: '0',
      //   width: '100%',
      //   borderTop: '1px solid #292828',
      //   backgroundColor: darkMode ? '#292828' : color,
      // }}>
      component="footer"
      sx={{
        position: {
          xs: 'relative', // Not fixed on smaller screens
          md: 'fixed',    // Fixed on medium and larger screens
        },
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        borderTop: '1px solid #292828',
        backgroundColor: darkMode ? '#292828' : color,
        padding: '3px 0',
        mt: {
          xs: '2rem', // Margin-top on small screens to push it down after content
          md: 0,      // No margin needed when fixed
        },
      }}>
        <Typography color='inherit' style={{ fontSize: '.65rem',textWrap: 'pretty', textAlign: 'center', padding: '8px 0'}}>
          Copyright &copy; {year} C-DAC Delhi, All Rights Reserved. <br/>
          Application Developed & Maintained by e-Governence Solution Group, C-DAC Delhi.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;

