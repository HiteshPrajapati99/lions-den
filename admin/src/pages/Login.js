import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const [InputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = new FormData();

    f.append("email", InputData.email);
    f.append("password", InputData.password);

    const res = await fetch("https://api.thelionsden.co.in/dashboard/login", {
      method: "POST",
      body: f,
    });

    const data = await res.json();
    if (data.s) {
      localStorage.setItem("auth", "loginkey");
      navigation("/");
    } else {
      alert(data.m || "somthing went wrong !");
    }
  };

  useEffect(() => {
    const verfy = localStorage.getItem("auth");
    if (verfy) navigation("/");
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(#A0E8FF, #12A9DB);",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "17px",
          p: { xs: 0, md: 8 },
          bgcolor: "#fff",
          width: { xs: "100%", md: "auto" },
          height: { xs: "100%", md: "auto" },
          display: "grid",
          placeItems: "center",
          gap: "1px",
        }}
      >
        <Box>
          <Typography
            pr={4}
            textAlign="start"
            fontWeight="bold"
            fontSize="28px"
          >
            Welcome Back
          </Typography>

          <Typography fontSize="14px" fontWeight={400}>
            Please Enter Your Email & Password to Login
          </Typography>

          {/* Form */}
          <Box
            mt={4}
            display="grid"
            gap="25px"
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              type="email"
              label="Email Address"
              value={InputData.email}
              onChange={(e) => {
                setInputData({ ...InputData, email: e.target.value });
              }}
            />

            <TextField
              type="password"
              label="Password"
              value={InputData.password}
              onChange={(e) =>
                setInputData({ ...InputData, password: e.target.value })
              }
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={
                !InputData.email ? true : !InputData.password ? true : false
              }
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
//api.thelionsden.co.in/dashboard/data-search

// http: prem: searchKeyword;
