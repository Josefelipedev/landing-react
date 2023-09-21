import { GripTwoColums } from ".";

export default {
  title: " GripTwoColums",
  component: GripTwoColums,
  args: {
    title: " GripTwoColums",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis si
    t magnam neque cumque aliquid consequuntur cupiditate? Illo consequuntur 
    saepe enim repellendus autem libero! Magni ex nam voluptas voluptates ratione.`,
    srcImg: "/assets/images/javascript.svg",
  },
};

export const template = (args) => {
  return (
    <div>
      <GripTwoColums {...args} />
    </div>
  );
};
