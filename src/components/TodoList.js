import React from "react";
import PropTypes from "prop-types";
import { TodoList, TodoLoading } from "./TodoList.theme";

export const Component = ({ todo_list, todo_loading }) => (
  <TodoList>
    {todo_loading ? (
      <TodoLoading />
    ) : (
      (todo_list || []).map(todo_item => (
        <div key={todo_item.id}>{todo_item.title}</div>
      ))
    )}
  </TodoList>
);

Component.displayName = "TodoList";

Component.propTypes = {
  todo_list: PropTypes.array,
  todo_loading: PropTypes.bool
};

export default Component;
