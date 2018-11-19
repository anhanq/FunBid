import React, { Component } from 'react';
import { Button, Table, Card } from 'semantic-ui-react';
import Auction from '../components/Auction';

class Homepage extends Component {

  render () {
    return (
      <div>
        <Card.Group>
            {data.map(item => (
              <Auction key={item.id} data={item}>
              </Auction>
            ))}
        </Card.Group>
      </div>
    );
  }
}

const data = [
  {id: 1, price: 100, start: 0, remain: 10, end: 0, bidder: "Hung"},
  {id: 1, price: 100, start: 0, remain: 10, end: 0, bidder: "Hung"},
  {id: 1, price: 100, start: 0, remain: 10, end: 0, bidder: "Hung"},
  {id: 1, price: 100, start: 0, remain: 10, end: 0, bidder: "Hung"},
  {id: 1, price: 100, start: 0, remain: 10, end: 0, bidder: "Hung"},
];

export default Homepage;
