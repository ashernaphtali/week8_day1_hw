import React, { Component } from 'react';
import stpete from './pier.jpg';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h2>This is the St. Pete page.</h2>
                <img src={stpete} alt="Burg" />;
            </div>
        )
    }
}
