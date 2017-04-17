import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './app';
import MenuScene from './scenes/Menu/';
import GameScene from './scenes/Game/';

const RouterConfig = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={App} />
        <Route path='/menu' component={MenuScene} />
        <Route path='/newGame' component={GameScene} />
      </div>
    </Router>);
};

console.log(new Date().toLocaleTimeString());
ReactDOM.render(<RouterConfig />, document.getElementById('app'));
