import React from 'react'
import CarImage from './CarImage'
import CarBulletPoints from './CarBulletPoints'

function CarComponent({props}) {
  const {imgsrc, description, modelName, year, listPrice, colors, mileage, power, maxSpeed} = props.data;
  return (
    <div>
        <div><img src={imgsrc}></img></div>
        <div>{description}</div>
        <h2>{modelName} ({year})</h2>
        <p>List Price: ${listPrice}</p>
        <p>Available Colors: {colors}</p>
        <p>Mileage: {mileage} miles</p>
        <p>Power: {power} BHP</p>
        <p>Max Speed: {maxSpeed} mph</p>
    </div>
  )
}

export default CarComponent