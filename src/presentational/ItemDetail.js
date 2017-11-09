import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ItemDetail = ({item}) => {
  return (<Card>
    <CardHeader
      title={item.owner.username}
      subtitle='Trade with me'
      avatar={item.owner.picUrl}
    />
    <CardMedia
      overlay={<CardTitle title={item.name} subtitle={item.color} />}
    >
      <img src={item.imageUrl} alt='' />
    </CardMedia>

    <CardText>
      {item.description}
    </CardText>
  </Card>)
}

export default ItemDetail
