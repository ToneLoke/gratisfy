import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {fullWhite} from 'material-ui/styles/colors'
import ThumbUpIcon from 'material-ui/svg-icons/action/thumb-up'

const style = {
  margin: 12
}

const ThumbUp = () => (
  <div>
    <RaisedButton
      backgroundColor='#a4c639'
      icon={<ThumbUpIcon color={fullWhite} />}
      style={style}
    />
  </div>
)

export default ThumbUp
