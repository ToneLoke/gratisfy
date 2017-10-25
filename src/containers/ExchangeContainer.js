import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SearchContainer from './SearchContainer'

const ExchangeContainer = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <SearchContainer />
  </MuiThemeProvider>
)

export default ExchangeContainer
