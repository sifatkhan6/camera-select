import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;
    const selectedProduct = cart.map((cart) => <div className='selected-item-cart' key={cart.id}>
        <p>{cart.name}</p>
        <p>Price: {cart.price}</p>
    </div>)


    console.log(cart);

    return (
        <div className='cart'>
            <h2>Selected Items</h2>
            <div>
                <h4> {selectedProduct.slice(0, 4)} </h4>
            </div>
            
                <button className='btn1'>Choose One</button>
                <button className='btn2'>Remove All</button>
        </div>
    );
};

export default Cart;