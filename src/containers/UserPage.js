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
  username: '',
  firstName: '',
  lastName: '',
  picUrl: '',
  favorites: [],
  approved: [],
  pending: [],
  myItems: []
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
 componentWillMount(){
   let token = window.localStorage.getItem('token')
   if(token){
     fetch('http://localhost:3000/api/v1/me',{
       method: 'GET',
       headers: { "content-type": "application/json", "x-access-token": token}
     })
     .then( res => res.json())
     .then( userInfo => {
       console.log("user be loggin in bro", userInfo)
       this.setState(userInfo)
     })
   }else{
     this.props.history.push('/home')
   }
 }
render() {
  this.addItemToCurrentUser()
  let {username, firstName, lastName, picUrl, favorites, approved, pending} = this.state
  let userData = { username, firstName, lastName, picUrl }
  let userOffers = { favorites, approved, pending}
  return(
    <div style={styles.userPage}>
      <div style={styles.boxA}><UserInfo style={styles.gridList} profileData={userData} /></div>
      <div style={styles.boxB}><OfferList offeringData={userOffers}/></div>
      <div style={styles.boxC}><ItemForm onAddItem={this.addItemToUser}/></div>
      <div style={styles.boxD}><UserItemSlider items={this.state.myItems}  /></div>
    </div>
  )
}
}
export default UserPage
