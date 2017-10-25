import React, {Component} from 'react'
import ItemDetail from '../presentational/ItemDetail'
import TradeButton from '../presentational/TradeButton'
import ItemsList from '../presentational/ItemsSlider'

const style = {
  width: '50%'
}

const ItemsTradeContainer = () => {
  return (
    <div style={style}>
      <ItemDetail />
      <TradeButton />
      <ItemsList />
    </div>
  )
}

export default ItemsTradeContainer
