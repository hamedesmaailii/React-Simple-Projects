import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({cartItems, removeFromCart, placeOrder}) => {
    return (
        <div>
            <h2>Your Cart</h2>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} placeOrder={placeOrder}/>
        </div>
    );
};

export default CartPage;