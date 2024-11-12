import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for basic layout
const ReviewWrapper = styled.div`
  padding: 16px;
  max-width: 720px;
  margin: 0 auto;
  background-color: #f8f9fa;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const ReviewInput = styled.textarea`
  padding: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 12px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReviewList = styled.div`
  margin-top: 24px;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ReviewItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

function ReviewBoard() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() === '') return;

    // 새로운 리뷰 추가
    setReviews([...reviews, newReview]);
    setNewReview(''); // 입력 필드 초기화
  };

  return (
    <ReviewWrapper>
      <h2>리뷰 작성하기</h2>
      <ReviewForm onSubmit={handleSubmit}>
        <ReviewInput
          rows="4"
          placeholder="리뷰를 입력하세요..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <SubmitButton type="submit">리뷰 제출</SubmitButton>
      </ReviewForm>

      <ReviewList>
        {reviews.length === 0 ? (
          <p>아직 리뷰가 없습니다.</p>
        ) : (
          reviews.map((review, index) => (
            <ReviewItem key={index}>{review}</ReviewItem>
          ))
        )}
      </ReviewList>
    </ReviewWrapper>
  );
}

export default ReviewBoard;
