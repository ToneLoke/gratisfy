import React, {Component} from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import ItemsTradeContainer from './ItemsTradeContainer'
import SearchForm from '../presentational/SearchForm'
import FilterButton from '../presentational/FilterButton'
const styles = {
  itemDetail: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    gridGap: '10px',
    width: '80%',
    margin: '0 auto'
  },
  box: {
    borderRadius: '10px',
    backgroundColor: 'grey',
  },
}

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
    let myCat = values.join('')
    myCat = new RegExp(myCat, "i")
    let filteredItems = this.state.items.filter( item =>  item.categories.join(' ').match(myCat) ? true : false )
    this.setState({filteredItems})
  }
  componentWillMount(){
    fetch('items.json')
      .then( res => res.json())
      .then( items => {
        this.setState({items, filteredItems: items})
      })
  }
  render () {
    return (
      <div style={styles.itemDetail} >
        <div style={styles.box}>
          <SearchForm handleClick={this.searItems} />
          <FilterButton />
        </div>
        <div style={styles.box}>
          <ItemsTradeContainer items={this.state.filteredItems}/>
        </div>
      </div>
    )
  }
}

export default ExchangeContainer
