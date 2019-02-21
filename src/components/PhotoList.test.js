import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import PhotoList from "./PhotoList";

describe("PhotoList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PhotoList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("match snapshot", () => {
    const renderedValue = renderer.create(<PhotoList />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
