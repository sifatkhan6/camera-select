import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;

    const [selectedOne, setSelected] = useState([]);

    const chooseOne = (cart) => {
        let random = cart[Math.floor(Math.random() * cart.length)];
        let allSelection = [random];
        setSelected(allSelection);
    }

    const removeAll = (cart) => {
        // selectedProduct = cart.map((cart) => <div className='selected-item-cart' key={cart.id}></div>);

        let random = cart[Math.floor(Math.random() * cart.length)];
        let allSelection = [random];
        setSelected(allSelection);
    }

    let selectedProduct = cart.map((cart) => <div className='selected-item-cart' key={cart.id}>
        <p>{cart.name}</p>
        <p>Price: ${cart.price}</p>
    </div>)

    return (
        <div className='cart'>
            <h2>Selected Items</h2>
            <div>
                <h4> {selectedProduct.slice(0, 4)} </h4>
            </div>

            <div>
               {
                    selectedOne.map((cart) => (
                        <h4>Recomenned: {cart.name}</h4>
                    ))
               }
            </div>

            <div className='btn-section'>
                <button onClick={() => chooseOne(cart)} className='btn1'>Choose One</button>
                <button onClick={() => removeAll(cart)} className='btn2'>Remove All</button>
            </div>
        </div>
    );
};

export default Cart;