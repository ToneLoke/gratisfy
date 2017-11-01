import React, {Component} from 'react'
import UserInfo from '../presentational/UserInfo'
import OfferList from '../presentational/OfferList'
import ItemForm from './ItemForm'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    float: 'left'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  }
};

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
     favorite: [{
       name: "broom stick"
     }]
   }
 }


render() {
  return(
    <div style={styles.root}>
      <UserInfo style={styles.gridList} profileData={this.state.userData} />
      <OfferList offeringData={this.state.userOffers}/>
      <ItemForm />
    </div>
  )
}
}
export default UserPage
