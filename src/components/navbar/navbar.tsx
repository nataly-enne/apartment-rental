import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0e0e0e;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
`;

const LogoContainer = styled.div`
  margin-left: 40px;
  span {
    text-shadow: 0 0.5px 0 rgba(255, 255, 255, 0.4);
    font-weight: 500;
    cursor: pointer;
    color: rgb(231, 231, 231);
  }
  span:hover {
    color: rgba(231, 231, 231, 0.8);
  }
`;

const LinkContainer = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: space-evenly;
  width: 160px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: rgb(231, 231, 231);

  &:hover {
    color: rgba(231, 231, 231, 0.8);
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LinkStyled to="/">Apartment Rental</LinkStyled>
      </LogoContainer>
      <LinkContainer>
        <LinkStyled to="/rent"> Alugar</LinkStyled>
        <LinkStyled to="/buy"> Comprar</LinkStyled>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default NavBar;
