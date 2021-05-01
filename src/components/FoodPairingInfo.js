import React from "react";
import { Row, Col } from "react-bootstrap";
import uniqid from "uniqid";

export const FoodPairingInfo = ({ beers }) => {
	return (
		<>
			<Row className="food__container">

				<Col className="food__misc">
					<div>
						{beers.food_pairing
							? beers.food_pairing.map((items) =>
								<h3 
								key={uniqid()}
								className="food__list"
								>
								
									<i>"{items}"</i>
								</h3>)
							: "Coming soon..."}
					</div>
				</Col>
				<Col className="food__desc">
					<h1 className="food__title">Food Pairing</h1>
				</Col>
				<Col className="food__image-container">
					<img
						src="https://res.cloudinary.com/lsancho-es/image/upload/v1619875144/opd2rsglg8zjzrlqbxng.png"
						className="food__image"
					/>
				</Col>

			</Row>
		</>
	);
};
