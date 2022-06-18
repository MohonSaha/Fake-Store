import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {setCartCount} = props;
    console.log(props.product);

    return (
        <div className='col-md-4'>
            <div data-aos="flip-right" className="card p-3 border">
                <img className='w-50 m-auto' src={props.product.image} alt="" />
            <h1>{props.product.title.slice(0, 10)}</h1>
            <div className="d-flex justify-content-around">
            <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
            <button className='btn btn-danger'>Delete</button>
            {/* <button className='btn btn-info'>Details</button> */}
            <ReactModal product={props.product}></ReactModal>
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;