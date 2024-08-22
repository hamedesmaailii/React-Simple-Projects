import React from 'react';
const MenuItem = ({item, addToCart}) => {
    return (
        <div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default MenuItem;