import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import uniqid from 'uniqid';

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
	
	//Getting Malt Array

	const [maltArray, setMaltArray] = useState([]);
	
	
	const getMaltArray = ( ) => {
		ingredients.malt !== undefined ?
		setMaltArray(ingredients.malt)
		: console.log('Loading malt array')
	}
	useEffect(  () => {
		
		getMaltArray()
		
	}, [ingredients.malt !== undefined] )

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
							<Card.Title>Yeast</Card.Title>
							 {ingredients.yeast}
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

							<Card.Title> <b>Malt</b></Card.Title>
							<ListGroup>	
							{
                        	maltArray !== undefined
                        	?
                        	maltArray.map( item =>

										<ListGroupItem key={ uniqid() }>
											{item.name}: {item.amount.value} {item.amount.unit}
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
