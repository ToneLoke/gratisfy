import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ItemDetail = (props) => (
  <Card>
    <CardHeader
      title={props.name}
      subtitle='Buy my trident'
      avatar='https://avatars0.githubusercontent.com/u/10687151?s=460&v=4'
    />
    <CardMedia
      overlay={<CardTitle title='Overlay title' subtitle='Overlay subtitle' />}
    >
      <img src='http://i.imgur.com/NJuYUzE.png' alt='' />
    </CardMedia>
    <CardTitle title='Card title' subtitle='Card subtitle' />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label='Action1' />
      <FlatButton label='Action2' />
    </CardActions>
  </Card>
)

export default ItemDetail
