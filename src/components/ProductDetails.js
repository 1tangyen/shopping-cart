import React, { useState } from 'react';
import { Col, Form, ListGroup } from 'react-bootstrap';

export const ProductDetails = ({ setCartItems, addToCart }) => {
	const [ productStates, setProductStates ] = useState([
		{ id: 1, name: 'Product 1', price: 10, autoship: false },
		{ id: 2, name: 'Product 2', price: 20, autoship: false },
		{ id: 3, name: 'Product 3', price: 30, autoship: false }
	]);

	const applyDiscount = (price, autoship) => {
		if (autoship) {
			return price * 0.85;
		}
		return price;
	};

	const toggleAutoship = (productId) => {
		setProductStates((prevState) =>
			prevState.map(
				(product) =>
					product.id === productId
						? {
								...product,
								autoship: !product.autoship,
								price: applyDiscount(product.price, !product.autoship)
							}
						: product
			)
		);
		setCartItems((prevState) =>
			prevState.map(
				(item) => (item.id === productId ? { ...item, price: applyDiscount(item.price, !item.autoship) } : item)
			)
		);
	};

	return (
		<div className="row">
			<div className="col-md-8">
				<h2>Products</h2>
				<ListGroup>
					{productStates.map((product) => (
						<ListGroup.Item key={product.id}>
							<div className="d-flex justify-content-between align-items-center">
								<div>
									<h5>{product.name}</h5>
									<p>
										Price: $
										{applyDiscount(product.price, product.autoship).toFixed(2)}
									</p>
								</div>
								<div>
									<Form.Check
										type="switch"
										id={`custom-switch-${product.id}`}
										label="Autoship"
										checked={product.autoship}
										onChange={() => toggleAutoship(product.id)}
									/>
									<button
										className="btn btn-primary ml-3"
										onClick={() =>
											addToCart({
												...product,
												price: applyDiscount(product.price, product.autoship)
											})}
									>
										Add to cart
									</button>
								</div>
							</div>
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
		</div>
	);
};
