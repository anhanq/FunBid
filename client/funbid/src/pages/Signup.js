import React, { Component } from 'react';
import {Button, Form, Grid, Header, Image, Message, Segment, Table} from 'semantic-ui-react';

class Signup extends Component {

  render () {
    return (
      <div className='signup-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Signup for FunBid
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='teal' fluid size='large'>
                  Signup
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <a href='/login'>Login</a>
            </Message>
          </Grid.Column>
        </Grid>
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
