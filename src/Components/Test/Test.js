import React, { useState } from 'react';

const Test = (props) => {
    // const {count} = props
    console.log();

    const [count, setCount] = useState(0);

    const minus = () => {
        setCount(count - 1);
        if(count <= 0){
            setCount(0);
        }
    }
    const pluss = () => {
        setCount(count + 1);

    }
    

    return (
        <div>
            
            <div className='count mt-5'></div>
            <h1>{count}</h1>
            <button onClick={pluss} className='ms-3 p-3'>+</button>
            <button onClick={minus} className='ms-3 p-3'>-</button>
        </div>
    );
};

export default Test;