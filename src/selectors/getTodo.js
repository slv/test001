export const getTodoList = state => (state.todos && state.todos.items) || [];

export const getTodoLoading = state =>
  (state.todos && state.todos.loading) || false;
