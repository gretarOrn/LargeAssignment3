import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div>
            <h1>Would you like Pickup or delivery</h1>
            <button type="button"><Link to="/checkout/pickupform">Pickup</Link></button>
            <button type="button"><Link to="/checkout/deliveryform">Delivery</Link></button>
        </div>
    )
};

export default Checkout;