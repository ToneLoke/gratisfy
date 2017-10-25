import React, {Component} from 'react'
import SearchForm from '../presentational/SearchForm'
import FilterButton from '../presentational/FilterButton'

class SearchContainer extends Component {
  render () {
    return (
      <div>
        <SearchForm />
        <FilterButton />
      </div>
    )
  }
}

export default SearchContainer
