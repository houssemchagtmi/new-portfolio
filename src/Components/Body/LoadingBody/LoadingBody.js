import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Plane } from "react-loader-spinner";
import "./LoadingPage.css";
const LoadingPageBody = () => {
  return (
    <div className="LoadingPage">
    <div className="box">
      <div className="inner">
        <span>Hello World</span>
      </div>
      <div className="inner">
        <span>Hello World</span>
      </div>
    </div>
    <div className="logoLoding">
      <Plane
        type="puff"
        color="white"
        height={180}
        width={180}
        ariaLabel="loading"
      />
    </div>
    
    
  </div>
  )
}

export default LoadingPageBody
