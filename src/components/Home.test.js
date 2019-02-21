import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Home from "./Home";

describe("Home", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("match snapshot", () => {
    const renderedValue = renderer.create(<Home />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
