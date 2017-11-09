import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import {Link, Route, Redirect} from 'react-router-dom'
import LoginForm from '../presentational/LoginForm'
import About from './About'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'

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
    <MenuItem onClick={() => {props.logOut(false)}} primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu'

class AppBarExampleComposition extends Component {
  state = {
    logged: false,
    message: '',
    autoHideDuration: 4000,
    open: false
  }
  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }
  componentWillMount(){
    if(localStorage.getItem('token')){
      this.setState({logged: true})
    }
  }
  handleLogin = (userInfo) => {
    if(!userInfo){
      this.setState({logged: false})
    }else{
      fetch('http://localhost:3000/api/v1/login',
      {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(userInfo)
      })
      .then( res => res.json() )
      .then( data => {
        if(data.valid){
          window.localStorage.setItem('username', userInfo.username)
          window.localStorage.setItem('token', data.token)
          this.setState({message: data.message, open: true, logged: true})
        }else{
          this.setState({message: data.message, open: true})
        }
      })
      .catch( err => {
        this.setState({message: err.message, open: true})
      })

    }
  }
  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onRequestClose={this.handleRequestClose}
        />
        <AppBar
          title="Gratisfy"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged logOut={this.handleLogin}/> : <Login />}
        />
        {this.state.logged ? <Redirect to='/userprofile' /> : <Redirect to='/home' /> }
        <Route path='/login' render={() => (<LoginForm updateLogin={this.handleLogin} loggedIn={this.state.logged} />)} />
        <Route path='/home' exact component={About} />
      </div>
    )
  }
}

export default AppBarExampleComposition;
