import { LogoLink } from ".";

export default {
  title: " LogoLink",
  component: LogoLink,
  args: {
    text: " LogoLink",
    srcImg: "assets/images/logo.svg",
    link: "http://localhost",
  },
  argTypes: {
    children: { type: "String" },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const textOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

textOnly.args = {
  srcImg: "",
};
