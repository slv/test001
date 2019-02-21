import { stringify } from "query-string";

export const API_GET_REQUEST = "API_GET_REQUEST";
export const API_GET_RESPONSE = "API_GET_RESPONSE";

const API_BASE = "https://jsonplaceholder.typicode.com";

export const apiGetRequestAction = ({ path, data }) => ({
  type: API_GET_REQUEST,
  path,
  data
});

export const apiGetResponseAction = ({ path, data, response, error }) => ({
  type: API_GET_RESPONSE,
  path,
  data,
  response,
  error
});

export const apiGet = ({ path = "", data = null }) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    dispatch(apiGetRequestAction({ path, data }));

    fetch(API_BASE + path + (data ? "?" + stringify(data) : ""), {
      method: "get"
    })
      .then(response => response.json())
      .then(response => {
        dispatch(apiGetResponseAction({ path, data, response }));
        resolve({ path, data, response });
      })
      .catch(error => {
        dispatch(apiGetResponseAction({ path, data, error }));
        reject({ path, data, error });
      });
  });
