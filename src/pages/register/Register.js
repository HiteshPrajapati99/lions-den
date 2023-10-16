import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "../../components/CustomeInput";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CustomSelect from "../../components/CustomSelect";
import axios from "axios";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { toast } from "react-toastify";

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Island",
    "Chandigarh",
    "Delhi",
    "Ladakh",
    "Jammu and Kashmir",
    "Puducherry",
  ];

  const initialValues = {
    email: "",
    full_name: "",
    brand_name: "",
    entity_name: "",
    company_address: "",
    gst_no: "",
    state: "",
    phone_no: "",
    website: "",
    desc: "",
    comany_begin: null,
    business_dese: "",
    category: "",
    currunt_phase: "",
    currunt_state: "",
    company_type: "",
    ip_rights: "",
    investment_seeking: "",
    eqt_exchnage: "",
    valuation_proposing: "",
    three_year_revenues: "",
    monthly_revenue: "",
    past_rasied_fund: "",
    currunt_eqt: "",
    incubated: "",
    incubation_centre_name: "",
    part_of_any: "",
    pitch_deck: null,
    product_image: "",
    video_link_desc: "",
    refral_code: "",
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: async (val, actions) => {
      const f = new FormData();

      f.append("email", val.email);
      f.append("entrepreneur_name", val.full_name);
      f.append("brand_name", val.brand_name);
      f.append("entity_name", val.entity_name);
      f.append("company_address", val.company_address);
      f.append("gst_no", val.gst_no);
      f.append("State", val.state);
      f.append("Phone_Number", val.phone_no);
      f.append("Website", val.website);
      f.append("brief_about_founders", val.business_dese);
      f.append(
        "company_begin_time",
        moment(val.comany_begin).format("DD/MM/YYYY")
      );
      f.append("Business_Description", val.desc);
      f.append("category", val.category);
      f.append("current_phase", val.currunt_phase);
      f.append("current_stage", val.currunt_state);
      f.append("company_type", val.company_type);
      f.append("ip_rights", val.ip_rights);
      f.append("investment_seeking", val.investment_seeking);
      f.append("equity_exchange_percentage", val.eqt_exchnage);
      f.append("valuation_proposal", val.valuation_proposing);
      f.append("revenues", val.three_year_revenues);
      f.append("monthly_revenue", val.monthly_revenue);
      f.append("past_fund_raised", val.past_rasied_fund);
      f.append("current_equity_structure", val.currunt_eqt);
      f.append("incubated", val.incubated);
      f.append("incubation_centre_name", val.incubation_centre_name);
      f.append("funding_tvshow", val.part_of_any);
      f.append("link_of_video", val.video_link_desc);
      f.append("pitch_deck", val.pitch_deck);
      f.append("product_photo", val.product_image);
      f.append("payment_receipt", null);
      f.append("refral_code", val.refral_code);

      const { data } = await axios.post(
        "https://api.thelionsden.co.in/form/submit",
        f,
        {
          headers: null,
        }
      );
      if (data?.s) {
        const orderId = data.r.order_id;
        const amount = data.r.amount;

        window.open(
          `https://thelionsden.co.in/payment/dataForm.php?order_id=${orderId}&amount=${amount}`
        );
      } else {
        toast.error(data.m);
      }
    },
  });

  return (
    <Box pt={18} px={5}>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Typography
          color="white"
          sx={{
            fontSize: { xs: "20px", md: "32px" },
            fontWeight: "bold",
          }}
        >
          APPLICATION FORM
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#F5BD1E",
            fontSize: "20px",
            ml: 3,
            mt: 3,
          }}
        >
          BENEFITS OF APPLYING AND ADVANCING IN THE PROCESS
        </Typography>

        <ul style={{ color: "#fff", lineHeight: "2rem" }}>
          <li>
            Mentorship ,Curation & Guidance for Raising Funds by Startup Expert
            Team
          </li>

          <li>
            Rigorous Financial Due Dilligence and Pre-screening by Finance
            Expert Team.
          </li>

          <li>
            Very Good Chance for an Exposure by Appearing on The Lions' Den
            Season 1
          </li>
        </ul>
      </Box>

      <Box sx={{ my: 5, px: 4 }} component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3 }}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && errors.email ? true : false}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
          />
          <Input
            type="text"
            label="Full Name"
            placeholder="Full Name Of The Enterepreneur"
            name="full_name"
            value={values.full_name}
            onChange={handleChange}
            error={touched.full_name && errors.full_name ? true : false}
            onBlur={handleBlur}
            helperText={touched.full_name && errors.full_name}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <Input
            label="Brand Name"
            placeholder="Enter Your Brand Name"
            name="brand_name"
            value={values.brand_name}
            onChange={handleChange}
            error={touched.brand_name && errors.brand_name ? true : false}
            onBlur={handleBlur}
            helperText={touched.brand_name && errors.brand_name}
          />
          <Input
            type="text"
            label="Entity Name"
            placeholder="Entity Name (Name Of The Registered Company)"
            name="entity_name"
            value={values.entity_name}
            onChange={handleChange}
            error={touched.entity_name && errors.entity_name ? true : false}
            onBlur={handleBlur}
            helperText={touched.entity_name && errors.entity_name}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <Input
            label="Company Address"
            placeholder="Enter Company Address"
            name="company_address"
            value={values.company_address}
            onChange={handleChange}
            error={
              touched.company_address && errors.company_address ? true : false
            }
            onBlur={handleBlur}
            helperText={touched.company_address && errors.company_address}
          />
          <Input
            type="text"
            label="GST No"
            placeholder="Enter Your GST Number"
            name="gst_no"
            value={values.gst_no}
            onChange={handleChange}
            error={touched.gst_no && errors.gst_no ? true : false}
            onBlur={handleBlur}
            helperText={touched.gst_no && errors.gst_no}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          {/* <Input
            label="State"
            placeholder="(Gujarat , Maharashtra ,Punjab, Delhi, Etc...)"
            
          /> */}

          <CustomSelect
            label="State"
            name="state"
            value={values.state}
            onChange={handleChange}
            error={touched.state && errors.state ? true : false}
            onBlur={handleBlur}
            helperText={touched.state && errors.state}
            options={stateOptions.map((state) => ({
              name: state,
              value: state,
            }))}
          />

          <Input
            type="text"
            label="Phone Number"
            placeholder="Phone Number"
            name="phone_no"
            value={values.phone_no}
            onChange={handleChange}
            error={touched.phone_no && errors.phone_no ? true : false}
            onBlur={handleBlur}
            helperText={touched.phone_no && errors.phone_no}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <Input
            label="Website"
            placeholder="Website"
            name="website"
            value={values.website}
            onChange={handleChange}
            error={touched.website && errors.website ? true : false}
            onBlur={handleBlur}
            helperText={touched.website && errors.website}
          />
          <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en">
            <DatePicker
              label="Company Begin"
              format="MM/DD/YYYY"
              value={values.comany_begin}
              onChange={(date) => setFieldValue("comany_begin", date)}
              slotProps={{
                openPickerButton: {
                  sx: {
                    color: "#787878",
                  },
                },
                textField: {
                  error:
                    touched.comany_begin && errors.comany_begin ? true : false,
                  onBlur: handleBlur,
                  helperText: touched.comany_begin && errors.comany_begin,
                  InputProps: {
                    sx: { color: "#787878" },
                  },
                  InputLabelProps: {
                    sx: { color: "#787878" },
                  },
                  sx: {
                    width: "100%",
                    "& label.Mui-label": {
                      color: "#787878",
                    },
                    "& label.Mui-focused": {
                      color: "#787878",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#787878",
                        borderRadius: "8px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#787878",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#787878",
                      },
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <Input
            type="text"
            multiline
            placeholder="Business Discription"
            rows={5}
            name="business_dese"
            value={values.business_dese}
            onChange={handleChange}
            error={touched.business_dese && errors.business_dese ? true : false}
            onBlur={handleBlur}
            helperText={touched.business_dese && errors.business_dese}
          />
          <Input
            type="text"
            multiline
            placeholder="Please provide a brief profile(s) about the founder(s) including background, roles, qualifications, experiences, passion, interests, etc."
            rows={5}
            name="desc"
            value={values.desc}
            onChange={handleChange}
            error={touched.desc && errors.desc ? true : false}
            onBlur={handleBlur}
            helperText={touched.desc && errors.desc}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <CustomSelect
            label="Category"
            name="category"
            value={values.category}
            onChange={handleChange}
            options={[
              { name: "Food & Beverages", value: "food & beverages" },
              { name: "Technology", value: "technology" },
              { name: "App Website", value: "app_website" },
              { name: "HouseWare / Home Design", value: "house_ware" },
              { name: "Health / Wealth / Nutrition", value: "helth" },
              { name: "Fitness", value: "fitness" },
              { name: "Sports", value: "sports" },
              { name: "Beauty", value: "beauty" },
              { name: "Clothing / Fashion", value: "clothing_and_fashion" },
              { name: "Toys / Games", value: "toys_and_games" },
              { name: "Entertainment", value: "entertainment" },
              { name: "Children", value: "children" },
              { name: "Pets", value: "pets" },
              { name: "Music", value: "music" },
              { name: "Other", value: "other" },
            ]}
            error={touched.category && errors.category ? true : false}
            onBlur={handleBlur}
            helperText={touched.category && errors.category}
          />

          <CustomSelect
            label="Select Currunt Phase"
            name="currunt_phase"
            value={values.currunt_phase}
            onChange={handleChange}
            options={[
              { name: "Idea", value: "idea" },
              {
                name: "Research And Development",
                value: "research_and_development",
              },
              {
                name: "Prototype",
                value: "prototype",
              },
              {
                name: "Crowdfunding",
                value: "crowdfunding",
              },
              {
                name: "First Funding Round Is Done",
                value: "first_round_is_done",
              },
              {
                name: "Operating / Revenue Generating",
                value: "operating revenue generating",
              },
            ]}
            error={touched.currunt_phase && errors.currunt_phase ? true : false}
            onBlur={handleBlur}
            helperText={touched.currunt_phase && errors.currunt_phase}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <CustomSelect
            label="Currunt Stage"
            name="currunt_state"
            value={values.currunt_state}
            onChange={handleChange}
            error={touched.currunt_state && errors.currunt_state ? true : false}
            onBlur={handleBlur}
            helperText={touched.currunt_state && errors.currunt_state}
            options={[
              { name: "Pre-Seed Stage", value: "Pre-Seed Stage" },
              { name: "Seed Stage", value: "Seed Stage" },
              { name: "Early Stage", value: "Early Stage" },
              { name: "Growth Stage", value: "Growth Stage" },
              { name: "Expansion Phase", value: "Expansion Phase" },
            ]}
          />

          <CustomSelect
            label="Company Type"
            name="company_type"
            value={values.company_type}
            onChange={handleChange}
            error={touched.company_type && errors.company_type ? true : false}
            onBlur={handleBlur}
            helperText={touched.company_type && errors.company_type}
            options={[
              {
                name: "Proprietorship",
                value: "Proprietorship",
              },
              {
                name: "Partnership",
                value: "Partnership",
              },
              {
                name: "LLP",
                value: "LLP",
              },
              {
                name: "Private Limited",
                value: "Private Limited",
              },
            ]}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <CustomSelect
            label="Ip Rights (Trademark / Patent / Copyright)"
            name="ip_rights"
            value={values.ip_rights}
            onChange={handleChange}
            error={touched.ip_rights && errors.ip_rights ? true : false}
            onBlur={handleBlur}
            helperText={touched.ip_rights && errors.ip_rights}
            options={[
              { name: "Yes", value: "yes" },
              { name: "No", value: "no" },
            ]}
          />

          <Input
            label="Investment Seeking"
            placeholder="How Much Investment Are You Seeking ? (E.G 10L, 25L, 50L1Cr, 2.5Cr ,Etc...)"
            name="investment_seeking"
            value={values.investment_seeking}
            onChange={handleChange}
            error={
              touched.investment_seeking && errors.investment_seeking
                ? true
                : false
            }
            onBlur={handleBlur}
            helperText={touched.investment_seeking && errors.investment_seeking}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <Input
            label="Equity Exchange"
            placeholder="Equity Exchange Percentage / Dilution oF Equity"
            name="eqt_exchnage"
            value={values.eqt_exchnage}
            onChange={handleChange}
            error={touched.eqt_exchnage && errors.eqt_exchnage ? true : false}
            onBlur={handleBlur}
            helperText={touched.eqt_exchnage && errors.eqt_exchnage}
          />

          <Input
            label="Valuation Proposing"
            placeholder="What Valuation Are You Proposing For Your StartUp And Based On What parameters ?"
            name="valuation_proposing"
            value={values.valuation_proposing}
            onChange={handleChange}
            error={
              touched.valuation_proposing && errors.valuation_proposing
                ? true
                : false
            }
            onBlur={handleBlur}
            helperText={
              touched.valuation_proposing && errors.valuation_proposing
            }
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <Input
            label="Three Year's Revenues"
            placeholder="What Are your Last Three Year's Revenues"
            name="three_year_revenues"
            value={values.three_year_revenues}
            onChange={handleChange}
            error={
              touched.three_year_revenues && errors.three_year_revenues
                ? true
                : false
            }
            onBlur={handleBlur}
            helperText={
              touched.three_year_revenues && errors.three_year_revenues
            }
          />

          <Input
            label="Monthly Revenues"
            placeholder="What Is Your Monthly Revenues ? How Much You Have Groth Month On Month In The Past Year ?"
            name="monthly_revenue"
            value={values.monthly_revenue}
            onChange={handleChange}
            error={
              touched.monthly_revenue && errors.monthly_revenue ? true : false
            }
            onBlur={handleBlur}
            helperText={touched.monthly_revenue && errors.monthly_revenue}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <CustomSelect
            label="Past Fund Rasied (External - Apart From Family And Friends)"
            name="past_rasied_fund"
            value={values.past_rasied_fund}
            onChange={handleChange}
            error={
              touched.past_rasied_fund && errors.past_rasied_fund ? true : false
            }
            onBlur={handleBlur}
            helperText={touched.past_rasied_fund && errors.past_rasied_fund}
            options={[
              {
                name: "Yes",
                value: "yes",
              },
              {
                name: "No",
                value: "no",
              },
            ]}
          />

          <Input
            label="Current Equity"
            placeholder="Current Equity Structure"
            name="currunt_eqt"
            value={values.currunt_eqt}
            onChange={handleChange}
            error={touched.currunt_eqt && errors.currunt_eqt ? true : false}
            onBlur={handleBlur}
            helperText={touched.currunt_eqt && errors.currunt_eqt}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <CustomSelect
            label="Incubated"
            name="incubated"
            value={values.incubated}
            onChange={handleChange}
            error={touched.incubated && errors.incubated ? true : false}
            onBlur={handleBlur}
            helperText={touched.incubated && errors.incubated}
            options={[
              {
                name: "Yes",
                value: "yes",
              },
              {
                name: "No",
                value: "no",
              },
            ]}
          />

          <Input
            label="Incubation Center Name ?"
            placeholder="Incubation Center Name ? (Na If Not Incubated)"
            name="incubation_centre_name"
            value={values.incubation_centre_name}
            onChange={handleChange}
            error={
              touched.incubation_centre_name && errors.incubation_centre_name
                ? true
                : false
            }
            onBlur={handleBlur}
            helperText={
              touched.incubation_centre_name && errors.incubation_centre_name
            }
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <CustomSelect
            label="Are You Part Of Any Other Funding Tv Show ?"
            name="part_of_any"
            value={values.part_of_any}
            onChange={handleChange}
            error={touched.part_of_any && errors.part_of_any ? true : false}
            onBlur={handleBlur}
            helperText={touched.part_of_any && errors.part_of_any}
            options={[
              {
                name: "Yes",
                value: "yes",
              },
              {
                name: "No",
                value: "no",
              },
            ]}
          />

          <Input
            label="Link Of Your Video"
            placeholder="Link Of Your Video Description Of Your Business (If Any)"
            name="video_link_desc"
            value={values.video_link_desc}
            onChange={handleChange}
            error={
              touched.video_link_desc && errors.video_link_desc ? true : false
            }
            onBlur={handleBlur}
            helperText={touched.video_link_desc && errors.video_link_desc}
          />
        </Box>

        <Box sx={{ display: { xs: "grid", sm: "flex" }, gap: 3, pt: 3 }}>
          <div style={{ display: "grid", width: "100%" }}>
            <Typography
              component="label"
              htmlFor="image"
              sx={{
                color: errors.product_image ? "#d32f2f" : "#787878",
                margin: "0px 0px 8px 10px",
                fontSize: { xs: "13px", md: "15px" },
              }}
            >
              Photo Of Product / Business ( Size less then 2 MB )
            </Typography>

            <input
              type="file"
              id="image"
              accept="image/*"
              style={{
                border: errors.product_image
                  ? "1px solid #d32f2f"
                  : "1px solid #787878",
                padding: "1rem",
                borderRadius: "8px",
                color: "#fff",
              }}
              onChange={(e) => {
                console.log(errors.product_image);
                const file = e.target.files[0];
                if (file) {
                  setFieldValue("product_image", file);
                }
              }}
              onBlur={handleBlur}
            />
            <Typography color="#d32f2f" variant="caption" ml={2} mt={0.5}>
              {errors.product_image}
            </Typography>
          </div>

          <div style={{ display: "grid", width: "100%" }}>
            <Typography
              component="label"
              htmlFor="pdf"
              sx={{
                color: errors.pitch_deck ? "#d32f2f" : "#787878",
                margin: "0px 0px 8px 10px",
                fontSize: { xs: "13px", md: "15px" },
              }}
            >
              Pitch Deck (Olny Pdf) ( Size less then 10 MB )
            </Typography>
            <input
              type="file"
              id="pdf"
              accept="application/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setFieldValue("pitch_deck", file);
                }
              }}
              onBlur={handleBlur}
              style={{
                border: errors.pitch_deck
                  ? "1px solid #d32f2f"
                  : "1px solid #787878",
                padding: "1rem",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Typography color="#d32f2f" variant="caption" ml={2} mt={0.5}>
              {errors.pitch_deck}
            </Typography>
          </div>
        </Box>
        <Box pt={3}>
          <Input
            label="Refral Code"
            placeholder="Enter Refral Code (If Any)"
            name="refral_code"
            value={values.refral_code}
            onChange={handleChange}
            error={touched.refral_code && errors.refral_code ? true : false}
            onBlur={handleBlur}
            helperText={touched.refral_code && errors.refral_code}
          />
        </Box>

        <Box textAlign="center" mt={3}>
          <Button
            type="submit"
            sx={{
              borderRadius: "5px",
              background: "linear-gradient(90deg, #CB912E 0%, #F5BD1E 100%)",
              p: { md: "14px", xl: "16px" },
              color: "#0d1039",
              fontWeight: "bold",
            }}
            disabled={!isValid}
          >
            <span>Pay & Submit</span> &nbsp;{" "}
            <del style={{ color: "#fff" }}> ₹5000</del> &nbsp;{" "}
            <span>₹1000 + GST</span>
          </Button>
        </Box>
        <Typography color="#fff" mt={5}>
          Disclaimer : Our focus is on catering to committed and serious
          founders, and We aim to avoid applicants who are merely submitting the
          form for leisure or without genuine intent. As part of our commitment
          to fostering innovation and selecting the most promising startups, we
          have kept a nominal application fee of INR 1000 + GST. This fee will
          be used to cover the expenses associated with the thorough screening
          and selection processes. It enables us to allocate dedicated resources
          to carefully evaluate each application, ensuring that we identify and
          support the most deserving startups in their journey towards success.
          This fee payment doesn't ensure your selection to be part of the show.
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;

const validation = Yup.object().shape({
  email: Yup.string().email().required("Email is required").trim(),
  full_name: Yup.string().required("Full Name Is required").trim(),
  brand_name: Yup.string().required("Brand Name is required").trim(),
  entity_name: Yup.string().required("Entity Name is required").trim(),
  company_address: Yup.string().required("Company Address is required").trim(),
  gst_no: Yup.string()
    .trim()
    .matches(/^[0-9A-Za-z]{15}$/, "Invalid GST number format."),
  state: Yup.string().required("State is required").trim(),
  phone_no: Yup.number().required("Phone Number is required"),
  website: Yup.string().trim(),
  desc: Yup.string().required("Brief Profile info is required").trim(),
  comany_begin: Yup.string()
    .required("select Comany Begin date is required")
    .trim(),
  business_dese: Yup.string()
    .required("Business Description is required")
    .trim(),
  category: Yup.string().required("Category is required").trim(),
  currunt_phase: Yup.string()
    .required("Select Currunt Phase is required")
    .trim(),
  currunt_state: Yup.string()
    .required("Select Currunt State is required")
    .trim(),
  company_type: Yup.string().required("Select Company Type is required").trim(),
  ip_rights: Yup.string().required("Ip Rights is required").trim(),
  investment_seeking: Yup.string()
    .required("Investment Seeking is required")
    .trim(),
  eqt_exchnage: Yup.string().required("Equity Exchnage is required").trim(),
  valuation_proposing: Yup.string()
    .required("Valuation Proposing is required")
    .trim(),
  three_year_revenues: Yup.string()
    .required("Three Year Revenues is required")
    .trim(),
  monthly_revenue: Yup.string().required("Monthly Revenue is required").trim(),
  past_rasied_fund: Yup.string()
    .required("Past Rasied Fund is required")
    .trim(),
  currunt_eqt: Yup.string().required("Currunt Equity is required").trim(),
  incubated: Yup.string().required("Incubated is required").trim(),
  // incubation_centre_name: Yup.string()
  //   .required("Incubation Centre Name is required")
  //   .trim(),
  part_of_any: Yup.string().required("Part of any Tv Show is required").trim(),
  pitch_deck: Yup.mixed()
    .required("Pitch Deck is required")
    .test(
      "fileFormat",
      "Invalid file format. Please upload a PDF, DOC, or DOCX file.",
      (value) => {
        if (!value) return true;

        const supportedImageFormats = [
          "application/pdf",
          "application/doc",
          "application/docx",
        ];
        const fileType = value && value.type;
        return supportedImageFormats.includes(fileType);
      }
    )
    .test(
      "fileSize",
      "File size must be less than or equal to 10MB",
      (value) => !value || value.size <= 10 * 1024 * 1024
    ),
  product_image: Yup.mixed()
    .test(
      "fileFormat",
      "Invalid file format. Please upload a JPG, JPEG, or PNG file.",
      (value) => {
        if (!value) return true;

        const supportedImageFormats = ["image/jpg", "image/jpeg", "image/png"];
        const fileType = value && value.type;
        return supportedImageFormats.includes(fileType);
      }
    )
    .test(
      "fileSize",
      "Product Image size must be less than 2MB",
      (value) => !value || value.size <= 2 * 1024 * 1024
    ),
  refral_code: Yup.string().max(12, "max character is 12 message or less..."),
});
