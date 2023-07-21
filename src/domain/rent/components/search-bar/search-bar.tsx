import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Input from "@domain/common/components/input/input";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 50px 0;
`;

const InputWrapper = styled.div`
    flex-grow: 1;;
`

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <Container>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <InputWrapper>
        <Input onChange={onChange} label="Digite do bairro ou cidade" />
      </InputWrapper>
    </Container>
  );
};
export default SearchBar;
