import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: 3,
        bgcolor: "#fff",
      }}
    >
      <img src="./assets/logo.png" alt="logo" />

      <Typography my={2} fontSize="18px" fontWeight="bold" fontFamily="Archivo">
        Quick Links{" "}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          px: 3,
          justifyContent: "center ",
        }}
      >
        <Link
          to="home"
          smooth
          duration={0}
          spy
          style={{ color: "#888", cursor: "pointer" }}
          onClick={() => location.pathname !== "/" && navigate("/")}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth
          spy
          duration={0}
          style={{ color: "#888", cursor: "pointer" }}
          onClick={() => location.pathname !== "/" && navigate("/about")}
        >
          About
        </Link>
        <Link
          to="contact"
          smooth
          spy
          duration={0}
          style={{ color: "#888", cursor: "pointer" }}
          onClick={() => location.pathname !== "/" && navigate("/contact")}
        >
          Contact Us
        </Link>
        <NavLink
          to="/privacy-policy"
          style={{ color: "#888", textDecoration: "none" }}
        >
          Privacy Policy
        </NavLink>
        <NavLink to="/rules" style={{ color: "#888", textDecoration: "none" }}>
          Rules Of The Den
        </NavLink>
        <NavLink
          to="/term_and_conditions"
          style={{ color: "#888", textDecoration: "none" }}
        >
          Terms & Condition
        </NavLink>
      </Box>

      <Typography mt={2} px={3} fontFamily="Archivo">
        © 2023 All rights reserved by The Lions Den{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
