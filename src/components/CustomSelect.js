import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const CustomSelect = ({
  label,
  value,
  name,
  onChange,
  options,
  error,
  helperText,
  onBlur,
}) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel
        sx={{
          color: "#787878",
          "&.MuiInputLabel-shrink": {
            color: "#787878",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        sx={{
          color: "#787878",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#787878",
            borderRadius: "8px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#787878",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#787878",
          },
          ".MuiSvgIcon-root ": {
            fill: "#787878 !important",
          },
        }}
      >
        <MenuItem disabled> {label} </MenuItem>
        {options.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText> {helperText} </FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;
