import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button';

class MenuScene extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.props = props;
    this.startGame = this.startGame.bind(this);
  }
  startGame () {
    const { history } = this.props;
    history.replace('newGame');
  }

  render () {
    return <Button actionOnClick={this.startGame}>Launch game!</Button>;
  }
}

export default MenuScene;
