import { Footer } from ".";

export default {
  title: " Footer",
  component: Footer,
  args: {
    html: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por José Felipe</a></p>`,
  },
  argTypes: {
    children: { type: "String" },
  },
};

export const template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
