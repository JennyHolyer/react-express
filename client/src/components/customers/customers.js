import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './customers.css';

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  width: 30%;
  margin: auto;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  line-height: 2rem;
  border-bottom: 1px dotted #777;
`;
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
        <UnorderedList>
          {this.state.customers.map(customer =>
            <ListItem key={customer.id} >{customer.firstName} {customer.lastName}</ListItem>
          )}
        </UnorderedList>
      </div>
    );
  }
}

export default Customers;
