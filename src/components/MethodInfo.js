import React from 'react'
import { Card , ListGroupItem} from 'react-bootstrap';
const uniqid = require("uniqid");

export const MethodInfo = ({beers}) => {

	//twist (null sometimes)
	//fermentation => [temp => unit, value]
	//mash_temp => duration , [temp => unit, value]
    
    return (
        <>
            <Card style={{ width: "18rem" }}>
				<Card.Header>
					<Card.Title>
						Method
					</Card.Title>

				</Card.Header>
					<Card.Body>
						{
                        beers.method
                        ?
                        beers.method.hops.map( item =>

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
    )
}
