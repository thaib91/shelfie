import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []

    }
  }

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  //Methods: get inventory for database
  componentDidMount() {
    axios.get('/api/inventory')
      .then(res => {
        console.log(res)
        this.setState({ inventory: res.data })
      })
    console.log(this.state.inventory)
  }

  deleteItem = (deleteId) => {
    let deleteID = this.state.inventory[]
    axios.delete(`/api/product/${deleteId}`)
      .then(res => {
        this.setState({
          inventory:res.data
        })
      })
  }




  render() {
    let inventoryList = this.state.inventory.map(product =>
      <div>
        <Dashboard deleteItem={this.deleteItem}/>
      </div>
    )
    console.log(inventoryList)

    return (
      <div className="App">
        {/* {this.componentDidMount()} */}
        <Header />
        <Form addItem={this.addItem} componentDidMount={this.getInventory} />
        {inventoryList}

      </div>
    );
  }
}

export default App;
