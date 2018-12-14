import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleChange = (prop, value) => {
        console.log(value)
        this.setState({
            [prop]: value
        })
    }

    addItem = (props) => {
        let { id, name, price, imgurl } = this.state;
        axios.post(`/api/product`, { id, name, price, imgurl })
            .then(res => {
                console.log(res.data)
                props.getInventory = () =>
                    this.setState({
                        id: res.data,
                        name: res.data,
                        price: res.data,
                        imgurl: res.data
                    })

            })
    }

    handleCancel = () => {
        this.setState({
            id: '',
            name:'',
            price:'',
            imgurl:''
        })
     }




    // Methods: create handleChange, post new products to database, clear input boxes
    //add name and price and img url, default img if no url
    //click cancel and add inventory button, save product and clear input
    render() {
        // let {inventory}=this.props.map(product => {
        //     return()
        // })

        return (
            <div>
                Form
                <input className="idNumber" onChange={(e) => this.handleChange('id', e.target.value)} value={this.state.id} />
                <input className='ProductName' onChange={(e) => this.handleChange('name', e.target.value)} value={this.state.name} />
                <input className='Price' onChange={(e) => this.handleChange('price', e.target.value)} value={this.state.price} />
                <input className='ImageURL' onChange={(e) => this.handleChange('imgurl', e.target.value)} value={this.state.imgurl} />
                <button className='Add' onClick={this.addItem}>Add to Inventory</button>
                <button className='Cancel' onClick={this.handleCancel}>Cancel</button>
            </div>
        );
    }
}