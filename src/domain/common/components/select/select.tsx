import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectComponent: React.FC = () => {
  const [property, setProperty] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setProperty(event.target.value as string);
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo de imóvel</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={property}
          label="property"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value="apartment">Apartamento</MenuItem>
          <MenuItem value="kitnet">Kitnet</MenuItem>
          <MenuItem value="house">Casa</MenuItem>
          <MenuItem value="flat">Flat</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
export default SelectComponent;
