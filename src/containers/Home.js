import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link, Route, Redirect} from 'react-router-dom'
import LoginForm from '../presentational/LoginForm'
import About from './About'
import PropTypes from 'prop-types'

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
    <Link to="/" ><MenuItem primaryText="Home" /></Link>
    <Link to="/userprofile" ><MenuItem primaryText="Profile" /></Link>
    <Link to="/exchange" ><MenuItem primaryText="Exchange Center" /></Link>
    <MenuItem onClick={props.logOut} primaryText="Sign out" />
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

  handleChange = () => {
    let logged = !this.state.logged
    this.setState({logged});
  };

  render() {
    return (
      <div>
        <AppBar
          title="Gratisfy"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged logOut={this.handleChange}/> : <Login />}
        />
        {this.state.logged ? <Redirect to='/userprofile' /> : <Redirect to='/home' /> }
        <Route path='/login' render={() => (<LoginForm updateLogin={this.handleChange} loggedIn={this.state.logged} />)} />
        <Route path='/home' exact component={About} />
      </div>
    );
  }
}

export default AppBarExampleComposition;
