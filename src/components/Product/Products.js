import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Products = (props) => {
    const {product, handleAddToCart} = props;
    const {id, picture, price, name} = product;
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div className="product-info">
                <h3> {name} </h3>
                <h5>Price: $ {price} </h5>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <p className='btn-paragraph'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;