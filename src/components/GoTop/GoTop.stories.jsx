import { GoTop } from ".";

export default {
  title: " GoTop",
  component: GoTop,
  args: {
    children: " GoTop",
  },
  argTypes: {
    children: { type: "String" },
  },
};

export const template = (args) => {
  return (
    <div style={{ height: "400vh" }}>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisici.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisici.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisici.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisici.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisici.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>{" "}
      <h1>Lorem ipsum dolor sit amet, consectetur adipisici.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        nulla in dolore. Dolorum soluta voluptatem est itaque magni laborum at
        dolore? Quo ullam iste et, sequi ad commodi magnam dolore.
      </p>
      <GoTop {...args} />
    </div>
  );
};
