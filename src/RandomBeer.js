import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { apiResp } from "./api/apiResp";
import { FoodPairingInfo } from "./components/FoodPairingInfo";
import { Foot } from "./components/Foot";
import { Head } from "./components/Head";
import { IngredientsInfo } from "./components/IngredientsInfo";
import { MainInfo } from "./components/MainInfo";
import { MethodInfo } from "./components/MethodInfo";


// import uniqid from 'uniqid';

export const RandomBeer = () => {
	//Animation Scroll
	
	
	//Api petition COMPLETE INFO
	
	const [apiUrl, setApiUrl] = useState("https://api.punkapi.com/v2/beers/random")
	
	const [beers, setBeers] = useState([]);
	
	const [counter, setCounter] = useState(0); //HandleRepeatClick

	useEffect(() => {
		getData();
	}, [counter]);

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

	//Repeat Call Button

	const [disableButton, setDisableButton] = useState(false);

	const handleRepeatCall = () =>{

		counter === 0 ?
		setCounter(1) :
		setCounter(0)
		setDisableButton(true)
		setTimeout(() => {
			setDisableButton(false)	
		}, 1000);
	}
	return (
		<>	
			
			<Container className="animate__animated animate__fadeIn">
			<Head />

			<div 
			className="random__bar" 
			>
				<button className=" btn random__button pointer"
						onClick={handleRepeatCall}
						disabled={disableButton}
				>I want another beer!</button>
			</div>

			<MainInfo beers={beers} />
			
			<FoodPairingInfo beers={beers} />
			
			<IngredientsInfo ingredients={ingredientsArray} />
			
			<MethodInfo method={methodArray} />

			<Foot />	
			
			</Container>
		</>
	);
};
