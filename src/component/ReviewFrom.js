import React, { useState } from "react";
import ReactRating from "react-rating-stars-component";

const ReviewForm = ({ onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({ rating, text: reviewText, image });
    setRating(0);
    setReviewText("");
    setImage(null);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReactRating
        count={5}
        size={40}
        isHalf={true}
        value={rating}
        onChange={(newRating) => setRating(newRating)}
      />
      <br />
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here..."
        rows={4}
      />
      <br />
      <input type="file" id="image" name="image" onChange={handleUpload} />
      <br />
      <button type="submit">리뷰 등록</button>
      {image && <img src={image} />}
      <p>{rating}점</p>
      <p>{reviewText}</p>
    </form>
  );
};

export default ReviewForm;
