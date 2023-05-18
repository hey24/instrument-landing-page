import React from 'react'
import './BrandVideo.css'

export default function BrandVideo() {
  const connectedBrands = "We build connected brand systems from vision through execution"

  return (
    <div className='VideoContainer'>
      <img src="./img/video-placeholder.png" alt="" />
      <div className="ConnectedBrandsText">
        <h2>{ connectedBrands }</h2>
      </div>
    </div>
  )
}
