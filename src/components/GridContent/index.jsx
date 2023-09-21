import P from "prop-types";
import { SectionBackground } from "../SectionBackground";
import { Container, Html } from "./styles";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export const GripContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
};
GripContent.propTypes = {
  title: P.string,
  html: P.string,
  background: P.bool,
};
