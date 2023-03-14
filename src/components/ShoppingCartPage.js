import React, { useState } from 'react';
import { ProductDetails } from './ProductDetails';
import { Cart } from './Cart';
import { Col, Row, Form, Button } from 'react-bootstrap';

function ShoppingCartPage() {
	//cartItems an array state that holds all the products added to the cart

	//AddToChart(product)
	// if product exists?
	//if product already exists in the cart, item.quantity +1
	//else new item added with item.quantity = 1

	//removeToChart(product)
	// if product exists, and find item.quantity
	//if product item.quantity > 1
	//else product item.quantity = 1, remove item, item.id != product.id

	//TotalPrice
	// cartItems(item => item.price * item.quantity)

	//ProductList component - addToChart(product)

	//Cart component - removeFromChart(product)

	const [ cartItems, setCartItems ] = useState([]);

	const addToCart = (product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);

		if (existingItem) {
			const newCartItems = cartItems.map(
				(item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
			);
			setCartItems(newCartItems);
		} else {
			setCartItems([ ...cartItems, { ...product, quantity: 1 } ]);
		}
	};

	const removeFromCart = (product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);

		if (existingItem.quantity === 1) {
			const newCartItems = cartItems.filter((item) => item.id !== product.id);
			setCartItems(newCartItems);
		} else {
			const newCartItems = cartItems.map(
				(item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)
			);
			setCartItems(newCartItems);
		}
	};

	const getTotalPrice = () => {
		return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	return (
		<div>
			<h1>ShoppingCartPage</h1>
			<Row>
				<ProductDetails addToCart={addToCart} />

				<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
			</Row>
		</div>
	);
}

export default ShoppingCartPage;
