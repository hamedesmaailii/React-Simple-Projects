import React from 'react';

const OrderHistory = ({orders}) => {
    return (
        <div>
            <h3>Order History</h3>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        <p>Order: #{index + 1}</p>
                        <ul>
                            {order.items.map((item, i) => (
                                <li key={i}>{item.name} - ${item.price}</li>
                            ))}
                        </ul>
                        <p>Total: ${order.totalPrice.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OrderHistory;