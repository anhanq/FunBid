import React, { Component } from 'react';
import { Button, Form, Header, Table } from 'semantic-ui-react';

class Signup extends Component {

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
                Shelf ID
              </Table.HeaderCell>
              <Table.HeaderCell>
                Location
              </Table.HeaderCell>
              <Table.HeaderCell>
                Stored
              </Table.HeaderCell>
              <Table.HeaderCell/>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(({id, location, stored}) => (
              <Table.Row key={id}>
                <Table.Cell width={3}>{id}</Table.Cell>
                <Table.Cell width={5}>{location}</Table.Cell>
                <Table.Cell width={5}>{stored}</Table.Cell>
                <Table.Cell width={3}>
                  <Button size='small'>Edit</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Header>Edit Shelf</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Shelf ID' readOnly />
            <Form.Input fluid label='Location' placeholder='New Location' />
          </Form.Group>
          <Button type='submit'>Update</Button>
          <Button color='red' floated='right'>Remove</Button>
        </Form>
        <Header>New Shelf</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Location' placeholder='Location' />
          </Form.Group>
          <Button type='submit'>Create</Button>
        </Form>
      </div>
    );
  }
}

const data = [
  {id: 1, location: 'abc', stored: 'true'},
  {id: 1, location: 'abc', stored: 'true'},
  {id: 1, location: 'abc', stored: 'true'},
  {id: 1, location: 'abc', stored: 'true'},
  {id: 1, location: 'abc', stored: 'true'},
  {id: 1, location: 'abc', stored: 'true'},
];

export default Signup;
