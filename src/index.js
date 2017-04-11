import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './Components/App';
import Article from './Components/Article';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Settings from './Components/Settings';
import store from './store';


ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="settings" component={Settings} />
        <Route path="article/:id" component={Article} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'));
