import React from 'react'
import CarComponent from './CarComponent'
import {cararr} from './cardata'
function CarList() {
    
    const cardetailsarr = cararr;
    console.log(cararr)
  return (
    <div>
      {cardetailsarr.map((item)=> { return <CarComponent data={item}/> })}
    </div>
  )
}

export default CarList