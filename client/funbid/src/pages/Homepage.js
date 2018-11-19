import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';

class Homepage extends Component {

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
                Robot ID
              </Table.HeaderCell>
              <Table.HeaderCell>
                Location
              </Table.HeaderCell>
              <Table.HeaderCell>
                Current Job
              </Table.HeaderCell>
              <Table.HeaderCell/>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(({id, location, job}) => (
              <Table.Row key={id}>
                <Table.Cell width={3}>{id}</Table.Cell>
                <Table.Cell width={5}>{location}</Table.Cell>
                <Table.Cell width={5}>{job}</Table.Cell>
                <Table.Cell width={3}>
                  <Button size='small' Button color='red'>Remove</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const data = [
  {id: 1, location: 'abc', job: 'abcdef'},
  {id: 1, location: 'abc', job: 'abcdef'},
  {id: 1, location: 'abc', job: 'abcdef'},
  {id: 1, location: 'abc', job: 'abcdef'},
  {id: 1, location: 'abc', job: 'abcdef'},
  {id: 1, location: 'abc', job: 'abcdef'},
];

export default Homepage;
