import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const H1 = (props) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
        className={props.className}
        fontWeight="700"
        color="#17365F"
        lineHeight="54px"
        fontSize="2.2rem"
        marginBottom="1.5rem"
      >
        {props.children}
      </Typography>
    </>
  );
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  className: PropTypes.node,
};

export default H1;
