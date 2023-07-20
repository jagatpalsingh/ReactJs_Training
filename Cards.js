import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = (props) => {
  return (
    <div className="card">
      
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Card;