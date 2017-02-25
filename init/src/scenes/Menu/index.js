import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { ButtonComponent } from '../../components/Button';

class MenuScene extends Component {
  startGame () {
    browserHistory.replace('newGame');
  }

  render () {
    return <ButtonComponent buttonText='Launch game' actionOnClick={this.startGame} />;
  }
}

export default MenuScene;
