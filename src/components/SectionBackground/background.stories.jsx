import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
  title: " SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <h1>Children</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};

export const template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
