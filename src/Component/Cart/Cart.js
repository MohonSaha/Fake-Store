import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Selected Watch</h3>
            <button className='btn-choose'>CHOOSE 1 FOR ME</button>
            <button className='btn-again'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;