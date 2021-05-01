import React, { useEffect, useState } from "react";
import { Row, Col} from "react-bootstrap";
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
			<Row className="ingredients__container">

				<img src="https://res.cloudinary.com/lsancho-es/image/upload/v1619884257/wkom7ziyyxdjhczvfbzo.png" 
					className="ingredients__image-container"
				/>

				<Col className="ingredients__misc">
					<h1 className="ingredients__title">Yeast</h1>
					<p className="ingredients__list"><i>"{ingredients.yeast}"</i></p>
				</Col>	

				<Col  className="ingredients__misc">
					<h1 className="ingredients__title">Hops</h1>
							
						{
                        hopsArray !== undefined
                        ?
                        hopsArray.map( item =>
									<p 
									key={uniqid()}
									className="ingredients__list"
									>
										At {item.add} add {item.amount.value} {item.amount.unit} of {item.name} ( {item.attribute} )
									</p>
							  ) 
						:
                            "Cooking..."
                        }
						
				</Col>
						
				<Col  className="ingredients__misc">
					<h1 className="ingredients__title">Malt</h1>
				
					{
					maltArray !== undefined
					?
					maltArray.map( item =>

								<p key={ uniqid() }
									className="ingredients__list"
								>
									{item.name}: {item.amount.value} {item.amount.unit}
								</p>
							) 
					:
						"Cooking..."
					}
				</Col>
			</Row>
		</>
	);
};
