
import React, { useRef, useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";
import Captcha from "react-captcha-code";
import Navbar from "../../Components/Navbar/Navbar";
import { useUser } from '../UserContext/UserContext'; // Import the context
import "./Home.css";

const Login = ({headerColor}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const { setUser } = useUser();

  // Handle CAPTCHA generation
  const handleCaptchaChange = (newCaptcha) => {
    setCaptcha(newCaptcha);
  };

  // Handle CAPTCHA reload
  const reloadCaptcha = () => {
    captchaRef.current.refresh();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && captcha === captchaInput) {
      // Redirect to next route if login is successful
      setUser({ username });
      navigate("/Otp");
      console.log("Username : " + username,"Password : " + password, "", captchaInput);
    } else {
      // Show an alert if login fails
      console.log(username, captchaInput);
      // alert("Invalid username or incorrect CAPTCHA");
      captchaRef.current.refresh();
      setCaptchaInput("");
      setErrorMessage("Invalid username or CAPTCHA");
    }
  };


  return (
    <>
      <Navbar color={headerColor} />
      <Container>
        <Paper
          elevation={6}
          style={{
            padding: "20px 30px",
            maxWidth: "280px",
            margin: "50px auto",
            // backgroundColor: '#2E073F'
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            component="h2"
            gutterBottom
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              color="info"
              size="small"
              margin="none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              color="info"
              size="small"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Captcha
                ref={captchaRef}
                charNum={4}
                onChange={handleCaptchaChange}
                height={40}
              />
              <IconButton onClick={reloadCaptcha} aria-label="reload-captcha">
                <RefreshIcon />
              </IconButton>
            </div>
            <TextField
              label="Enter CAPTCHA"
              variant="outlined"
              fullWidth
              required
              color="info"
              size="small"
              margin="normal"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
            {errorMessage && (
              <Typography
                variant="body2"
                color="error"
                style={{  fontSize: '.8rem' }}
              >
                {errorMessage}
              </Typography>
            )}
            <Button
              variant="contained"
              color="success"
              type="submit"
              fullWidth
              style={{ marginTop: "5px" }}
            >
              Login
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "15px",
                fontSize: "1rem",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/register">
                Register
              </Link>
              <Link style={{ textDecoration: "none" }} to="/forgot-password">
                Forgot Password
              </Link>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
