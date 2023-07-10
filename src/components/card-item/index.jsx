import React from 'react';
import './styles.css';

const CardItem = ({ title, price, image }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card__img' />
      <div className='card__text'>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </div>
  )
};

export default CardItem;
