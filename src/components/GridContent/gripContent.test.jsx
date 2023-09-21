import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GripContent } from ".";
import mock from "./mock";

describe("< GripContent />", () => {
  it("should render", () => {
    const { container } = renderTheme(<GripContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should render", () => {
    const { container } = renderTheme(
      <GripContent {...mock} background={undefined} />
    );
    expect(container).toMatchSnapshot();
  });
});
