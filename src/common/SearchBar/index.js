import { Box } from "@mui/system";
import React, { useState } from "react";
import "./searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Box
        my={2}
        display="flex"
        sx={{ borderRadius: "5px", border: "1px solid #17365f3d " }}
        alignItems="center"
        padding={1}
      >
        {!value && <SearchIcon sx={{ fill: "grey" }} />}

        <input
          type="text"
          className="input"
          placeholder="Search"
          onChange={changeHandler}
        />
      </Box>
    </>
  );
};

export default SearchBar;
