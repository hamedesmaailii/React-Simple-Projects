import React from 'react';
import {Link} from 'react-router-dom';

const UserList = ({users}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit-user/${user.id}`}>Edit</Link>
                        <button onClick={() => alert('Delete functionality here')}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserList;