import P from "prop-types";
import { Container } from "./styles";
import { TextComponent } from "../TextComponent";
import { SectionContainer } from "../SectionContainer";

export const Footer = ({ Footerhtml }) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{Footerhtml}</TextComponent>
      </SectionContainer>
    </Container>
  );
};

Footer.propTypes = {
  Footerhtml: P.string.isRequired,
};
