import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Exchange from './containers/ExchangeContainer'
import UserPage from './containers/UserPage'
import Home from './containers/Home'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => (
  <Router>
    <MuiThemeProvider >
      <Route path='/' component={Home} />
      <Route path='/userprofile' component={UserPage} />
      <Route path='/exchange' component={Exchange} />

    </MuiThemeProvider>
  </Router>
)
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
