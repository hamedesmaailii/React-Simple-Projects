import React, {useState} from 'react';

const AdminPanel = ({menuItems, addItem, removeItem}) => {
    const [newItem, setNewItem] = useState({name: '', description: '', price: 0});

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newItem);
        setNewItem({name: '', description: '', price: 0});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newItem.description}
                    onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({...newItem, price: parseFloat(e.target.value)})}
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;