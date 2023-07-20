import React from "react";
import { TextInput } from "react-materialize";
import './styles.css'

type Props = {
  label: string;
  value?: string;
  onChange?: () => void;
}

const Input: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <>
      <TextInput
        id="text-input"
        label={label}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
