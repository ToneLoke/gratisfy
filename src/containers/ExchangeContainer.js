import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SearchContainer from './SearchContainer'
import ItemsTradeContainer from './ItemsTradeContainer'

const ExchangeContainer = () => (
  <MuiThemeProvider >
    <SearchContainer />
    <ItemsTradeContainer />
  </MuiThemeProvider>
)

export default ExchangeContainer
