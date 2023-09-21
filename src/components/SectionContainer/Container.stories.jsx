import { SectionContainer } from ".";

export default {
  title: " SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>sectionContainer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
          ea exercitationem vero aperiam nesciunt fugiat explicabo sapiente
          asperiores maiores laborum consequatur obcaecati? Officia perspiciatis
          accusantium laborum qui fuga temporibus assumenda?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};

export const template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
