import React, {Component} from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SearchContainer from './SearchContainer'
import ItemsTradeContainer from './ItemsTradeContainer'


class ExchangeContainer extends Component {
  state = {
    items: [],
    categories: [],
  }
  searchItems(keyword){
    //update the items array based on the keyword
  }
  componentWillMount(){
    fetch('items.json')
      .then( res => res.json())
      .then( items => {
        console.log("fetching", items)
        this.setState({items})
      })
      console.log('will mount')
  }

  componentDidMount () {
    console.log('did mount')
  }
  render () {
    console.log('rendering component')
    return (
      <MuiThemeProvider >
        <SearchContainer onSearch={this.searchItems}/>
        <ItemsTradeContainer items={this.state.items}/>
      </MuiThemeProvider>
    )
  }
}

export default ExchangeContainer
