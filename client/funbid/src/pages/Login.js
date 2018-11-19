import React from 'react';
import AuthenticationService from '../services/Authentication';
import auth from '../utils/auth';
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';

class Login extends React.Component {
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    auth.setAccessToken('abc');
    // AuthenticationService.login(this.state).then((res) => {
    //   if (res.data && res.data.access_token) {
    //     auth.setAccessToken(res.data.access_token);
    //   }
    // });
  };

  render () {
    return (
      <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>);
      {/*<div className="container my-5 py-5">*/}
        {/*<h6 className="my-5 text-center">*/}
          {/*Welcome to autonomous warehouse application. <br/>*/}
          {/*Please login or contact your local administrator to register.*/}
        {/*</h6>*/}
        {/*<div className="card card-login">*/}
          {/*<div className="card-body">*/}
            {/*<h3 className="text-center mb-4">Login</h3>*/}
            {/*<form onSubmit={this.handleSubmit}>*/}
              {/*<div className="form-group px-3">*/}
                {/*<input*/}
                  {/*type="text"*/}
                  {/*name="username"*/}
                  {/*placeholder="Your username"*/}
                  {/*className="form-control mb-3"*/}
                  {/*onChange={this.handleChange}*/}
                {/*/>*/}
                {/*<input*/}
                  {/*type="password"*/}
                  {/*name="password"*/}
                  {/*placeholder="Your password"*/}
                  {/*className="form-control"*/}
                  {/*onChange={this.handleChange}*/}
                {/*/>*/}
              {/*</div>*/}
              {/*<button className="btn btn-primary pull-right mr-3"*/}
                      {/*type="submit">Login*/}
              {/*</button>*/}
            {/*</form>*/}
          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}
  }
}

export default Login;
