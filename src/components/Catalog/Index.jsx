import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../Catalog/style.css'

const importImage = (name) => {
	return `assets/${name}.png`
}
const foodStorage = [
	{ id: 1, name: "Burrito", image: importImage("burito"), description: ""},
	{ id: 2, name: "Cheeseburger", image: importImage("cheeseburger"), description: "" },
	{ id: 3, name: "Cheese Pizza", image: importImage("cheesepizza"), description: "" },
	{ id: 4, name: "Pad Tha", description: "", image: importImage('padtha') },
	{ id: 5, name: "Chicken Quesadilla", image: importImage("quesadilla"), description: "" },
	{ id: 6, name: "California Roll", image: importImage("rolls"), description: "" },
	{ id: 7, name: "Fried Chicken Sandwich", image: importImage("fried"), description: "" },
	{ id: 8, name: "Caesar Salad", image: importImage("salad"), description: "" },
	{ id: 9, name: "Boeuf Bourgignon", image: importImage("boeuf"), description: "" },
	{ id: 10, name: "Ramen", image: importImage("ramen"), description: "" },
	{ id: 11, name: "Pizza", image: importImage("pizza"), description: "" },
	{ id: 12, name: "Pierogi", image: importImage("Pierogi"), description: "" },
]
export default function Catalog() {
	const navigate = useNavigate()
	return (
		<>
		<div className="head">
			<div className="headTag">
		<h1 className="nameTag">WHAT WE  HAVE </h1>
		</div>
		</div>
		<div className="wrap">
			{foodStorage.map((food) => {
				return (
					
					<div className="foods" key={food.name} onClick={() => {
						navigate(`/product-detail/${food.id}`)
					}}>
					<div className="food" key={food.id}>
						<div className="foodStuffs">
						<img src={food.image} alt="" />
						<p>NAME: {food.name}</p>
						<p>PRICE:</p>
						<button className="btn">Details</button>
						</div>
					</div>
					</div>
					
				)
			})}
			</div>
		</>
	)
}