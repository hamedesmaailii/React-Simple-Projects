import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MenuList from '../components/MenuList';
const Menu = ({addToCart}) => {
    const [menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/menu')
            .then(response => setMenuItem(response.data))
            .catch(error => console.error('Error fetching menu: ', error));
    }, []);

    return (
        <div>
            <h2>Menu</h2>
            <MenuList items={menuItem} addToCart={addToCart} />
        </div>
    );
};

export default Menu;