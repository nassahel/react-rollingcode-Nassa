import React from 'react';
import './styles.css';

const Notas = (props) => {
    return (
        <div>
            <h3>{props.titulo}</h3>
            <p>{props.cuerpo}</p>
        </div>
    );
};

export default Notas;