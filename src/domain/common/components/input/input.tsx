import React from "react";
import { TextInput } from "react-materialize";
import './styles.css'

type Props = {
  label: string;
}

const Input: React.FC<Props> = ({ label }) => {
  return (
    <>
      <TextInput
        id="text-input"
        label={label}
      />
    </>
  );
};
export default Input;
