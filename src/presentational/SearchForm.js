import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {fullWhite} from 'material-ui/styles/colors'
import SearchIcon from 'material-ui/svg-icons/action/search'

const SearchForm = (props) => {
  return (
    <div>
      <TextField
        hintText='Search for an Item'

      />
      <RaisedButton
        target='_blank'
        onClick={props.handleClick}
        secondary
        icon={<SearchIcon color={fullWhite} />}
        />
    </div>
  )
}

export default SearchForm
