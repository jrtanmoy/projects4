import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CustomLinks = (props) => {
  return (
    <Link to={props.linkedto}>
      <Box
        fontSize={props.fontSize}
        sx={{
          textDecoration: "underline",
          color: "#F89520",
          lineHeight: "24px",
          fontWeight: "500",
        }}
      >
        {props.children}
      </Box>
    </Link>
  );
};

CustomLinks.propTypes = {
  children: PropTypes.node.isRequired,
  linkedto: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

export default CustomLinks;
