import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
const uniqid = require("uniqid");

export const IngredientsInfo = ({ ingredients }) => {

	//yeast
	//hops => add, name, attribute, [amount => unit, value]
	//malt => name, [amount => unit, value]

	
	//Getting Hops Array
	const [hopsArray, setHopsArray] = useState([]);
	
	
	const getHopsArray = ( ) => {
		ingredients.hops !== undefined ?
		setHopsArray(ingredients.hops)
		: console.log('Loading hops array')
	}
	useEffect(  () => {
		
		getHopsArray()
		
	}, [ingredients.hops !== undefined] )
	


	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Header>
					<Card.Title>
						Ingredients
					</Card.Title>
				</Card.Header>

					<Card.Body>

						<Card.Text>
							<b>Yeast</b>: {ingredients.yeast}
						</Card.Text>

							<Card.Title> <b>Hops</b></Card.Title>
							<ListGroup>	
							{
                        	hopsArray !== undefined
                        	?
                        	hopsArray.map( item =>

										<ListGroupItem key={ uniqid() }>
											At {item.add} add {item.amount.value} {item.amount.unit} of {item.name} ( {item.attribute} )
										</ListGroupItem>
								  ) 
							:
                        	    "Cooking..."
                        	}

						</ListGroup>
					</Card.Body>
			</Card>
		</>
	);
};
