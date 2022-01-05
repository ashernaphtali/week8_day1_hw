import React, { Component } from 'react';
import Eats from './baba.jpg';
export default class eats extends Component {
    render() {
        return (
            <div>
                <h2>This is the Eats page.</h2>
                <img src={Eats} alt="Eats" />;
            </div>
        )
    }
}

