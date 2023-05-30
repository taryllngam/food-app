import React from "react"
import "../Hero/style.css"

export default function Hero() {  
      return (
    <div className="container1">
      <div className="intro">
    <h1>TARYLL'S FOOD APP <br />
    THE FOOD INDUSTRY'S  #1 ORDERING PLATFORM</h1>
    <blockquote>
    ORDER WITH US TODAY AND GET GOOD FOOD WITHIN
      <span className="mins">
        <div className="minn">
      <span className="min"> MINUTES</span>
      </div>
    </span>
       
        </blockquote>
    </div>
    <div>
        <img src= {'assets/pic.png'} alt="" />
      </div>
  </div>
  )
}
