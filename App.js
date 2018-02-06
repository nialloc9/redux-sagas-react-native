import React, { Component } from 'react';
import { Provider } from "react-redux";
import {
    StackNavigator,
} from 'react-navigation';
import Home from './src/containers/Home';
import Profile from './src/containers/Profile';
import store from './src/store';

const Navigator = StackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile }
});


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Navigator />
        </Provider>
    );
  }
}

export default App;