import React, { useState } from 'react';
import styled from 'styled-components';

const TransparentTextarea = styled.textarea`
    width: 100%;
    height: auto;
    background-color: transparent;
    border: none;
    color: inherit;  /* 부모 요소의 색상을 상속 */
    font-size: inherit;  /* 부모 요소의 폰트 크기를 상속 */
    line-height: inherit;  /* 부모 요소의 줄 간격 상속 */
    resize: none;  /* 사용자가 크기를 조정하지 못하도록 설정 */
    outline: none;  /* 포커스 시 생기는 테두리 제거 */
    padding: 0;  /* 여백 제거 */
    
    &:focus {
        outline: none;  /* 포커스 시에도 테두리 생기지 않게 */
    }
`;

const ReviewContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
`;

const ReviewList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
`;

const ReviewItem = styled.li`
    background-color: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;

    & .author {
        font-weight: bold;
        margin-bottom: 8px;
    }

    & .content {
        margin-bottom: 8px;
    }

    & .timestamp {
        font-size: 0.8rem;
        color: gray;
    }

    & .actions {
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: flex;
        gap: 8px;
    }

     & .actions button {
        background-color: transparent; /* 투명 배경 */
        color: #007bff; /* 텍스트 색상 */
        border: 1px solid #007bff; /* 테두리 */
        border-radius: 8px;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const ReviewForm = styled.form`
    display: flex;
    flex-direction: column;

    & textarea {
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ccc;
    }

    & button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

function ReviewPage() {
    const [reviews, setReviews] = useState([
        { id: 1, author: '강아지가 좋아', content: '가평휴게소에 깨끗하고 반려동물 놀이터가 있어 좋네요.', timestamp: '2024-09-10' },
        { id: 2, author: '행복한 사람', content: '덕평 휴게소의 시설이 아주 좋았어요!', timestamp: '2024-09-12' },
        
    ]);
    const [newReview, setNewReview] = useState('');
    const [editingReview, setEditingReview] = useState(null);
    const [editContent, setEditContent] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim() === '') return;

        const newReviewObj = {
            id: reviews.length + 1,
            author: 'Eric', 
            content: newReview,
            timestamp: new Date().toLocaleDateString(),
        };
        setReviews([...reviews, newReviewObj]);
        setNewReview(''); 
    };

    const handleDelete = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    const handleEdit = (review) => {
        setEditingReview(review.id);
        setEditContent(review.content);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setReviews(
            reviews.map((review) =>
                review.id === editingReview
                    ? { ...review, content: editContent }
                    : review
            )
        );
        setEditingReview(null);
        setEditContent('');
    };

    return (
        <ReviewContainer>
            <h2>리뷰 게시판</h2>

            <ReviewList>
                {reviews.map((review) => (
                    <ReviewItem key={review.id}>
                        <div className="author">{review.author}</div>
                        {editingReview === review.id ? (
                            <form onSubmit={handleEditSubmit}>
                                <TransparentTextarea
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                />
                                <button type="submit">수정 완료</button>
                            </form>
                        ) : (
                            <>
                                <div className="content">{review.content}</div>
                                <div className="timestamp">{review.timestamp}</div>
                            </>
                        )}
                        <div className="actions">
                            <button onClick={() => handleEdit(review)}>수정</button>
                            <button onClick={() => handleDelete(review.id)}>삭제</button>
                        </div>
                    </ReviewItem>
                ))}
            </ReviewList>

            <ReviewForm onSubmit={handleReviewSubmit}>
                <textarea
                    placeholder="리뷰를 작성하세요..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <button type="submit">리뷰 작성</button>

            </ReviewForm>
        </ReviewContainer>
    );
}

export default ReviewPage;
