import React from 'react';
import './Card.css';
import { BsFillCartFill } from 'react-icons/bs';

const Card = (props) => {
  // console.log(props);
  const { img, name, price, bullet, capacity, action } = props.gunData;
  const { handleAddToCart } = props;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>

      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet Type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Actions: {action}</p>
      </div>

      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(props.gunData)}>
          <BsFillCartFill className="icon"></BsFillCartFill>
        </button>
        <h1> $ {price}</h1>
      </div>
    </div>
  );
};

export default Card;
