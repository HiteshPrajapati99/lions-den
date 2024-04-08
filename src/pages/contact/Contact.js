import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Element } from "react-scroll";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: "",
    p_number: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setformdata((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = new FormData();

    f.append("name", formdata.name);
    f.append("email", formdata.email);
    f.append("phone", formdata.p_number);
    f.append("subject", formdata.subject);
    f.append("message", formdata.message);

    const url = "https://api.thelionsden.co.in/contact/email-send";
    const { data } = await axios.post(url, f);

    if (data.s) {
      toast.success("Thank you for reaching out to us.");
      setformdata({
        email: "",
        message: "",
        name: "",
        p_number: "",
        subject: "",
      });
    } else {
      toast.error(data.m || "server Error !");
    }
  };

  return (
    <Element name="contact" id="contact">
      <Box bgcolor="#0D1039" sx={{ p: { xs: 0, md: 8 } }}>
        <Box bgcolor="rgba(255, 255,255 , 0.1)">
          <Box
            sx={{
              // background: { md: "url(./assets/frame.png)  no-repeat" },
              backgroundSize: "50% 50%",
              borderRadius: "5px",
              p: { xs: 3, md: 5 },
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "flex",
                },
                alignItems: "center",
                gap: 3,
              }}
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Box flex="1 1 50%" component="form" onSubmit={handleSubmit}>
                <Typography color="#fff" fontSize="26px" fontFamily="Archivo">
                  Contact Us
                </Typography>
                <Typography color="#BCBCBC" fontFamily="Archivo">
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.{" "}
                </Typography>

                <Box
                  sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, mt: 3 }}
                >
                  <TextField
                    label="Name"
                    type="text"
                    fullWidth
                    required
                    InputLabelProps={{
                      sx: {
                        color: "#787878",
                      },
                    }}
                    InputProps={{ sx: { color: "#fff" } }}
                    sx={{
                      borderRadius: "5px",
                      "& label.Mui-focused": {
                        color: "#787878",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#787878",
                        },
                        "&:hover fieldset": {
                          borderColor: "#787878",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#787878",
                        },
                      },
                    }}
                    name="name"
                    value={formdata.name}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Phone Number"
                    type="number"
                    fullWidth
                    required
                    InputProps={{ sx: { color: "#fff" } }}
                    InputLabelProps={{
                      sx: {
                        color: "#787878",
                      },
                    }}
                    sx={{
                      borderRadius: "5px",
                      "& label.Mui-focused": {
                        color: "#787878",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#787878",
                        },
                        "&:hover fieldset": {
                          borderColor: "#787878",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#787878",
                        },
                      },
                    }}
                    name="p_number"
                    value={formdata.p_number}
                    onChange={handleChange}
                  />
                </Box>

                <Box
                  sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, mt: 3 }}
                >
                  <TextField
                    label="Email Address"
                    InputProps={{ sx: { color: "#fff" } }}
                    type="email"
                    fullWidth
                    required
                    InputLabelProps={{
                      sx: {
                        color: "#787878",
                      },
                    }}
                    sx={{
                      borderRadius: "5px",
                      "& label.Mui-focused": {
                        color: "#787878",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#787878",
                        },
                        "&:hover fieldset": {
                          borderColor: "#787878",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#787878",
                        },
                      },
                    }}
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Subject"
                    InputProps={{ sx: { color: "#fff" } }}
                    type="text"
                    fullWidth
                    required
                    InputLabelProps={{
                      sx: {
                        color: "#787878",
                      },
                    }}
                    sx={{
                      borderRadius: "5px",
                      "& label.Mui-focused": {
                        color: "#787878",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#787878",
                        },
                        "&:hover fieldset": {
                          borderColor: "#787878",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#787878",
                        },
                      },
                    }}
                    name="subject"
                    value={formdata.subject}
                    onChange={handleChange}
                  />
                </Box>

                <TextField
                  label="Message"
                  rows={3}
                  required
                  multiline
                  InputProps={{ sx: { color: "#fff" } }}
                  fullWidth
                  InputLabelProps={{ sx: { color: "#787878" } }}
                  sx={{
                    mt: 3,
                    borderRadius: "5px",
                    "& label.Mui-focused": {
                      color: "#787878",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#787878",
                      },
                      "&:hover fieldset": {
                        borderColor: "#787878",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#787878",
                      },
                    },
                  }}
                  name="message"
                  value={formdata.message}
                  onChange={handleChange}
                />

                <Button
                  sx={{
                    borderRadius: "5px",
                    background:
                      "linear-gradient(90deg, #CB912E 0%, #F5BD1E 100%)",
                    p: "14px",
                    color: "#fff",
                    mt: 3,
                    width: { xs: "100%", md: "auto" },
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>

              <Box
                bgcolor="#0D1039"
                sx={{
                  display: "grid",
                  gap: 3,
                  flex: "1 1 50%",
                  mt: { xs: 3, md: 0 },
                  p: 3,
                }}
                data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                {/* <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255 , 0.3)",
                    p: { xs: 1, md: 2 },
                    borderRadius: "5px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <img src="./assets/icons/icon.svg" alt="icon" width="10%" />
                    <Box>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "13px", md: "16px" },
                          color: "#fff",
                        }}
                      >
                        Operation Center
                      </Typography>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "10px", md: "16px" },
                          color: "#DDD",
                        }}
                      >
                        D-726 Swati Clover,Shilaj Circle, S. P. Ring
                        Road,Ahmedabad-380058
                      </Typography>
                    </Box>
                  </Box>
                </Box> */}

                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255 , 0.3)",
                    p: { xs: 1, md: 2 },
                    borderRadius: "5px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <img src="./assets/icons/icon.svg" alt="icon" width="10%" />
                    <Box>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "13px", md: "16px" },
                          color: "#fff",
                        }}
                      >
                        Registered Office Address
                      </Typography>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "10px", md: "16px" },
                          color: "#DDD",
                        }}
                      >
                        Super Market, Shop No. 11, ST Bus Stand Side, Morbi MDG,
                        Morbi, Rajkot, Gujarat, India-363641
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255 , 0.3)",
                    p: 2,
                    borderRadius: "5px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <img
                      src="./assets/icons/icon1.svg"
                      alt="icon"
                      width="10%"
                    />
                    <Box>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "13px", md: "16px" },
                          color: "#fff",
                        }}
                      >
                        {" "}
                        OUR MAILBOX:
                      </Typography>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "10px", md: "16px" },
                          color: "#DDD",
                        }}
                      >
                        rumikalita@thelionsden.co.in
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255 , 0.3)",
                    p: 2,
                    borderRadius: "5px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <img
                      src="./assets/icons/icon2.svg"
                      alt="icon"
                      width="10%"
                    />

                    <Box>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "13px", md: "16px" },
                          color: "#fff",
                        }}
                      >
                        OUR PHONE:
                      </Typography>
                      <Typography
                        fontFamily="Archivo"
                        sx={{
                          fontSize: { xs: "10px", md: "16px" },
                          color: "#DDD",
                        }}
                      >
                        +91 80071 10071
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default Contact;
