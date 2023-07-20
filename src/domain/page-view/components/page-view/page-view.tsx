import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "react-materialize";

import homePageImage from "@/assets/homepage.png";
import SelectComponent from "@domain/common/components/select/select";
import Input from '@domain/common/components/input/input';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BBDEFB;
  padding: 50px;
`;

const Image = styled.div`
  width: 820px;
  img {
    width: 550px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 523px;
  padding-top: 100px;
`;

const InputWrapper = styled.div`
  flex: 1;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 30px;
`;

const InputContent = styled.div`
  display: flex;
  align-items: center;
`;

const Subtitle = styled.p`
  font-weight: 300;
`;

const PageView: React.FC = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleSearch = () => {
    navigate(
      `/rent?city=${city}&type=${type}`
    );
  };
  return (
      
      <Container>
        <Image>
          <img src={homePageImage} alt="" />
        </Image>
        
        <ContentWrapper>
          <div>
            <h2>O imóvel do jeito que você procura tá aqui</h2>
            <Subtitle>6,5 milhões de opções pra encontrar seu novo lar.</Subtitle>
          </div>
  
          <InputContent>
            <InputWrapper>
              <Input 
                label="Onde deseja morar?"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <SelectComponent onChange={(event) => setType(event.target.value)} value={type}/>
            </InputWrapper>
            
            <div>
            <Button
              className='blue accent-3'
              large
              node="a"
              style={{
                marginRight: '5px'
              }}
              waves="light"
              onClick={handleSearch}
            >
              Buscar
            </Button>
            </div>
  
          </InputContent>
        </ContentWrapper>
      </Container>
        
      );
};

export default PageView;
