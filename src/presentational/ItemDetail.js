import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ItemDetail = ({item}) => {
  return item ? <Card>
    <CardHeader
      title='toneloke'
      subtitle='Buy my trident'
      avatar='https://avatars0.githubusercontent.com/u/10687151?s=460&v=4'
    />
    <CardMedia
      overlay={<CardTitle title={item.name} subtitle={item.color} />}
    >
      <img src={item.imageURL} alt='' />
    </CardMedia>

    <CardText>
      {item.description}
    </CardText>
  </Card>
  : <div><h2> No item found matching your search term</h2></div>
}

export default ItemDetail
