import { Col, Row, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
export const ProductDetails = (props) => {
	// The productStates array now includes id, name, price, and autoship properties for each product.

	// The applyDiscount function now takes price and autoship as arguments and calculates the discounted price if autoship is true. The discounted price is then returned.

	// The handleAutoshipToggle function has been renamed to toggleAutoship, and it now updates the autoship property of the product with the specified productId.

	// The ProductDetails component now uses the map method to iterate over the productStates array and render each product. The product name, price (after applying the discount), and autoship checkbox are displayed, along with an "Add to cart" button that calls props.addToCart with the selected product and its discounted price.
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
				(product) => (product.id === productId ? { ...product, autoship: !product.autoship } : product)
			)
		);
	};

	return (
		<div className="row">
			<div className="col-md-8">
				<h2>Products</h2>
				<ul className="list-group">
					{productStates.map((product) => (
						<li key={product.id} className="list-group-item">
							{product.name} - ${applyDiscount(product.price, product.autoship).toFixed(2)}{' '}
							<label>
								Autoship:{' '}
								<input
									type="checkbox"
									checked={product.autoship}
									onChange={() => toggleAutoship(product.id)}
								/>
							</label>
							<button
								className="btn btn-primary"
								onClick={() =>
									props.addToCart({
										...product,
										price: applyDiscount(product.price, product.autoship)
									})}
							>
								Add to cart
							</button>
						</li>
					))}
				</ul>
			</div>
			{/* <div className="col-md-4">
				<Cart cartItems={props.cartItems} removeFromCart={props.removeFromCart} />
			</div> */}
		</div>
	);
};
