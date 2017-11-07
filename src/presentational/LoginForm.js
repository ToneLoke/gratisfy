import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '10px',
  textAlign: 'center'

}
class LoginForm extends Component {
  state ={
    username: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  submitLogin = (e) => {
    window.localStorage.setItem('username', this.state.username)
    this.props.updateLogin()
    this.route.history.location.push('/userprofile')
  }
  render(){
    return(
      <div style={styles}>
        <TextField
          onChange={this.handleChange}
          name='username'
          hintText='TedBeastMode'
          floatingLabelText='Username'
        />
        <TextField
          onChange={this.handleChange}
          name='password'
          hintText='Dragons1234'
          floatingLabelText='Password'
          type='password'
        />
        <FlatButton label='Log In' primary onClick={this.submitLogin}/>
      </div>
    )
  }
}

export default LoginForm
