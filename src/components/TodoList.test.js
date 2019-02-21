import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TodoList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("match snapshot", () => {
    const renderedValue = renderer.create(<TodoList />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
