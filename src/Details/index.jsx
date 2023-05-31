import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";
import "../Details/style.css"


export default function Details() {
 let { id } = useParams();
 const foodStorage = useContext(FoodContext)
  const i = +id;
  console.log(foodStorage);
  return(
    
    <div className="display">
      <div className="display1">
      <div>
           <img src={foodStorage[i-1].image} />
           </div>
           <div className="description">
           <h1 className="names"> {foodStorage[i-1].name}</h1>
           <h1> <span className="describe">DESCRIPTION:</span>  {foodStorage[i-1].description}</h1>
           <h1 className="price">PRICE: {foodStorage[i-1].price}</h1>
           <button>Purchase</button>
           </div>
           </div>
        
    
   
    </div>
      
  )
}
