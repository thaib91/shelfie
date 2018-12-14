import React, { Component } from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {
    //see all products in database
    //display all individual details of the product
    render() {
        return (
            <div>
                Dashboard
                
                <button className="deleteButton" onClick={() => this.props.deleteItem(this.props.id)}>Delete</button>
                <Product />
            </div>
        )
    }
}