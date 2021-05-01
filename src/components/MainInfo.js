import React, { useEffect } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
// import uniqid from 'uniqid';


export const MainInfo = ({ beers }) => {
	//Animation Scroll



	console.log(beers)
	return (
		<>
		
			<Row className="main__container">
				<Col xs={4}>
					{
						beers.image_url !== null
							?
							<img
								src={beers.image_url}
								className="main__image"
								alt={beers.name}
							/>

							:
							<img className="main__image" src="https://freesvg.org/img/jimmiet_A_nice_cold_one.png" />

					}
				</Col>

				<Col xs={2} className=" main__desc">

					<h1 className="main__title">{beers.name}</h1>
					<p classname="main__text">{beers.description}</p>

				</Col>

				<Col xs={2}>
				<div className=" main__tagline">
					<p><i>"{beers.tagline}"</i></p>
				</div>
				<div className="main__tip">
					{beers.brewers_tips} 
				</div>
				<div className="main__date">
					<p>First brewed in {beers.first_brewed}</p>
					<p>Boil volume {beers.boil_volume?.value} {beers.boil_volume?.unit}</p>
				</div>
				</Col>
			</Row>
		</>
	);
};
