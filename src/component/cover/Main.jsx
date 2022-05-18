import React from 'react'
// import videoBg from '../assets/videoBg.mp4'
import videoBg1 from '../../asset/video/MyVideo.mp4'
import './main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg1} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
  )
}

export default Main