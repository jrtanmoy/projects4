import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./input.css";

const EmpInput = (props) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%", borderRadius: 10 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Filled success"
        variant="filled"
        color="warning"
        {...props}
        className="input"
      />
    </Box>
  );
};

export default EmpInput;
