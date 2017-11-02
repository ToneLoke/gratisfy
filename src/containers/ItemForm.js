import React, {Component} from 'react'
import Categories from '../presentational/Categories'
import FlatButton from 'material-ui/FlatButton'
import AddIcon from 'material-ui/svg-icons/content/add';


const styles = {
  colorButton: {
    fontSize: '1.2rem',
    width: '40%',
    color: 'lightgrey'
  },
  itemName: {
    width: '30%',
  }
};

class ItemForm extends Component{
  state = {
      name: "",
      description: "",
      price: 0,
      color: "",
      imageURL: "",
      categories: []
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddItem(this.state)
    this.setState({
        name: "",
        description: "",
        price: 0,
        color: "",
        imageURL: "",
        categories: []
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <input onChange={this.handleChange} style={styles.itemName} name="name" type="text" placeholder="Item Name"/>
        </div>
        <div>
          <textarea onChange={this.handleChange} name="description" rows="4" cols="50" placeholder="Item Description" />
        </div>
        <div>
          <input onChange={this.handleChange} name="price" type="number" placeholder="Price"/>
        </div>
        <div style={styles.colorButton}>
          Color:<input onChange={this.handleChange} name="color" type="color"/>
        </div>
        <div>
          <input onChange={this.handleChange} name="imageURL" type="text" placeholder="Image URL"/>
        </div>
        <div>
          <Categories />
        </div>
        <FlatButton
          type='submit'
          secondary={true}
          icon={<AddIcon />}
        />
      </form>
    )
  }
}

export default ItemForm
