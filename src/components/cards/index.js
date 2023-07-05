import React, { useState, useEffect } from 'react';
import Notas from '../nota';
import './styles.css';

const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <div>
            {
                data?.map(e => (
                    <Notas titulo={e.title} cuerpo={e.body} />
                ))
            }
        </div>
    );
};

export default Cards;