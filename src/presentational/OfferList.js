import React, {Component} from 'react'
import ListItem from './ListItem'

const OfferList = (props) => {
  const generateList = []
  for (let propName in props.offeringData) {
    generateList.push(
      <div>
        <h4>{propName}</h4>
        <ul>{props.offeringData[propName].map((item) => (<ListItem name={item.name} />))}</ul>
      </div>
      )
  }
  console.log(generateList)
  return (
    <div>
      {generateList}
    </div>
  )
}

export default OfferList
