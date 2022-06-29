import React from 'react';
import './Product.css';
import {BsCart4} from 'react-icons/bs';
// import CardGroup from 'react-bootstrap/CardGroup';

const Product = (props) => {
    // console.log(props.productData);
    const {name, img, price} = props.productData;
    const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img className='image' src={img} alt="" />
            <div className='product-info'>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            </div>
            <button onClick={() => handleAddToCart(props.productData)} className='btn-cart'>
                <p className='btn-text'>Add to cart <BsCart4/></p>
            </button>
        </div>
 
    );
};

export default Product;