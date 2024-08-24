// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import {useParams} from 'react-router-dom';
//
// const EditUser = () => {
//     const {id} = useParams();
//     const [user, setUser] = useState({name: '', email: ''});
//
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users/${id}')
//             .then(response => setUser(response.data))
//             .catch(error => console.error('Error fetching user:', error));
//     }, [id]);
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put('https://jsonplaceholder.typicode.com/users/${id}', user)
//             .then(response => alert('User updated successfully!'))
//             .catch(error => console.error('Error updating user:', error));
//     };
//
//     return (
//         <div>
//             <h2>Edit User</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         value={user.name}
//                         onChange={(e) => setUser({...user, name: e.target.value})}
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={user.email}
//                         onChange={(e) => setUser({...user, email: e.target.value})}
//                     />
//                 </div>
//                 <button type="submit">Update User</button>
//             </form>
//         </div>
//     );
// };
//
// export default EditUser;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';

const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, [id]);

    const handleUpdateUser = (updatedUser) => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
            .then(response => alert('User updated successfully!'))
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div>
            <h2>Edit User</h2>
            {user ? (
                <UserForm initialUser={user} onSubmit={handleUpdateUser} buttonText="Update User" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditUser;