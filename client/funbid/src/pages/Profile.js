import React, {Component} from 'react';
import {Button, Form, Grid, Header, Image, Segment} from 'semantic-ui-react';
import auth from '../utils/auth';

class Profile extends Component {


  handleClickBuy = (e) => {
    console.log("abc");
  };

  render() {
    return (
      <div className='profile-form'>
        <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png'/> Account Details
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' readOnly value='Hung'/>
                <Form.Input
                  fluid
                  label='Bids left'
                  readOnly
                  value='100'
                />
                <Form.Input
                  fluid
                  label='Buy Bids'
                  placeholder='Number of bids'
                  type='number'
                  action={{color: 'teal', labelPosition: 'right', icon: 'cart', content: 'Buy', onClick:this.handleClickBuy }}
                  actionPosition='right'
                  defaultValue='10'
                />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
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
