import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/ExchangeContainer'
import UserPage from './containers/UserPage'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<MuiThemeProvider ><UserPage /></MuiThemeProvider>, document.getElementById('root'))
registerServiceWorker()
