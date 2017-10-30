import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {fullWhite} from 'material-ui/styles/colors'
import SearchIcon from 'material-ui/svg-icons/action/search'
// controlled component
class SearchForm extends Component {
  state = {
    searchTerm: ''
  }
  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  render(){
    return (
      <div>
        <TextField
          hintText='Search for an Item'
          onChange={this.handleChange}
        />
        <RaisedButton
          target='_blank'
          onClick={() => this.props.handleClick(this.state.searchTerm)}
          secondary
          icon={<SearchIcon color={fullWhite} />}
        />
      </div>
    )

  }
}

export default SearchForm
