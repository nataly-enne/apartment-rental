import homePageImage from '@/assets/homepage.png';
import styled from 'styled-components';

import Button from '@mui/material/Button';

import Input from '@domain/common/components/input/input';
import SelectComponent from '@domain/common/components/select/select';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D0DDFF;
`;

const Image = styled.div`
    width: 820px;
  img {
    width: 600px;
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
`;

const InputContent = styled.div`
  display: flex;
  align-items: center;
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
          <p>6,5 milhões de opções pra encontrar seu novo lar.</p>
        </div>

        <InputContent>
          <InputWrapper>
            <Input/>
          </InputWrapper>

          <InputWrapper>
            <SelectComponent/>
          </InputWrapper>
          
          <div>
          <Button variant="outlined" size='large'>Buscar</Button>
          </div>

        </InputContent>
      </ContentWrapper>
    </Container>
      
    );
  };
  
  export default PageView;
  