import React, { Component, PropTypes } from 'react';
class App extends Component {
  render () {
    console.log(this.props);
    return <div>{this.props.children}</div>;
  };
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
