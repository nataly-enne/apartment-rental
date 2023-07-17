import styled from "styled-components";


export const CardImage = styled.img`
  height: 300px;
  width: 264px;
  object-fit: cover;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 600;
  }
`;

export const Informations = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const InformationsContent = styled.div`
  color: #5e6a82;
  display: flex;
  gap: 5px;
  align-items: baseline;
`;

export const CardTitle = styled.h4`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 2px;
`;

export const Description = styled.p`
  padding-top: 20px;
  color: #5e6a82;
`;