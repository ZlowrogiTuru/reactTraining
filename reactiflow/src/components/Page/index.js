import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import './Page.css';

class Page extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { children, size } = this.props;
        return (
            <page data-size={size}>{children}</page>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string.isRequired
}

export default Page;
