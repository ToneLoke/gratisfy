import React, {Component} from 'react'
import SearchForm from '../presentational/SearchForm'
import FilterButton from '../presentational/FilterButton'

class SearchContainer extends Component {
  constructor () {
    super()
  }
  shouldComponentUpdate () {
    console.log('should')
    return false
  }
  render () {
    console.log('render search')
    return (
      <div>
        <SearchForm handleClick={this.props.onSearch} />
        <FilterButton />
      </div>
    )
  }
}

export default SearchContainer
