import { Box, Button, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setopenMenu] = useState(false);

  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(19.5px)",
        position: "fixed",
        width: "100%",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 0, lg: 10 },
          p: { xs: 2, md: 2 },
          height: "100%",
        }}
      >
        <Box sx={{ width: { xs: "8rem", sm: "6rem", md: "10rem" } }}>
          <img
            src="./assets/logo.png"
            alt="logo"
            width="100%"
            height="100%"
            onClick={() => navigate("/")}
          />
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={() => setopenMenu(true)} size="large">
            <HiMenu />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 3,
            fontSize: { xs: "18px", lg: "22px", xl: "26px" },
          }}
        >
          <Link
            to="home"
            smooth
            duration={0}
            spy
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => location.pathname !== "/" && navigate("/")}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            spy
            duration={0}
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => location.pathname !== "/" && navigate("/about")}
          >
            About
          </Link>
          <Link
            to="contact"
            smooth
            spy
            duration={0}
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => location.pathname !== "/" && navigate("/contact")}
          >
            Contact Us
          </Link>
          <Button
            sx={{
              borderRadius: "5px",
              background: "linear-gradient(90deg, #CB912E 0%, #F5BD1E 100%)",
              p: { md: "14px", xl: "16px" },
              fontWeight: "bolder",
              color: "#0D1039",
            }}
            onClick={() => navigate("/register")}
          >
            Register Now
          </Button>
        </Box>
      </Box>

      <Drawer
        open={openMenu}
        anchor="left"
        onClose={() => setopenMenu(false)}
        PaperProps={{
          sx: {
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(8px)",
          },
        }}
      >
        <Box px={3} pt={3}>
          <img src="./assets/logo.png" alt="logo" width="80%" />
        </Box>

        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            gap: 3,
            p: 3,
          }}
        >
          <Link
            to="home"
            smooth
            duration={0}
            spy
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => {
              location.pathname !== "/" && navigate("/");
              setopenMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            spy
            duration={0}
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => {
              location.pathname !== "/" && navigate("/about");
              setopenMenu(false);
            }}
          >
            About
          </Link>
          <Link
            to="contact"
            smooth
            spy
            duration={0}
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => {
              location.pathname !== "/" && navigate("/contact");
              setopenMenu(false);
            }}
          >
            Contact Us
          </Link>
          <Button
            sx={{
              borderRadius: "5px",
              background: "linear-gradient(90deg, #CB912E 0%, #F5BD1E 100%)",
              p: { md: "14px", xl: "16px" },
              color: "#fff",
            }}
            onClick={() => {
              navigate("/register");
              setopenMenu(false);
            }}
          >
            Register Now
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
