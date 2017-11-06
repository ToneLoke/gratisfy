import React, {Component} from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SearchContainer from './SearchContainer'
import ItemsTradeContainer from './ItemsTradeContainer'


class ExchangeContainer extends Component {
  state = {
    items: [],
    categories: [],
    filteredItems: []
  }

  searchItems = (keyword) => {
    if(keyword){
      let keywordRegex = keyword
      if(keyword.split(' ').length > 1 ) keywordRegex = keyword.split(' ').join('|')
      keywordRegex = new RegExp(keywordRegex,"i")
      let filteredItems = this.state.items.filter( item =>  item.description.match(keywordRegex) ? true : false )
      this.setState({filteredItems})
    }
  }
  categoriesFilter = (values) => {
    console.log("coming from filter button", values)
    let myCat = values.join('')
    myCat = new RegExp(myCat, "i")
    let filteredItems = this.state.items.filter( item =>  item.categories.join(' ').match(myCat) ? true : false )
    this.setState({filteredItems})
  }
  componentWillMount(){
    console.log("started mounting")
    fetch('items.json')
      .then( res => res.json())
      .then( items => {
        console.log("finished my fetch async call");
        this.setState({items, filteredItems: items})
      })
  }
  render () {
    console.log("render")
    return (
      <div>
        <SearchContainer onSearch={this.searchItems} onCategory={this.categoriesFilter}/>
        <ItemsTradeContainer items={this.state.filteredItems}/>
      </div>
    )
  }
}

export default ExchangeContainer
