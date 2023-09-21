import { GripContent } from ".";
import mock from "./mock";

export default {
  title: " GripContent",
  component: GripContent,
  args: mock,
};

export const template = (args) => {
  return (
    <div>
      <GripContent {...args} />
    </div>
  );
};
