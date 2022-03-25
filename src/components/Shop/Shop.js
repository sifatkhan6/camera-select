import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> console.log(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>This is Shop Container</h2>
            </div>
            <div className="cart-container">
                <h2>This is cart container</h2>
            </div>
        </div>
    );
};

export default Shop;