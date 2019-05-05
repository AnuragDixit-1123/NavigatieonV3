
import React, {Component} from 'react';
import Nav from './navigation/Nav';
import { Provider } from 'mobx-react';
import store from './store/Store';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...store}>
          <Nav />
      </Provider>
      );
  }
}
