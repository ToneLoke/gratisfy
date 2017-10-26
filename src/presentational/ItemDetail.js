import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ItemDetail = (props) => (
  <Card>
    <CardHeader
      title='toneloke'
      subtitle='Buy my trident'
      avatar='https://avatars0.githubusercontent.com/u/10687151?s=460&v=4'
    />
    <CardMedia
      overlay={<CardTitle title={props.item.name} subtitle={props.item.color} />}
    >
      <img src={props.item.imageURL} alt='' />
    </CardMedia>

    <CardText>
      {props.item.description}
    </CardText>
  </Card>
)

export default ItemDetail
