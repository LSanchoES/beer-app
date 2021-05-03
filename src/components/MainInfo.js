import React from "react";
import { Col, Row } from "react-bootstrap";
// import uniqid from 'uniqid';


export const MainInfo = ({ beers }) => {
	//Animation Scroll

	// console.log(beers)
	return (
		<>
		
			<Row className="main__container ">

				<Col xs={12} md={4} className="main__image-container" >
					{
						beers.image_url !== null
							?
							<img
								src={beers.image_url}
								alt={beers.name}
								className="main__image "
							/>

							:
							<img  
							src="https://freesvg.org/img/jimmiet_A_nice_cold_one.png"
							alt="No_image"
							className="main__image "
							/>

					}
				</Col>

				<Col  xs={12} md={4} className=" main__desc">

					<p className="main__title"><i>{beers.name}</i></p>
					<p classname="main__text">{beers.description}</p>

				</Col >

				<Col  xs={12} md={4} className="main__misc">

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
