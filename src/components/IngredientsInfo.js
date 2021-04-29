import React from "react";
import { Card, ListGroupItem } from "react-bootstrap";
const uniqid = require("uniqid");

export const IngredientsInfo = ({ beers }) => {

	//yeast
	//hops => add, name, attribute, [amount => unit, value]
	//malt => name, [amount => unit, value]

	return (
		<>
			<Card>
				<Card.Header>
					<Card.Title>
						Ingredients
					</Card.Title>

				</Card.Header>
					<Card.Body>
						{
                        beers.ingredients
                        ?
                        beers.ingredients.hops.map( item =>

									<ListGroupItem key={ uniqid() }>
										<b>{item.add.toUpperCase()}</b>
										{item.name} {item.attribute} 
									</ListGroupItem>
							  ) 
						:
                            "Coming soon..."
                        }
					</Card.Body>
			</Card>
		</>
	);
};
