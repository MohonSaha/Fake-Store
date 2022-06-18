import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = ({setCartCount}) => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }, []);
    console.log(products);

    return (
        <div className='container'>
            <h1 className='mt-5 mb-4'>All Products Here</h1>
           <div className="row ">
           {
                products.map(pd => (
                <SingleProduct 
                setCartCount = {setCartCount}
                product={pd}
                key={pd.id}
                ></SingleProduct>))
            }
           </div>
            
        </div>
    );
};

export default AllProducts;