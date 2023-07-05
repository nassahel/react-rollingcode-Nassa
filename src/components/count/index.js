import React, { useState } from 'react';
import './styles.css';

const Count = () => {
    const [count, setCount] = useState(0);

    const [first, setFirst] = useState([1, 2, 3]);
    const [first2, setFirst2] = useState({ name: 'pedro' });

    const handleClick = () => {
        setCount((prevState) => prevState + 1);
        setFirst((prevState) => [...prevState, 4]);
        setFirst2((prevState) => ({ ...prevState, lastName: 'jose' }))
    };

    return (
        <div className='card'> 
            <h3>{count}</h3>
            <button onClick={handleClick}>Aumentar</button>
        </div>
    )
}
   

export default Count;