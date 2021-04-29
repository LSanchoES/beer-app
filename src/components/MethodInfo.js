import React, { useEffect, useState } from 'react'
import { Card , ListGroup, ListGroupItem} from 'react-bootstrap';
import uniqid from 'uniqid';

export const MethodInfo = ({method}) => {
	
	//twist (null sometimes)
	//fermentation => [temp => unit, value]
	//mash_temp => duration , [temp => unit, value]
    

	//Getting Fermentation Array

	const [fermentationArray, setFermentationArray] = useState([]);
	
	const getFermentationArray = ( ) => {
		method.fermentation !== undefined ?
		setFermentationArray(method.fermentation.temp)
		: console.log('Loading fermentation array')
	};

	useEffect(  () => {
		
		getFermentationArray();
		
	}, [method.fermentation !== undefined] );
	
	



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
						<ListGroup>
							{
                	        fermentationArray !== undefined
                	        ?
                	        [fermentationArray].map( item =>

										<ListGroupItem key={ uniqid() }>
										At	{item.value} degrees {item.unit}
										</ListGroupItem>
								  ) 
							:
                	            "Fermenting..."
                	        }
						</ListGroup>
					</Card.Text>		
				</Card.Body>´

				<Card.Body>
						<Card.Title>Mash Temp</Card.Title>
					<Card.Text>
						<ListGroup>
							{
                	        mash_tempArray !== undefined
                	        ?
							
                	        mash_tempArray.map( item =>

										<ListGroupItem key={ uniqid() }>
										At	{item.temp.value} degrees {item.temp.unit} during {item.duration} mins
										</ListGroupItem>
								  ) 
							:
                	            "Fermenting..."
                	        }
						</ListGroup>
						
					</Card.Text>		
				</Card.Body>

				<Card.Body>

					<Card.Title>Twist</Card.Title>
							
							{
							method.twist !== null
							?
							<ListGroupItem>{method.twist}</ListGroupItem>
							:
							<ListGroupItem>Nothing special... just twist with love!💖</ListGroupItem>
							
							}
							
				</Card.Body>
			</Card>
        </>
    )
}
