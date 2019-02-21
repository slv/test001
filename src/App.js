import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./reducers";
import Home from "./components/Home";
import TodoList from "./containers/TodoList";
import PhotoList from "./containers/PhotoList";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div>
              <Link to="/">Homepage</Link>
              <Link to="/todos">Todo</Link>
              <Link to="/photos">Photo</Link>
            </div>

            <Switch>
              <Route path="/todos" component={TodoList} />
              <Route path="/photos" component={PhotoList} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
