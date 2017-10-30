import React, {Component} from 'react'
import ItemDetail from '../presentational/ItemDetail'
import TradeButton from '../presentational/TradeButton'
import ItemsList from '../presentational/ItemsSlider'

const style = {
  width: '50%'
}

class ItemsTradeContainer extends Component {
  constructor () {
    super()
    this.state = {
      selectedItem: {},
      filteredItems: []
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('getting props from exchange')
    let newState = {
      selectedItem: nextProps.items[0],
      filteredItems: nextProps.items.slice(1, nextProps.items.length)
    }
    this.setState({...newState})
  }

  render () {
    return (
      <div style={style}>
        <ItemDetail item={this.state.selectedItem} />
        {/* { this.state.selectedItem ? <ItemDetail item={this.state.selectedItem} /> : <h2>No Items Found matching your search</h2> } */}
        <ItemsList items={this.state.filteredItems} />
      </div>
    )
  }
}

export default ItemsTradeContainer
