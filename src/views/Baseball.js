import React, { Component } from 'react';
import lang from './allang.jpg';
export default class Baseball extends Component {
    constructor() {
        super();
        this.state = {
            about: 'page'
        }
    } 
    loopThroughNames (listOfNames) {
        return listOfNames.map(myName => <li className="list-group-item">{myName} </li>)
    }

    render() {
        return (
            <div>
                <h2>This is the Baseball page.</h2>
                {this.loopThroughNames(this.props.names)}
                <img src={lang} alt="Lang" />;
            </div>
        )
    }
}

