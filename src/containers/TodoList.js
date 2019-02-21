import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getTodoList, getTodoLoading } from "../selectors/getTodo";
import TodoList from "../components/TodoList";
import { apiGet } from "../actions/api";

class TodoListContainer extends React.Component {
  componentDidMount() {
    this.props.apiGet({
      path: "/todos",
      data: {
        _limit: 20
      }
    });
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = () =>
  createSelector(
    getTodoList,
    getTodoLoading,
    (todo_list, todo_loading) => {
      return {
        todo_list,
        todo_loading
      };
    }
  );

const mapDispatchToProps = {
  apiGet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
