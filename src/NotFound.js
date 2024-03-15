import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='NotFound'>
        <h1>404 not found </h1>
        <h2><Link to="/portal/home">Back to Home Page</Link></h2>
        <img src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif"/>
    </div>
  )
}
