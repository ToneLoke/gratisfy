import React, {Component} from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SearchContainer from './SearchContainer'
import ItemsTradeContainer from './ItemsTradeContainer'

let myItems = [
  {
    name: "Broom Stick",
    description: "super fast limbo 3000, used in a championship quidditch match",
    price: 1000,
    color: 'black',
    imageURL: 'http://cdn.playbuzz.com/cdn/e09fe267-0bba-4e39-9343-84eddacc2a93/ecc34aa6-5be5-4c9a-9228-f9ee576dc45a.png'

  },
  {
    name: "Precious",
    description: "Only one of its kind, may bring bad spirits",
    price: 999999,
    color: 'gold',
    imageURL: 'https://mises.org/sites/default/files/styles/social_media_1200_x_1200/public/static-page/img/lord_of_the_rings_ring.png?itok=6gNxCuOR'

  },
  {
    name: "Kryptonite",
    description: "If superman is giving you a hard time try this out",
    price: 5,
    color: 'green',
    imageURL: 'https://img1.etsystatic.com/034/1/9492703/il_fullxfull.659048499_j4xf.jpg'

  }
]

class ExchangeContainer extends Component {
  state = {
    items: myItems,
    categories: [],
  }
  render () {
    return (
      <MuiThemeProvider >
        <SearchContainer />
        <ItemsTradeContainer items={this.state.items}/>
      </MuiThemeProvider>
    )
  }
}

export default ExchangeContainer
