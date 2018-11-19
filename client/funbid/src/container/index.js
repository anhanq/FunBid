import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import history from '../utils/history';
import auth from '../utils/auth';
import {Container, Grid} from 'semantic-ui-react';
// Pages
import Login from '../pages/Login';
import Homepage from '../pages/Homepage';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import MyMenu from '../components/Menu';

class MyContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isAuth: auth.isAuth(),
    };
  }

  componentDidMount () {
    this.removeAuthListener = auth.addListener(
      () => this.setState({isAuth: auth.isAuth()}));
  }

  componentWillUnmount () {
    this.removeAuthListener();
  }

  render () {
    // if (!this.state.isAuth) {
    //   return (
    //     <Router history={history}>
    //       <div>
    //         <Switch>
    //           <Route path="/login" name="Login" component={Login}/>
    //           <Redirect from="/" to="/login"/>
    //         </Switch>
    //       </div>
    //     </Router>
    //   );
    // }
    return (
      <Router history={history}>
        <Container>
          <MyMenu/>
          <Grid colums={1}>
            <Grid.Column width={16}>
              <Switch>
                <Route path="/home" name="Homepage" component={Homepage}/>
                <Route path="/profile" name="Profile" component={Profile}/>
                <Route path="/login" name="Login" component={Login}/>
                <Route path="/signup" name="Signup" component={Signup}/>
                <Redirect from="/" to="/home"/>
              </Switch>
            </Grid.Column>
          </Grid>

        </Container>
      </Router>
    );
  }
}

export default MyContainer;
