import React from "react"
import "../Navbar/style.css"
import { FaUtensils } from 'react-icons/fa';


 export default function Nav() {
    return (
        <div className="navBar">
        <div className="app-nav">
          <a href="#home">Home</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
          <FaUtensils className="food" />
        </div>
      
      </div>
    )
 }
 
