// StarRating.js
import React from 'react';
import Star from '../assets/images/star.svg'

const StarRating = ({ stars }) => {

  const starArray = Array.from({ length: stars }, (_, index) => index + 1);

  const img = <img src={Star} alt="Star" />

  return (
    <div className='reviews-slider-star'>
      {starArray.map((_, index) => (
        <span key={index}>{img}</span>
      ))}
    </div>
  );
};

export default StarRating;