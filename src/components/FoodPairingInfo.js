import React from "react";
import { Card , ListGroupItem} from "react-bootstrap";

export const FoodPairingInfo = ({beers}) => {
	return (
		<>
			<Card> 
				<Card.Header>
					<Card.Title>
						Food Pairing
					</Card.Title>
				</Card.Header>
					<Card.Body>
						{beers.food_pairing
							? beers.food_pairing.map((items) => (
									<ListGroupItem key={items}>{items}</ListGroupItem>
							  ))
							: "Coming soon..."}
					</Card.Body>
			</Card>
		</>
	);
};
