import React from "react";
import { Select } from  "react-materialize"
import './styles.css'

const SelectComponent: React.FC = () => {

  return (
    <>
      <Select
        id="Select-37"
        multiple={false}
        onChange={() => {}}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            outDuration: 250
          }
        }}
        value=""
      >
        <option
          disabled
          value=""
        >
          Tipo de imóvel
        </option>
        <option value="1">
        Apartamento
        </option>
        <option value="2">
        Kitnet
        </option>
        <option value="3">
        Casa
        </option>
        <option value="4">
        Flat
        </option>
      </Select>
    </>
  );
};
export default SelectComponent;
