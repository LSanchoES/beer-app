import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export const MainInfo = ({beers}) => {

  
    return (
        <>
		<h2>Main Info</h2>
            	<Card style={{ width: "18rem" }} key={beers.id}>
				
				<Card.Img
					variant="top" 
					src={beers.image_url}
					style={{ width: "5rem"}}
					className="imagen"
					
					/>
				<Card.Body>
					<Card.Title>{beers.name}</Card.Title>
					<Card.Text>
						{beers.description}
					</Card.Text>
                
				<ListGroup className="list-group-flush">
					<ListGroupItem><b>Tagline:</b> {beers.tagline}</ListGroupItem>
					<ListGroupItem><b>Boil volume:</b> {beers.boil_volume?.value}{beers.boil_volume?.unit}</ListGroupItem>
					<ListGroupItem><b>First brewed:</b> {beers.first_brewed}</ListGroupItem>
					<ListGroupItem><b>Tip:</b> {beers.brewers_tips}</ListGroupItem>
				</ListGroup>
				
				</Card.Body>
                </Card>
        </>
    )
}
