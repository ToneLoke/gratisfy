import React, {Component} from 'react'
import Categories from '../presentational/Categories'
import FlatButton from 'material-ui/FlatButton'
import AddIcon from 'material-ui/svg-icons/content/add';


const styles = {
  colorButton: {
    fontSize: '1.2rem',
    width: '50%',
    color: 'lightgrey'
  },
  item: {
    width: '100%',
    backgroundColor: 'white',
    color: 'grey'
  }
};

class ItemForm extends Component{
  state = {
      name: "",
      description: "",
      price: 0,
      color: "",
      imageUrl: "",
      categories: []
  }

  handleChange = (e) => {
    // debugger { "description": "dslfjsdklfj"}
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
          <input onChange={this.handleChange} style={styles.item} name="name" type="text" placeholder="Item Name"/>
        </div>
        <div >
          <textarea onChange={this.handleChange} style={styles.item} name="description" rows="4" cols="50" placeholder="Item Description" />
        </div>
        <div >
          <input onChange={this.handleChange} style={styles.item} name="price" type="number" placeholder="Price"/>
        </div>
        <div style={styles.colorButton}>
          Color:<input onChange={this.handleChange} style={ {width: '50%'}} name="color" type="color"/>
        </div>
        <div >
          <input onChange={this.handleChange} style={styles.item} name="imageURL" type="text" placeholder="Image URL"/>
        </div>
        <div>
          <Categories />
          <FlatButton
            type='submit'
            secondary={true}
            icon={<AddIcon />}
            style={styles.item}
          />
        </div>
      </form>
    )
  }
}

export default ItemForm
