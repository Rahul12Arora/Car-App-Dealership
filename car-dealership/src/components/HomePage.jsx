import React from 'react'
import './homepage.css'
import homeImage from '../assets/homeimage.png';

function HomePage() {
  return (
    <div><img className='image' src={homeImage}></img></div>
  )
}

export default HomePage