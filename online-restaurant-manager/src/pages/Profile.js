import React from 'react';
import OrderHistory from '../components/OrderHistory';

const Profile = ({orders}) => {
    return (
        <div>
            <h2>Profile</h2>
            <OrderHistory orders={orders}/>
        </div>
    );
};

export default Profile;