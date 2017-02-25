import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import MenuScene from './scenes/Menu/';
import GameScene from './scenes/Game/';

const RouterConfig = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute to='menu' />
        <Route path='menu' component={MenuScene} />
        <Route path='newGame' component={GameScene} />
      </Route>
    </Router>);
};

console.log(new Date().toLocaleTimeString());
ReactDOM.render(<RouterConfig />, document.getElementById('app'));
