import React, { useEffect, useState } from 'react'
import { Card , ListGroup, ListGroupItem} from 'react-bootstrap';
const uniqid = require("uniqid");

export const MethodInfo = ({method}) => {

	//twist (null sometimes)
	//fermentation => [temp => unit, value]
	//mash_temp => duration , [temp => unit, value]
    

	//Getting Fermentation Array

	const [fermentationArray, setFermentationArray] = useState([]);
	
	const getFermentationArray = ( ) => {
		method.fermentation !== undefined ?
		setFermentationArray(method.fermentation)
		: console.log('Loading fermentation array')
	};

	useEffect(  () => {
		
		getFermentationArray();
		
	}, [method.fermentation !== undefined] );
	
	console.log(fermentationArray);

	//Getting Mash Temp Array
	
	const [mash_tempArray, setMash_tempArray] = useState([]);
	
	
	const getMash_tempArray = ( ) => {
		method.mash_temp !== undefined ?
		setMash_tempArray(method.mash_temp)
		: console.log('Loading mash_temp array')
	}
	useEffect(  () => {
		
		getMash_tempArray()
		
	}, [method.mash_temp !== undefined] )


    return (
        <>
            <Card style={{ width: "18rem" }}>
				<Card.Header>
					<Card.Title>
						Method
					</Card.Title>
				</Card.Header>

				<Card.Body>
						<Card.Title>Fermentation</Card.Title>
					<Card.Text>
						<Card.Title>Temp</Card.Title>
						<ListGroup>
							{
                	        fermentationArray !== undefined
                	        ?
                	        fermentationArray.map( item =>

										<ListGroupItem key={ uniqid() }>
											{item.temp.value} {item.temp.unit}
										</ListGroupItem>
								  ) 
							:
                	            "Fermenting..."
                	        }
						</ListGroup>
					</Card.Text>		
				</Card.Body>


			</Card>
        </>
    )
}
