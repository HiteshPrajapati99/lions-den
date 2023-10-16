import { Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { scroller } from "react-scroll";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {/* about */}
      <Box
        id="about"
        sx={{
          bgcolor: "#0D1039",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box>
          <img
            src="./assets/frame.png"
            alt="image"
            style={{
              position: "absolute",
              top: 0,
              width: "50%",
              opacity: "0.6",
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "grid", lg: "flex" },
            gap: { xs: 0, lg: 10 },
            py: { xs: 3, md: 8 },
          }}
          alignItems="center"
        >
          <Box flex="1 1 80%" position="relative" height="100%">
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                p: { xs: 4, lg: "0 0 0 8rem", xl: "0 0 0 8rem" },
              }}
            >
              <Box
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <Typography color="#fff" variant="h4" fontFamily="Archivo">
                  About Us{" "}
                </Typography>
                <Typography
                  mt={3}
                  color="#fff"
                  fontFamily="Archivo"
                  fontSize="1.3rem"
                  sx={{ fontSize: { xs: "16px", md: "1.3rem" } }}
                >
                  Unleashing the Spirit of 'AtmaNirbhar Bharat': The Lions' Den
                  is an extraordinary funding gameshow that sets the stage for
                  aspiring entrepreneurs from all corners of India to showcase
                  their visionary ideas and relentless efforts to an exceptional
                  panel of investors. Picture this: a group of 8-10 incredibly
                  successful lions, not only offering their financial support
                  but also their invaluable expertise and precious time, all
                  geared towards propelling these entrepreneurs' businesses
                  towards resounding success. It's a captivating journey where
                  dreams meet opportunity, and together, we fuel the spirit of a
                  Aatmanirbhar Bharat.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "block",
              py: { xs: 3, lg: 10 },
              px: { xs: 3, lg: 0 },
            }}
            data-aos="zoom-in-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img
              src="./assets/about.png"
              width="100%"
              height="100%"
              alt="image"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
