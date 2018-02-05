import React, { Component } from 'react';
import { Provider } from "react-redux";
import Container from './src/containers/App';
import store from './src/store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Container />
        </Provider>
    );
  }
}

export default App;
