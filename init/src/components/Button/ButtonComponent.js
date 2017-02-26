import React, { PropTypes } from 'react';

const ButtonComponent = props => {
  return <button onClick={props.actionOnClick}> {props.children} </button>;
};

ButtonComponent.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default ButtonComponent;
