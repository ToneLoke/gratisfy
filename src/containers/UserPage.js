import React, {Component} from 'react'
import UserInfo from '../presentational/UserInfo'
import OfferList from '../presentational/OfferList'
import UserItemSlider from './MyItems'
import ItemForm from './ItemForm'

const styles = {
  root: {
    justifyContent: 'space-around',
    float: 'left'
  },
  gridList: {
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  userPage: {
    display: 'grid',
    gridTemplateColumns: '4fr',
    gridTemplateRows: '4fr',
    gridGap: '10px',
    width: '80%',
    margin: '0 auto'
  },
  box: {
    borderRadius: '10px',
    backgroundColor: 'grey',
  },
  boxA: {
    paddingTop: '20px',
    borderRadius: '10px',
    backgroundColor: 'grey'
  },
  boxB: {
    padding: '15px',
    paddingLeft: '30px',
    borderRadius: '10px',
    backgroundColor: 'grey'
  },
  boxC: {
    height: '390px',
    padding: '15px',
    paddingTop: '10px',
    borderRadius: '10px',
    backgroundColor: 'grey',
  },
  boxD: {
    padding: '15px',
    paddingTop: '50px',
    borderRadius: '10px',
    backgroundColor: 'grey',
  },
}

class UserPage extends Component {
 state = {
   userItems : [],
   userData : {
     userName: 'toneloke',
     imageURL: 'https://avatars0.githubusercontent.com/u/10687151?s=460&v=4',
     email: 'toneloke@toneloke.com'
   },
   userOffers : {
     pending: [{
       name: "broom stick"
     }],
     approved: [{
       name: "broom stick"
     }],
     favorites: [{
       name: "broom stick"
     }]
   }
 }
 addItemToUser = (item) => {
  this.setState({userItems: [...this.state.userItems, item]})
 }
  addItemToCurrentUser(){
    if(this.props.location.state){
      let {item} = this.props.location.state
      this.props.location.state = null
      let userOffers= {...this.state.userOffers }
      userOffers.favorites.push(item)
      this.setState({userOffers})
    }
 }

render() {
  this.addItemToCurrentUser()
  return(
    <div style={styles.userPage}>
      <div style={styles.boxA}><UserInfo style={styles.gridList} profileData={this.state.userData} /></div>
      <div style={styles.boxB}><OfferList offeringData={this.state.userOffers}/></div>
      <div style={styles.boxC}><ItemForm onAddItem={this.addItemToUser}/></div>
      <div style={styles.boxD}><UserItemSlider items={this.state.userItems}  /></div>
    </div>
  )
}
}
export default UserPage
