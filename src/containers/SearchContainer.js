import React, {Component} from 'react'
import SearchForm from '../presentational/SearchForm'
import FilterButton from '../presentational/FilterButton'

class SearchContainer extends Component {
  constructor () {
    super()
    console.log('constructor fired')
  }
  componentWillMount () {
    console.log('will mount')
  }
  componentDidMount () {
    console.log('did mount')
  }
  render () {
    console.log('rendering component')
    return (
      <div>
        <SearchForm />
        <FilterButton />
      </div>
    )
  }
}

export default SearchContainer
