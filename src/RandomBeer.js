import React, { useEffect, useState } from "react";
import { apiResp } from "./api/apiResp";
import { MainInfo } from "./components/MainInfo";

// const uniqid = require("uniqid");

export const RandomBeer = () => {
	//Api petition
	const apiUrl = "https://api.punkapi.com/v2/beers/random";

	const [beers, setBeers] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const resp = await apiResp.get(apiUrl);
		setBeers(resp.data[0]);
	};

	// console.log(beers);

	return (
		<>
			<h1>Random Beer</h1>

			<MainInfo beers={beers}/>

		</>
	);
};
