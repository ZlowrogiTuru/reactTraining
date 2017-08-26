import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { Form, TextInput } from 'grommet';
import './Page.css';

class Page extends Component {
    constructor(props){
        super(props);
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleOnchange.bind(this);
        this.state = {
            inputValue: ''
        };
        
        
    }

    handleOnchange ({target : { value }})    {
        // event.target.value contains the new value
        console.log(value);
        this.setState({
            inputValue: value
        });

    }
    handleSubmit (e)    {
    }

    render() {
        const { children, size } = this.props;
        return (
            <page
                data-size={size} >

                <form
                    onSubmit={e => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}

                >
                    <TextInput
                        onDOMChange={this.handleOnchange}
                        placeholder='placeholder'
                        value={this.state.inputValue} />
                </form>
                {children}
            </page>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string.isRequired
}

export default Page;
