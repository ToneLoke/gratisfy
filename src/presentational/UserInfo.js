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
    position: 'relative',
    textAlign: 'center',
    color: 'black',
    fontSize: '.25em'
  },
  centered: {
    position: 'absolute',
    top: '17%',
    left: '55%',
    transform: 'translate(-50%, -50%)'
  },
  parent: {
    textAlign: 'center'
  }
}

const UserInfo = ({profileData}) => {
  return (
    <div style={styles.parent}>
      <div style={styles.container}>
        <img style={styles.userImage} src={profileData.imageURL} />
        <div style={styles.centered}>{profileData.userName}</div>
      </div>
    </div>
  )
}

export default UserInfo
