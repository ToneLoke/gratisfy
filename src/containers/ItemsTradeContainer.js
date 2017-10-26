import React, {Component} from 'react'
import ItemDetail from '../presentational/ItemDetail'
import TradeButton from '../presentational/TradeButton'
import ItemsList from '../presentational/ItemsSlider'

const style = {
  width: '50%'
}

class ItemsTradeContainer extends Component {
  state = {

  }
  render(){
    console.log("getting props from exchange container", this.props)
    return (
      <div style={style}>
        <ItemDetail />
        <TradeButton />
        <ItemsList />
      </div>
    )
  }
}

export default ItemsTradeContainer
