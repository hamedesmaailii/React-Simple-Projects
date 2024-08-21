import React, {useState} from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Hamed'},
        {id: 2, name: 'Hakan'}
    ]);

    return (
        <div>
            <h3>Team Members</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;