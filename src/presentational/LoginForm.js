import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'

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
  static contextTypes = {
    router: PropTypes.object
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  submitLogin = (e) => {
    window.localStorage.setItem('username', this.state.username)
    // this.context.router.history.push('/exchange')
    this.props.updateLogin()
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
