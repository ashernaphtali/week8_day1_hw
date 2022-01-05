import React, { Component } from 'react';
import lang from './allang.jpg';
export default class Baseball extends Component {
    render() {
        return (
            <div>
                <h2>This is the Baseball page.</h2>
                <img src={lang} alt="Lang" />;
            </div>
        )
    }
}

