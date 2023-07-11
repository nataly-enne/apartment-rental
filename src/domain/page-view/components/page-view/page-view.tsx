import homePageImage from '@/assets/homepage.png';
import styled from 'styled-components';

import { Button } from 'react-materialize';

import Input from '@domain/common/components/input/input';
import SelectComponent from '@domain/common/components/select/select';

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
            <Input/>
            <SelectComponent/>
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
          >
            Button
          </Button>
          </div>

        </InputContent>
      </ContentWrapper>
    </Container>
      
    );
  };
  
  export default PageView;
  