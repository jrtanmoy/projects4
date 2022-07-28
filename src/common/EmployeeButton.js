import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const EmployeeButton = (props) => {
  const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "12px",
    lineHeight: 1.5,
    backgroundColor: "#F89520",
    width: "100%",
    borderRadius: "8px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#F89520",
      borderColor: "none",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      borderColor: "",
      backgroundColor: "#F89520",
    },
    "&:focus": {
      outline: "none",

      borderColor: "none",
      boxShadow: "none",
    },
  });

  return (
    <CustomButton variant="contained" {...props}>
      {props.children}
    </CustomButton>
  );
};

EmployeeButton.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default EmployeeButton;
