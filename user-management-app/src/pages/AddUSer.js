// import React, {useState} from 'react';
// import axios from 'axios';
// import UserForm from '../components/UserForm';
//
// const AddUSer = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('https://jsonplaceholder.typicode.com/users', {name, email})
//             .then(response => {
//                 alert('User added successfully!');
//                 setName('');
//                 setEmail('');
//             })
//             .catch(error => console.error('Error adding user:', error));
//     };
//
//     return (
//         <div>
//             <h2>Add User</h2>
//             {/*<form onSubmit={handleSubmit}>*/}
//             {/*    <div>*/}
//             {/*        <label>Name:</label>*/}
//             {/*        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>*/}
//             {/*    </div>*/}
//             {/*    <div>*/}
//             {/*        <label>Email:</label>*/}
//             {/*        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />*/}
//             {/*    </div>*/}
//             {/*    <button type="submit">Add User</button>*/}
//             {/*</form>*/}
//             <UserForm onSubmit={handleAddUser}/>
//         </div>
//     );
// };
//
// export default AddUSer;


import React from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';

const AddUser = () => {
    const handleAddUser = (user) => {
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => alert('User added successfully!'))
            .catch(error => console.error('Error adding user:', error));
    };

    return (
        <div>
            <h2>Add User</h2>
            <UserForm onSubmit={handleAddUser} buttonText="Add User" />
        </div>
    );
};

export default AddUser;