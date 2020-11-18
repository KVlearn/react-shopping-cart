import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//ProductContext and CartContext Object from context
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//receives the product - just add to cart
		console.log('item in app',item) //is an object
		console.log('cart=',cart)//is an array
		setCart([...cart,item])
	};

	const removeItem=(inputItemId)=>{
		console.log('!!!im in removeItem!!!')
		console.log('itemid=',inputItemId)
		console.log('cart=',cart)
		setCart(cart.filter(item=> item.id !== inputItemId))
	}

	return (
		//Step#1 wrap app with imported ProductContext so data is distributed
		//Step#2 pass the value as props to the provider
		<ProductContext.Provider value={{products,addItem}}>
		<CartContext.Provider value={{cart,removeItem}}>
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products  />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
