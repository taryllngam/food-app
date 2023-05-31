import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import '../Catalog/style.css'
import Details from "../../Details";
import { FoodContext } from "../../context/FoodContext";


export default function Catalog() {
	const navigate = useNavigate()
	const foodStorage = useContext(FoodContext)
	return (
		<>
		<div className="head">
			<div className="headTag">
		<h1 className="nameTag">WHAT WE  HAVE </h1>
		</div>
		</div>
		<div className="wrap">
			{foodStorage?.map((food) => {
				return (
					
					<div className="foods" key={food.name} onClick={() => {
						navigate(`/details/${food.id}`)
					}}>
					<div className="food" key={food.id}>
						<div className="foodStuffs">
						<img src={food.image} alt="" />
						<p>NAME: {food.name}</p>
						<p>PRICE:{food.price}</p>
						<button className="btn" >Details</button>
						</div>
					</div>
					</div>
					
				)
			})}
			</div>
		</>
	)
}