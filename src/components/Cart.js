import React from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';

export const Cart = ({ cartItems, removeFromCart, addToCart, getTotalPrice }) => {
	return (
		<Col md={4}>
			<h2>Cart</h2>
			<ListGroup>
				{cartItems.map((item) => (
					<ListGroup.Item key={item.id}>
						<Row>
							<Col md={8}>
								{item.name} x {item.quantity}
							</Col>
							<Col md={4}>
								<Button variant="secondary" size="sm" onClick={() => removeFromCart(item)}>
									-
								</Button>
								<Button variant="secondary" size="sm" onClick={() => addToCart(item)}>
									+
								</Button>
							</Col>
						</Row>
					</ListGroup.Item>
				))}
			</ListGroup>
			<p>Total price: ${getTotalPrice().toFixed(2)}</p>
		</Col>
	);
};
