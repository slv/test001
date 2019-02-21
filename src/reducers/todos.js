import { API_GET_REQUEST, API_GET_RESPONSE } from "../actions/api";

const defaultTodos = {
  items: [],
  loading: false
};

export const todos = (state = defaultTodos, action) => {
  switch (action.type) {
    default:
      return state;
    case API_GET_REQUEST:
      if (action.path === "/todos") {
        return {
          ...state,
          loading: true
        };
      }

      return state;

    case API_GET_RESPONSE:
      if (action.path === "/todos" && action.response) {
        return {
          ...state,
          loading: false,
          items: [
            ...state.items.filter(
              ({ id }) => !action.response.find(item => item.id === id)
            ),
            ...action.response
          ]
        };
      }

      return state;
  }
};
