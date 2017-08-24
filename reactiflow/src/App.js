import React, { Component } from 'react';
import { Page } from './components/';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Page size='A4' />
            </div>
        );
    }
}

export default App;
