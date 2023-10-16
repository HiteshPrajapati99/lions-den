import { Box, Typography } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";

const Home = () => {
  return (
    <Element name="home" id="home">
      <div>
        <Slider
          arrows={false}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={3000}
          dots
        >
          <Box sx={{ position: "relative" }}>
            <img src="./assets/home-bg1.png" alt="image" width="100%" />
            <Typography
              sx={{
                position: "absolute",
                bottom: { xs: "8rem", md: "5rem" },
                left: { xs: "2rem", md: "5rem" },
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "24px", md: "36px" },
                fontFamily: "Archivo",
              }}
            >
              FUNDING DESTINATION <br /> FOR YOUR BUSINESS{" "}
            </Typography>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img src="./assets/home-bg2.png" alt="image" width="100%" />
            <Typography
              sx={{
                position: "absolute",
                bottom: { xs: "8rem", md: "5rem" },
                left: { xs: "2rem", md: "5rem" },
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "24px", md: "36px" },
                fontFamily: "Archivo",
              }}
            >
              Find The Bright <br /> Future With Us
            </Typography>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img src="./assets/home-bg.png" alt="image" width="100%" />
            <Typography
              sx={{
                position: "absolute",
                bottom: { xs: "8rem", md: "5rem" },
                left: { xs: "2rem", md: "5rem" },
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "24px", md: "36px" },
                fontFamily: "Archivo",
              }}
            >
              INVEST IN THE <br /> RIGHT BUSINESS
            </Typography>
          </Box>
        </Slider>
      </div>
    </Element>
  );
};

export default Home;
