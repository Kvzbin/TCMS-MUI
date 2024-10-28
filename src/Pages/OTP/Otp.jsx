import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import './Otp.css';

function Otp({ headerColor }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state;

  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    setGeneratedOtp(otp);
    setMessage(
      `OTP sent to ${phoneNumber}. (For demo purposes, the OTP is: ${otp})`
    );
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setMessage("OTP verified successfully");
      navigate("/dashboard", { username });
    } else {
      setMessage("Invalid OTP");
    }
  };


  return (
    <>
      <Navbar color={headerColor} />
      <Container maxWidth="xs">
        <Box >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginTop: "30px" }}
          >
            Otp Verification
          </Typography>
          <TextField
            label="Enter Ph-no."
            name="Enter Ph-no."
            value={phoneNumber}
            size="small"
            fullWidth
            color="info"
            margin="normal"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br />
          <Button onClick={sendOtp} variant="outlined" color="success" size="small">
            Send OTP
          </Button>
          <br />
          {generatedOtp && (
            <>
              <TextField
                label="Enter OTP"
                value={otp}
                size="small"
                fullWidth
                color="info"
                margin="normal"
                onChange={(e) => setOtp(e.target.value)}
              />
              <br />
              <Button onClick={verifyOtp} sx={{marginBottom: '20px'}} variant="outlined" color="success" size="small">
                Verify OTP
              </Button>
            </>
          )}

          <p>{message}</p>
        </Box>
      </Container>
    </>
  );
}

export default Otp;
