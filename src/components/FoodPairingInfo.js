import React from "react";
import { Card , ListGroupItem} from "react-bootstrap";
import uniqid from 'uniqid'
// const uniqid = require("uniqid");

export const FoodPairingInfo = ({beers}) => {

	return (
		<>
			<Card style={{ width: "18rem" }}> 
				<Card.Header>
					<Card.Title>
						Food Pairing
					</Card.Title>
				</Card.Header>
					<Card.Body>
						{beers.food_pairing
							? beers.food_pairing.map((items) => (
									<ListGroupItem key={uniqid()}>{items}</ListGroupItem>
							  ))
							: "Coming soon..."}
					</Card.Body>
			</Card>
		</>
	);
};
