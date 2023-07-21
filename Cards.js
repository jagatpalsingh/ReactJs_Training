import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = (props) => {
  return (
    <div className="card">
      
      <div className="card-content">
        <h1>{props.description}</h1>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Card;