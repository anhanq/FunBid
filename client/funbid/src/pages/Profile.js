import React, { Component } from 'react';
import { Button, Form, Header, Table } from 'semantic-ui-react';

class Profile extends Component {

  render () {
    return (
      <div>
        <Table
          selectable
          celled
          compact
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Order ID
              </Table.HeaderCell>
              <Table.HeaderCell>
                BarCode
              </Table.HeaderCell>
              <Table.HeaderCell>
                Customer ID
              </Table.HeaderCell>
              <Table.HeaderCell/>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(({id, barcode, customerId}) => (
              <Table.Row key={id}>
                <Table.Cell width={3}>{id}</Table.Cell>
                <Table.Cell width={5}>{barcode}</Table.Cell>
                <Table.Cell width={5}>{customerId}</Table.Cell>
                <Table.Cell width={3}>
                  <Button size='small'>Edit</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Header>Edit Order</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Order ID' readOnly />
            <Form.Input fluid label='BarCode' placeholder='New BarCode' />
          </Form.Group>
          <Button type='submit'>Update</Button>
          <Button color='red' floated='right'>Remove</Button>
        </Form>
        <Header>New Order</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Customer ID' placeholder='Customer ID'/>
            <Form.Input fluid label='BarCode' placeholder='BarCode' />
          </Form.Group>
          <Button type='submit'>Create</Button>
        </Form>
      </div>
    );
  }
}

const data = [
  {id: 1, barcode: 'abc', customerId: 2},
  {id: 1, barcode: 'abc', customerId: 2},
  {id: 1, barcode: 'abc', customerId: 2},
  {id: 1, barcode: 'abc', customerId: 2},
  {id: 1, barcode: 'abc', customerId: 2},
  {id: 1, barcode: 'abc', customerId: 2},
  {id: 1, barcode: 'abc', customerId: 2},
];

export default Profile;
