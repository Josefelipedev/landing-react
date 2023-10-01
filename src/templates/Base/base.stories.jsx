import { Base } from ".";

import mock from "./mock";
import { GridText } from "../../components/GridSection";
import gridMock from "../../components/GridSection/mock";

export const MockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
    </>
  ),
  ...mock,
};

export default {
  title: "Templates/Base",
  component: Base,
  args: MockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
