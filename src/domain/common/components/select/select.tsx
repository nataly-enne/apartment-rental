import React from "react";
import { Select } from  "react-materialize"
import './styles.css'

type Props = {
  value: string;
  onChange: () => any;
}

const SelectComponent: React.FC<Props> = ({ value, onChange }) => {

  return (
    <>
      <Select
        id="Select-37"
        multiple={false}
        onChange={onChange}
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
        value={value}
      >
        <option
          disabled
          value=""
        >
          Tipo de imóvel
        </option>
        <option value="apt">
        Apartamento
        </option>
        <option value="kitnet">
        Kitnet
        </option>
        <option value="casa">
        Casa
        </option>
        <option value="flat">
        Flat
        </option>
      </Select>
    </>
  );
};
export default SelectComponent;
