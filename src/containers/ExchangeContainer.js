import React, {Component} from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SearchContainer from './SearchContainer'
import ItemsTradeContainer from './ItemsTradeContainer'


class ExchangeContainer extends Component {
  state = {
    items: [],
    categories: []
  }
  searchItems = (keyword) => {
    let keywordRegex = keyword
    if(keyword.split(' ').length > 1 ) keywordRegex = keyword.split(' ').join('|')
    keywordRegex = new RegExp(keywordRegex, "i")
    if(!this.state.items.length){
      console.log("filter");
      this.getItems()
        .then( items => {
          items = items.filter( (item) =>  item.description.match(keywordRegex) ? true : false )
          this.setState({items})
        })
    }else{
      let items = this.state.items.filter( (item) =>  item.description.match(keywordRegex) ? true : false )
      this.setState({items})
    }
  }

  getItems(){
    return fetch('items.json')
      .then( res => res.json())
  }
  componentWillMount(){
    this.getItems()
    .then( items => {
      console.log("fetching", items)
      this.setState({items})
    })
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
