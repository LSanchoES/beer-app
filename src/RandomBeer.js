import React, { useEffect, useState } from "react";
import { apiResp } from "./api/apiResp";
import { FoodPairingInfo } from "./components/FoodPairingInfo";
import { IngredientsInfo } from "./components/IngredientsInfo";
import { MainInfo } from "./components/MainInfo";
import { MethodInfo } from "./components/MethodInfo";

// const uniqid = require("uniqid");

export const RandomBeer = () => {

	//Api petition COMPLETE INFO
	const apiUrl = "https://api.punkapi.com/v2/beers/random";

	const [beers, setBeers] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const resp = await apiResp.get(apiUrl);
		setBeers(resp.data[0]);
	};

	// INGREDIENTS INFO

	
	const [ingredientsArray, setIngredientsArray] = useState([]);
	const ingredientsFlag = beers.ingredients !== undefined;

	const getIngredientsArray = ( ) => {
		beers.ingredients!== undefined ?
		setIngredientsArray(beers.ingredients)
		: console.log('Loading data...')
	}
	useEffect(  () => {

		getIngredientsArray();

	}, [ingredientsFlag] );

	// METHOD INFO

	
	const [methodArray, setMethodArray] = useState([]);
	const methodFlag = beers.method !== undefined;

	const getMethodArray = ( ) => {
		beers.method!== undefined ?
		setMethodArray(beers.method)
		: console.log('Loading data...')
	}
	useEffect(  () => {

		getMethodArray();

	}, [methodFlag] );

	
	return (
		<>
			<h1>Random Beer</h1>

			<MainInfo beers={beers} />
			<hr/>
			<FoodPairingInfo beers={beers} />
			<hr/>
			<IngredientsInfo ingredients={ingredientsArray} />
			<hr/>
			<MethodInfo method={methodArray} />

		</>
	);
};
