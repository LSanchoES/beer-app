import React from "react";
import { Col, Row } from "react-bootstrap";

export const Foot = () => {
	return (
		<>
			<Row className="foot__container">
				
					<Col xs={12} md={4} className="foot__misc"><h3 >&copy; Lorenzo Sancho Aragón</h3></Col>
					<Col xs={12} md={4}className="foot__misc"><i><p > Data from https://punkapi.com/documentation/v2</p></i></Col>
					<Col xs={12} md={4} className="foot__misc"><i><p >This is an example of Create-React-App. I hope you like it :)</p></i></Col>
				
			</Row>
		</>
	);
};
