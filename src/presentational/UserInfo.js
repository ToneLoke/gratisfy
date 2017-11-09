import React, {Component} from 'react'

const styles = {
  userImage: {
    height: '150px',
    width: '150px',
    border: '2px solid black',
    borderRadius: '50%',
    boxShadow: '0px 0px 15px 0px'
  },
  container: {
    textAlign: 'center',
    color: 'white',
    fontSize: '2em'
  },
  parent: {
    textAlign: 'center'
  }
}

const UserInfo = ({profileData}) => {
  return (
    <div style={styles.parent}>
      <div style={styles.container}>
        <img style={styles.userImage} src={profileData.picUrl} />
        <div style={styles.centered}>{profileData.username}</div>
      </div>
    </div>
  )
}

export default UserInfo
