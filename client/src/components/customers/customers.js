import React, { Component } from 'react';
import axios from 'axios';

import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentWillMount() {
    axios.get('/api/customers')
	.then(customers => this.setState({customers: customers.data}, () => console.log('fetch', customers.data, this.state)))
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
      </div>
    );
  }
}

export default Customers;
