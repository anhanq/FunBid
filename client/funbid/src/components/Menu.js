import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import auth from '../utils/auth';

class MyMenu extends Component {

  // TODO add active item to redux
  onLogOut = (e, {name}) => {
    auth.setAccessToken(null);
    this.setState({activeItem: name});
  };

  state = {activeItem: 'home'}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.props;
    return (
      <Menu pointing secondary size='large' style={{marginTop: '2%'}}>
        <Menu.Item
          href='/home'
          name='home' active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          Homepage
        </Menu.Item>
        <Menu.Item
          href='/profile'
          name='profile' active={activeItem === 'profile'}
          onClick={this.handleItemClick}>
          Profile
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            href='/login'
            name='login' active={activeItem === 'login'}
            onClick={this.handleItemClick}>
            Login
          </Menu.Item>
          <Menu.Item
            href='/signup'
            name='signup' active={activeItem === 'signup'}
            onClick={this.handleItemClick}>
            Signup
          </Menu.Item>
          <Menu.Item
            onClick={this.onLogOut}
            name='logout' active={activeItem === 'logout'}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MyMenu;