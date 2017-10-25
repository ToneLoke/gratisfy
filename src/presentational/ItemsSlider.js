import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)'
  }
}

const tilesData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaSeQR7Uc3XOaVVkm0u5WYr6eP10nPeTPi1EDybmqzN_aCISZ',
    title: 'Breakfast',
    author: 'jill111'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaSeQR7Uc3XOaVVkm0u5WYr6eP10nPeTPi1EDybmqzN_aCISZ',
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaSeQR7Uc3XOaVVkm0u5WYr6eP10nPeTPi1EDybmqzN_aCISZ',
    title: 'Camera',
    author: 'Danson67'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaSeQR7Uc3XOaVVkm0u5WYr6eP10nPeTPi1EDybmqzN_aCISZ',
    title: 'Morning',
    author: 'fancycrave1'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaSeQR7Uc3XOaVVkm0u5WYr6eP10nPeTPi1EDybmqzN_aCISZ',
    title: 'Hats',
    author: 'Hans'
  }
]

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const ItemsList = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color='rgb(0, 188, 212)' /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground='linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
)

export default ItemsList
