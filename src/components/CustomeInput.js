import { TextField } from "@mui/material";
import React from "react";

const CustomeInput = ({
  name,
  type,
  value,
  onChange = () => {},
  label,
  placeholder,
  multiline,
  rows,
  error,
  helperText,
  onBlur,
}) => {
  return (
    <TextField
      error={error}
      helperText={helperText}
      onBlur={onBlur}
      label={label}
      InputProps={{ sx: { color: "#fff" } }}
      type={type}
      fullWidth
      InputLabelProps={{
        sx: {
          color: "#787878",
        },
      }}
      sx={{
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
      }}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
    />
  );
};

export default CustomeInput;
