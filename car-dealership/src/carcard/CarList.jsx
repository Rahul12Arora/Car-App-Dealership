import React from 'react'
import CarComponent from './CarComponent'
import cararr from './cardata'
function CarList() {
    
    const cardetailsarr = cararr;
  return (
    <div>
      {cardetailsarr.map((item)=> { return <CarComponent data={item}/> })}
    </div>
  )
}

export default CarList