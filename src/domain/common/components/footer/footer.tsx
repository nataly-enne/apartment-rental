import React from "react";
import { Footer as FooterComponent } from "react-materialize";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import "./style.css";

const Links = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 20px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterComponent
      className="example blue lighten-4"
      copyrights="© 2023 Copyright Enne & Gabs. Todos os direitos reservados."
      links={
        <ul>
          <li>
            <Links className="black-text" href="https://github.com/nataly-enne" target="_blank">
              <FontAwesomeIcon icon={faSquareGithub} />
              <span>nataly-enne</span>
            </Links>
          </li>
          <li>
            <Links className="black-text" href="https://github.com/Gaobaofogo" target="_blank">
              <FontAwesomeIcon icon={faSquareGithub} />
              <span>gaobaofogo</span>
            </Links>
          </li>
        </ul>
      }
    >
      <h5 className="black-text">Contato</h5>
      <p className="black-text">
        Endereço: CIVT - UFRN - Av. Senador Salgado Filho, 3000
        <br />
        Lagoa Nova - Natal/RN
        <br />
        CEP: 59.078.970 
      </p>
      <p className="black-text">
        Telefone: (11) 4002-0922
        <br />
        Email: contato@homerental.com.br
      </p>
    </FooterComponent>
  );
};
export default Footer;
