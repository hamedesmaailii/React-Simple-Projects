import React from 'react';
const Cart = ({cartItems, removeFromCart, placeOrder}) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h3>Your Cart</h3>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={item.index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default Cart;