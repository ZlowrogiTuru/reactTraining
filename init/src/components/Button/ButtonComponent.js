import React, { PropTypes } from 'react';

const ButtonComponent = props => {
  return <button onClick={props.actionOnClick}> {props.buttonText} </button>;
};

ButtonComponent.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default ButtonComponent;
