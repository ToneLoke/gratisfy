import React, {Component} from 'react'
import ItemDetail from '../presentational/ItemDetail'
import TradeButton from '../presentational/TradeButton'
import ItemsList from '../presentational/ItemsSlider'

const style = {
  width: '50%'
}

class ItemsTradeContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      selectedItem: {},
      filteredItems: []
    }
  }
  componentWillRecieveProps () {
    console.log('getting props from exchange')
  }
  componentWillMount () {
    let newState = {
      selectedItem: this.props.items[0],
      filteredItems: this.props.items.slice(1, this.props.items.length)
    }
    this.setState({...newState})
  }
  render () {
    return (
      <div style={style}>
        <ItemDetail item={this.state.selectedItem} />
        <TradeButton />
        <ItemsList items={this.state.filteredItems} />
      </div>
    )
  }
}

export default ItemsTradeContainer
