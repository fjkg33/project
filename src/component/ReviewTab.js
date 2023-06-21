import React, { useState } from "react";
import ReviewForm from "../ReviewForm";
import ReviewsList from "./ReviewList";
import { Container } from "react-bootstrap";

const ReviewTab = () => {
  const [reviews, setReviews] = useState([]);
  const [key, setKey] = useState(0);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <Container className="myTab">
      <Container className="myTab">
        <ReviewForm onReviewSubmit={handleReviewSubmit} />
        <ReviewsList reviews={reviews} />
      </Container>
    </Container>
  );
};

export default ReviewTab;
