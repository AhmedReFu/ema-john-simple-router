import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    // const []=cart;
    let total = 0;
    let ship = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        ship = ship + product.shipping * product.quantity;
    }
    const tax = (total * 0.1);
    const grand = total + ship + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:${total} </p>
            <p>Total Shipping: ${ship}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grand}</h5>
            <button>Clear Cart </button>
            {props.children}
        </div>
    );
};

export default Cart;