import React from "react";
import { Col, Row } from "react-bootstrap";

export const Foot = () => {
	return (
		<>
			<Row className="foot__container">
				
					<Col className="foot__misc"><h1 >&copy; Lorenzo Sancho Aragón</h1></Col>
					<Col className="foot__misc"><h2 > Data from https://punkapi.com/documentation/v2</h2></Col>
					<Col className="foot__misc"><h3 >This is an example of Create-React-App. I hope you like it :)</h3></Col>
				
			</Row>
		</>
	);
};
