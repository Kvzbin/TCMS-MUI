import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Captcha from "react-captcha-code";
import RefreshIcon from "@mui/icons-material/Refresh";
import Navbar from "../../Components/Navbar/Navbar";
import "./GuestRegistration.css";

const GuestRegistration = ({ color }) => {
  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    tel: "",
    mobile: "",
    email: "",
    username: "",
    password: "",
    passwordHint: "",
    securityQuestion1: "",
    securityAnswer1: "",
    securityQuestion2: "",
    securityAnswer2: "",
    securityQuestion3: "",
    securityAnswer3: "",
    captcha: "",
  });

  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaValid, setCaptchaValid] = useState(true);

  const navigate = useNavigate();
  const captchaRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (newCaptcha) => {
    setCaptcha(newCaptcha);
  };

  const reloadCaptcha = () => {
    captchaRef.current.refresh();
    setFormData({ ...formData, captcha: "" }); // Clear CAPTCHA input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      formData.captcha === captchaInput && formData.password.length >= 8;

    if (isValid) {
      navigate("/dashboard");
    } else {
      setCaptchaValid(false);
      captchaRef.current.refresh();
      setCaptchaInput("");
      setErrorMessage("Invalid username or CAPTCHA");
    }
  };

  return (
    <>
      <Navbar color={color} />
      <Container maxWidth="md">
        <Paper
          elevation={5}
          style={{ padding: "10px 30px", margin: "24px auto" }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "1.4rem",
                mb: "10px",
              }}
            >
              Guest Registration
            </Typography>
            <Grid container spacing={1.3}>
              {/* First Row: Salutation, First Name, Middle Name, Last Name */}
              <Grid item xs={12} sm={3}>
                <TextField
                  select
                  label="Salutation"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                >
                  {["Mr.", "Mrs.", "Ms.", "Dr."].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Middle Name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                />
              </Grid>

              {/* Second Row: Tel, Mobile, Email */}
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                />
              </Grid>

              {/* Third Row: Username, Password, Password Hint */}
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Password Hint"
                  name="passwordHint"
                  value={formData.passwordHint}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  color="info"
                  size="small"
                />
              </Grid>

              {/* Fourth Row: Security Questions */}
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Security Question 1"
                  name="securityQuestion1"
                  value={formData.securityQuestion1}
                  onChange={handleInputChange}
                  fullWidth
                  color="info"
                  size="small"
                  required
                >
                  {["Fav Place", "Fav Food", "Fav Book", "Fav Movie"].map(
                    (option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Answer"
                  name="securityAnswer1"
                  value={formData.securityAnswer1}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  color="info"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Security Question 2"
                  name="securityQuestion2"
                  value={formData.securityQuestion2}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  color="info"
                  size="small"
                >
                  {["Fav Place", "Fav Food", "Fav Book", "Fav Movie"].map(
                    (option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Answer"
                  name="securityAnswer2"
                  value={formData.securityAnswer2}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  color="info"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Security Question 3"
                  name="securityQuestion3"
                  value={formData.securityQuestion3}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  color="info"
                  size="small"
                >
                  {["Fav Place", "Fav Food", "Fav Book", "Fav Movie"].map(
                    (option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Answer"
                  name="securityAnswer3"
                  value={formData.securityAnswer3}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  color="info"
                  size="small"
                />
              </Grid>

              {/* Fifth Row: CAPTCHA */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Captcha
                  ref={captchaRef}
                  charNum={4}
                  height={40}
                  onChange={handleCaptchaChange}
                />
                <IconButton onClick={reloadCaptcha} aria-label="reload-captcha">
                  <RefreshIcon />
                </IconButton>
                <TextField
                  label="Enter CAPTCHA"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  fullWidth
                  size="small"
                  required
                  color="info"
                  error={!captchaValid}
                  helperText={!captchaValid ? "CAPTCHA is incorrect" : ""}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "30px", // Control height
                      fontSize: "12px", // Reduce font size
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "15px", // Label font size
                    },
                    "& .MuiOutlinedInput-root": {
                      padding: "20px 12px", // Reduce padding
                    },
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  size="small"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default GuestRegistration;
