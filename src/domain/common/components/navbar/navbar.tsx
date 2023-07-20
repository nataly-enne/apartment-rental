import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #BBDEFB;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  margin-left: 40px;

  &:hover {
    svg {
      color: #2979ff;
    }
  }

  svg {
    color: #242424;
    font-size: 16px;
    cursor: pointer;
  }

  span {
    text-shadow: 0 0.5px 0 rgba(255, 255, 255, 0.4);
    font-weight: 500;
    cursor: pointer;
    color: #242424;
  }

`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 140px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #242424;
  font-size: 16px;

  &:hover {
    color: #2979ff;
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <FontAwesomeIcon icon={faBuilding} />
        <LinkStyled to="/">Home Rental</LinkStyled>
      </LogoContainer>
      <LinkContainer>
        <LinkStyled to="/rent"> Alugar</LinkStyled>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default NavBar;
