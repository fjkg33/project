import React from 'react';
import Rating from "react-rating-stars-component";

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      {reviews && reviews.map((review, index) => (
        <div key={index} style={{border: '1px solid #ccc'}}>
          <Rating
            count={5}
            size={30}
            isHalf={true}
            value={review.rating}
            edit={false}
          />
          <p className='review-txt'>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
