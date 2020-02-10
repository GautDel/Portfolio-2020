import React from 'react'

function LoadLogo() {
  return (
    <div className="logo-center">
      <svg className="svg" height="200" width="200" viewBox="-7 -10 600 600"
        preserveAspectRatio="xMinYMin meet">
        <polygon className="polygon" points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill="rgba(0,0,0,0)" stroke="rgba(255, 0, 85, 0.1)" strokeWidth="20" />
      </svg>

      <div className="loader-letter">G</div>
    </div>
  )
}

export default LoadLogo
