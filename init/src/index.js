import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import MenuScene from './scenes/Menu/';
import GameScene from './scenes/Game/';

const RouterConfig = () => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute path='menu' />
          <Route path='menu' component={MenuScene} />
          <Route path='newGame' component={GameScene} />
        </Route>
      </Router>
    </div>);
};

console.log(new Date().toLocaleTimeString());
ReactDom.render(<RouterConfig />, document.getElementById('app'));
