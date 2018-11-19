import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import auth from '../utils/auth';

class MyMenu extends Component {

  onLogOut = () => {
    auth.setAccessToken(null);
  };

  render() {
    return (
      <Menu size='large' style={{marginTop: '2%'}}>
        <Menu.Item
          href='/home'>
          Homepage
        </Menu.Item>
        <Menu.Item
          href='/profile'>
          Profile
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            href='/login'>
            Login
          </Menu.Item>
          <Menu.Item
            href='/signup'>
            Signup
          </Menu.Item>
          <Menu.Item
            onClick={this.onLogOut}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MyMenu;