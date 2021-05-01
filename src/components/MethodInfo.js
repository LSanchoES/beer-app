import React, { useEffect, useState } from 'react'
import { Col, Row} from 'react-bootstrap';
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
			
			<Row className="method__container">

				<Col className="method__misc">

					<h1 className="method__title">Fermentation</h1>
				
						{
                	    fermentationArray !== undefined
                	    ?
                	    [fermentationArray].map( item =>
									<p key={ uniqid() }
										className="method__list"
									>
									At	{item.value} degrees {item.unit}
									</p>
							  ) 
						:
                	        "Fermenting..."
                	    }

						
					<h1 className="method__title title-2">Mash Temp</h1>
						{
                        mash_tempArray !== undefined
                        ?
						
                        mash_tempArray.map( item =>
									<p key={ uniqid() }
										className="method__list"
									>
									At	{item.temp.value} degrees {item.temp.unit} during {item.duration} mins
									</p>
							  ) 
						:
                            "Fermenting..."
                        }
				

		
					<h1 className="method__title title-3">Twist</h1>
						
						{
						method.twist !== null
						?
						<p className="method__list twist">{method.twist}</p>
						:
						<p className="method__list">Nothing special... just twist with love!💖</p>
						
						}		
				</Col>
			</Row>	
        </>
    )
}
