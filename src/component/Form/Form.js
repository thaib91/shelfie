import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            imgurl:''
        }
    }

    // Methods: create handleChange, post new products to database, clear input boxes

    render() {
        return (
            <div>
                Form
            </div>
        );
    }
}