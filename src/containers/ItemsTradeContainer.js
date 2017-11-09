import React, {Component} from 'react'
import ItemDetail from '../presentational/ItemDetail'
import TradeButton from '../presentational/TradeButton'
import ItemsList from '../presentational/ItemsSlider'

const style = {
  width: '50%'
}
class ItemsTradeContainer extends Component {
  state = {
      selectedItem: {},
      filteredItems: []
    }
  componentWillReceiveProps (nextProps) {
    console.log('getting props from exchange', nextProps.items[0])
    let newState = {
      selectedItem: nextProps.items[0],
      filteredItems: nextProps.items.slice(1, nextProps.items.length)
    }
    this.setState({...newState})
  }
  shouldComponentUpdate(nextProps, nextState){
    return Object.is(this.props, nextProps)  ? false : true
  }

  render () {
    console.log("items container render")
    return (
      <div style={style}>
        { Object.keys(this.state.selectedItem).length === 0 ? null : <ItemDetail item={this.state.selectedItem}  /> }
        <ItemsList items={this.state.filteredItems} addItemToFav={this.props.addItem} />
      </div>
    )
  }
}

export default ItemsTradeContainer
