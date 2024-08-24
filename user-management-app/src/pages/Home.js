import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h3>User List</h3>
            <UserList users={users} />
        </div>
    );
};

export default Home;