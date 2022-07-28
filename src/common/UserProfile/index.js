import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import OutlinedInput from "@mui/material/OutlinedInput";

const UserProfile = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [arrow, setArrow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box>
        <FormControl sx={{ m: 1, width: 200, mt: 3 }} className="modification">
          <Select
            multiple
            displayEmpty
            onChange={handleChange}
            input={<OutlinedInput />}
            value={[]}
            renderValue={() => {
              return (
                <Box display="flex" color="#324160" alignItems="center">
                  <Avatar
                    alt={props.username}
                    src={props.src}
                    sx={{ marginRight: "10px" }}
                  />

                  <Box marginRight={2} fontWeight="bold">
                    {props.username}
                  </Box>
                </Box>
              );
            }}
            inputProps={{ "aria-label": "Without label" }}
          >
            <Box minWidth="250px">
              <MenuItem>
                <Box display="flex" color="#324160" alignItems="center">
                  <Avatar
                    alt={props.username}
                    src={props.src}
                    sx={{ marginRight: "10px" }}
                  />

                  <Box marginRight={2} fontWeight="bold">
                    {props.username}
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PermIdentityOutlinedIcon sx={{ marginRight: "10px" }} />
                  Profile
                </Box>
              </MenuItem>
              <MenuItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SettingsOutlinedIcon sx={{ marginRight: "10px" }} /> Setting
                </Box>
              </MenuItem>
              <MenuItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LogoutRoundedIcon sx={{ marginRight: "10px" }} /> Logout
                </Box>
              </MenuItem>
            </Box>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default UserProfile;
