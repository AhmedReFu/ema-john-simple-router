import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping</p>
            <p>Tax: </p>
            <h5>Grand Total: </h5>
            <button>Clear Cart </button>
            <button>Review Order</button>
        </div>
    );
};

export default Cart;