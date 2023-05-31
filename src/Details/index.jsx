import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";
import { useNavigate } from "react-router";
import "../Details/style.css"


export default function Details() {
 let { id } = useParams();
 const navigate = useNavigate()
 const foodStorage = useContext(FoodContext)
  const food = foodStorage.find(ele => ele.id == id)
  console.log(foodStorage);
  return(
    
    <div className="display">
      <div className="display1">
      <div>
           <img src={food?.image} />
           </div>
           <div className="description">
           <h1 className="names"> {food?.name}</h1>
           <h1> <span className="describe">DESCRIPTION:</span>  {food?.description}</h1>
           <h1 className="price">PRICE: {food?.price}</h1>
           <button onClick={() => {
						navigate(`/billing`)
					}}>Purchase</button>
           </div>
           </div>
        
    
   
    </div>
      
  )
}
