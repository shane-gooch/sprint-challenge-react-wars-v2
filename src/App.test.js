import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StarWarsCharDisplay from "../src/components/StarWarsCharDisplay";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App />", () => {
  it("Should Match SnapShot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("<StarWarsCharDisplay />", () => {
  it("Should Match SnapShot", () => {
    const tree = renderer.create(<StarWarsCharDisplay />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
