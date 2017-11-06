import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link, Route} from 'react-router-dom'
import LoginForm from '../presentational/LoginForm'


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <Link to="login"><FlatButton {...this.props} label="Login" /></Link>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/userprofile" ><MenuItem primaryText="Profile" /></Link>
    <Link to="/exchange" ><MenuItem primaryText="Exchange Center" /></Link>
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
  state = {
    logged: false,
  };

  handleChange = (logged) => {
    this.setState({logged});
  };

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <Route path='/login' component={() => (
          <LoginForm updateLogin={this.handleChange} loggedIn={this.state.logged} />
        )} />
      </div>
    );
  }
}

export default AppBarExampleComposition;