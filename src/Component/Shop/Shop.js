import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(products);

    useEffect(()=> {
        fetch('watch.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (productData) => {
        console.log(productData);
    }


    return (
        <div className="shop">
            <p>Trial Your Passion</p>
            <h3>Choose 4 Watch</h3>
            <div className='shop-container'>
            
            <div className="product-container">
                
                    {
                        products.map(product => (<Product
                        productData={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}></Product>))
                    }
            </div>

            <div className="cart-container">
                    <Cart></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;