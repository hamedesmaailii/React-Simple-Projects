import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({items, addToCart}) => {
    return (
        <div>
            <h4>Menu</h4>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <MenuItem item={item} addToCart={addToCart} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuList;