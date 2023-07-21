import React from "react";
import { Footer as FooterComponent } from "react-materialize";
import './style.css';

const Footer: React.FC = () => {
  return (
    <FooterComponent
      className="example blue lighten-4"
      copyrights="© 2023 Copyright Enne & Gabs. Todos os direitos reservados."
    >
    </FooterComponent>
  );
};
export default Footer;
