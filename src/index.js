import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import store from './store';

import Users from './components/users';
import UserInfo from './components/userinfo';
import './style.scss';

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Users} />
        <Route exact path="/user/:id" component={UserInfo} />

      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);