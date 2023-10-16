import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  IconButton,
  Typography,
  Zoom,
  Button,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Branding = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [OpenModal, setOpenModal] = useState(false);
  const [contentId, setcontentId] = useState(0);

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "grid", gap: 10, overflow: "hidden" }}>
      {/*  season  */}
      <Box
        sx={{
          bgcolor: "0D1039",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            fontFamily="Archivo"
            sx={{ color: "#fff", fontWeight: "bold", fontSize: "32px" }}
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            SEASON 1
          </Typography>
          <Typography
            fontFamily="Archivo"
            sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px", pb: 3 }}
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Target 100+Cr
          </Typography>
          <img src="./vector.svg" alt="image" width="20%" />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(90deg, #B57D1E 0%, #F5BD1E 100%)",
              p: 4,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setcontentId(1);
              setOpenModal(true);
            }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src="./invest (4).png" alt="icon" width="70%" />
            <Typography
              color="#0D1039"
              fontWeight="bold"
              mt={2}
              fontFamily="Archivo"
            >
              Equity Funding
            </Typography>
          </Box>

          <Box
            sx={{
              background: "linear-gradient(90deg, #B57D1E 0%, #F5BD1E 100%)",
              p: 4,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setcontentId(2);
              setOpenModal(true);
            }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src="./invest (3).png" alt="icon" width="70%" />
            <Typography
              mt={2}
              fontFamily="Archivo"
              color="#0D1039"
              fontWeight="bold"
            >
              Debt Financing
            </Typography>
          </Box>

          <Box
            sx={{
              background: "linear-gradient(90deg, #B57D1E 0%, #F5BD1E 100%)",
              p: 4,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setcontentId(3);
              setOpenModal(true);
            }}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src="./invest (2).png" alt="icon" width="70%" />
            <Typography
              mt={2}
              fontFamily="Archivo"
              color="#0D1039"
              fontWeight="bold"
            >
              Convertible Notes
            </Typography>
          </Box>

          <Box
            sx={{
              background: "linear-gradient(90deg, #B57D1E 0%, #F5BD1E 100%)",
              p: 3,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setcontentId(4);
              setOpenModal(true);
            }}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src="./invest (1).png" alt="icon" width="70%" />
            <Typography
              mt={2}
              fontFamily="Archivo"
              color="#0D1039"
              fontWeight="bold"
            >
              Strategic Partnership
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* banner  */}

      <Box sx={{ bgcolor: "#0D1039" }}>
        <Box
          sx={{
            background: "  url(./assets/banner.png)  no-repeat ",
            backgroundSize: "50% 100%",
            backgroundPosition: "right",
          }}
        >
          <Box
            sx={{
              background: "url(./assets/frame.png) no-repeat",
              backgroundSize: "50% 50%",
              p: { xs: "20px", md: "3rem 8rem" },
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Typography
              color="#fff"
              sx={{ fontSize: { xs: "26px", md: "34px" } }}
              fontWeight="bold"
              fontFamily="Archivo"
            >
              The Lions Den{" "}
            </Typography>
            <Typography color="#fff" fontFamily="Archivo">
              {" "}
              Spot Funding Reality Game Show
            </Typography>
            <Button
              sx={{
                borderRadius: "3px",
                background: "linear-gradient(90deg, #CB912E 0%, #F5BD1E 100%)",
                p: "14px",
                color: "#fff",
                mt: 3,
                fontWeight: "bolder",
                color: "#0D1039",
              }}
              onClick={() => navigate("/register")}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* partners */}

      <Box
        sx={{
          bgcolor: "0D1039",
          pb: 5,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            fontFamily="Archivo"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "22px", md: "32px" },
              pb: 3,
            }}
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            OUR STARTUP ECOSYSTEM PARTNERS
          </Typography>

          <img src="./vector.svg" alt="image" width="20%" />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            px: 3,
            justifyContent: "center",
            pt: 3,
            flexWrap: "wrap",
          }}
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <img src="./brand.png" alt="icon" />
        </Box>
      </Box>

      <DetailsModal open={OpenModal} setOpen={setOpenModal} id={contentId} />
    </Box>
  );
};

export default Branding;

const DetailsModal = ({ open, setOpen, id }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Zoom}
      PaperProps={{
        sx: {
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #B57D1E 0%, #F5BD1E 100%)",
          p: 3,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          color="#fff"
          fontWeight="bolder"
          fontFamily="Archivo"
          fontSize="20px"
        >
          {id == 1
            ? "Equity Funding"
            : id == 2
            ? "Debt Financing"
            : id == 3
            ? "Convertible Notes"
            : "Strategic Partnership"}
        </Typography>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <Typography
        color="#fff"
        sx={{ fontSize: "20px", lineHeight: "1.8rem" }}
        fontFamily="Archivo"
      >
        {id == 1
          ? "Equity Funding refers to a method of raising capital for a business or project by selling shares or ownership stakes in the company to investors. In exchange for their investment, these investors become partial owners of the business and share in its profits and losses. Equity funding is often used by startups and growing businesses to secure the financial resources needed for expansion, development, or other initiatives without incurring debt."
          : id == 2
          ? "Debt Financing is a financial strategy in which a company raises capital by borrowing funds from external sources, such as banks, bondholders, or other lenders. These borrowed funds are typically repaid over a specified period, often with interest, making it a form of loan. Debt financing allows businesses to access capital for various purposes, such as expansion, operations, or investments, with the obligation to repay the borrowed amount in the future."
          : id == 3
          ? "Convertible notes are a type of short-term debt instrument commonly used in startup financing. They are essentially loans that can be converted into equity (usually company shares) at a later date, typically when a specified trigger event, such as a future funding round, occurs. This allows early-stage investors to provide capital to startups with the expectation of converting their debt into ownership stakes, making convertible notes a flexible and popular instrument in the world of venture capital."
          : "Strategic Partnership is a collaborative alliance between two or more organizations that work together with a shared purpose to achieve specific strategic goals, such as expanding market reach, leveraging complementary strengths, or pursuing common objectives. These partnerships are often long-term and mutually beneficial, aiming to create value and competitive advantages for all parties involved."}
      </Typography>
    </Dialog>
  );
};
