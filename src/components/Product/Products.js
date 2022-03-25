import React from 'react';
import './Product.css'

const Products = (props) => {
    console.log(props.product.picture)
    const {id, picture, price, name} = props.product;
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div className="product-info">
                <h3> {name} </h3>
                <h5>Price: $ {price} </h5>
            </div>
            <button className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Products;