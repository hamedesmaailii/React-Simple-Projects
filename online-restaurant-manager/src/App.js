import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CartPage from './pages/CartPage';
import Profile from './pages/Profile';
import AdminPanel from './components/AdminPanel';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const placeOrder = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setOrders([...orders, {items: cartItems, totalPrice}]);
    setCartItems([]);
  };

  const addItem = (item) => {
    setMenuItems([...menuItems, item]);
  };

  const removeItem = (index) => {
    const newMenu = [...menuItems];
    newMenu.splice(index, 1);
    setMenuItems(newMenu);
  };

  return (
      <Router>
        <div className="App">
          <header>
            <h1>Online Restaurant Manager</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/Cart">cart</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/admin">Admin Panel</Link></li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
            <Route path="/profile" element={<Profile orders={orders} /> } />
            <Route path="/admin" element={<AdminPanel menuItems={menuItems} addItem={addItem} removeItem={removeItem} /> } />
          </Routes>
        </div>
      </Router>
  );
};

export default App;