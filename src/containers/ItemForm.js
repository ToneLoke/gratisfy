import React, {Component} from 'react'
import Categories from '../presentational/Categories'
import FlatButton from 'material-ui/FlatButton'
import AddIcon from 'material-ui/svg-icons/content/add';


class ItemForm extends  Component{
  state = {
    newItem:{
      name: "",
      description: "",
      price: 0,
      color: "",
      imageURL: "",
      categories: []
    }
  }

  handleChange = (e) => {

  }

  render(){
    return(
      <form>
        <div>
          <input name="name" type="text"/>
        </div>
        <div>
          <textarea name="description" rows="4" cols="50" />
        </div>
        <div>
          <input name="price" type="number"/>
        </div>
        <div>
          <input name="color" type="color"/>
        </div>
        <div>
          <input name="imageURL" type="image"/>
        </div>
        <div>
          <Categories />
        </div>
        <FlatButton
          secondary={true}
          icon={<AddIcon />}
        />
      </form>
    )
  }
}

export default ItemForm
