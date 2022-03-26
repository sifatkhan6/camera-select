import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;

    // const [clear, setClear] = useState[{}];

    let selectedProduct = cart.map((cart) => <div className='selected-item-cart' key={cart.id}>
        <p>{cart.name}</p>
        <p>Price: ${cart.price}</p>
    </div>)

    const clearAll = () => {
        selectedProduct = {};
    }

    return (
        <div className='cart'>
            <h2>Selected Items</h2>
            <div>
                <h4> {selectedProduct.slice(0, 4)} </h4>
            </div>
            <div className='btn-section'>
                <button className='btn1'>Choose One</button>
                <button onClick={()=>clearAll()} className='btn2'>Remove All</button>
            </div>
        </div>
    );
};

export default Cart;