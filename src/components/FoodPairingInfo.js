import React from "react";
import { Row, Col } from "react-bootstrap";
import uniqid from "uniqid";

export const FoodPairingInfo = ({ beers }) => {
	return (
		<>
			<Row className="food__container">

				<Col xs={{span:12 , order:2}} md={{span:4 , order:1}} className="food__misc">
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
				<Col  xs={{span:12 , order:1}} md={{span:4 , order:2}}  md={4} className="food__desc">
					<h1 className="food__title">Food Pairing</h1>
				</Col>


			</Row>
		</>
	);
};
