import React, {Component} from 'react'
import SearchForm from '../presentational/SearchForm'
import FilterButton from '../presentational/FilterButton'

class SearchContainer extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <SearchForm handleClick={this.props.onSearch} />
        <FilterButton />
      </div>
    )
  }
}

export default SearchContainer
