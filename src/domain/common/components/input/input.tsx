import React from "react";
import { TextInput } from "react-materialize";
import './styles.css'

const Input: React.FC = () => {
  return (
    <>
      <TextInput
        id="text-input"
        label="Onde deseja morar?"
      />
    </>
  );
};
export default Input;
