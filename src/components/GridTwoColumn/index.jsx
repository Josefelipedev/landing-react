import P from "prop-types";
import { Container, TextComponentGrip, ImageConteiner, Image } from "./styles";
import { SectionBackground } from "../SectionBackground/index";
import { Heading } from "../Heading/index";
import { TextComponent } from "../TextComponent/index";
export const GripTwoColums = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container background={background}>
        <TextComponentGrip>
          <Heading uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextComponentGrip>
        <ImageConteiner>
          <Image src={srcImg} alt={title} />
        </ImageConteiner>
      </Container>
    </SectionBackground>
  );
};
GripTwoColums.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
