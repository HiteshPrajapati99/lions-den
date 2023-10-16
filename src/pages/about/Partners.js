import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Partners = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#DDD7C4",
          display: "grid",
          placeItems: "center",
          p: { xs: 3, md: 6 },
          overflow: "hidden",
        }}
      >
        <Box textAlign="center">
          <Typography
            fontFamily="Archivo"
            sx={{
              color: "#0D1039",
              fontWight: "bold",
              fontSize: { xs: "23px", md: "32px" },
              pb: { xs: 0, md: 2 },
              fontWeight: "bold",
            }}
          >
            OUR INCUBATOR PARTNERS
          </Typography>
        </Box>

        <Grid container spacing={3} mt={2}>
          <Grid
            item
            sm={12}
            md={6}
            lg={4}
            sx={{ width: "100%", textAlign: "center" }}
          >
            <img
              src="./partner1.png"
              alt="logo"
              style={{ mixBlendMode: "multiply", width: "90%" }}
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={4}
            sx={{ width: "100%", textAlign: "center" }}
          >
            <img
              src="./partner2.png"
              alt="logo"
              style={{ mixBlendMode: "multiply", width: "90%" }}
              data-aos="zoom-out"
              data-aos-duration="1500"
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={4}
            sx={{ width: "100%", textAlign: "center" }}
          >
            <img
              src="./partner3.png"
              alt="logo"
              style={{ mixBlendMode: "multiply", width: "90%" }}
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Partners;
